const STORAGE_KEY = "gym_interviews_v1";

function interviewApp() {
  return {
    // ---------- الحالة ----------
    screen: "home",
    personas: PERSONAS,
    priorities: PRIORITY_LABELS,
    sources: SOURCES,

    interviews: [],
    draft: { name: "", persona: "", source: "", notes: "", answers: {} },
    activeQuestions: [],
    currentIndex: 0,
    answer: { questionId: "", skipped: false, value: "", selectedOptions: [], openValue: "" },
    startTime: null,

    viewing: { answers: [] },
    toast: "",
    copyMsg: "",
    _toastTimer: null,

    // ---------- التهيئة ----------
    init() {
      this.loadInterviews();
    },

    loadInterviews() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        this.interviews = raw ? JSON.parse(raw) : [];
      } catch (e) {
        this.interviews = [];
      }
    },

    persist() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.interviews));
    },

    // ---------- إعداد المقابلة ----------
    startSetup() {
      this.draft = { name: "", persona: "", source: "", notes: "", answers: {} };
      this.screen = "setup";
    },

    beginInterview() {
      if (!this.draft.persona) return;
      this.activeQuestions = QUESTIONS
        .filter((q) => q.persona === this.draft.persona)
        .sort((a, b) => a.priority - b.priority);
      this.draft.answers = {};
      this.currentIndex = 0;
      this.startTime = Date.now();
      this.loadAnswer();
      this.screen = "question";
    },

    // ---------- التنقل بين الأسئلة ----------
    get currentQuestion() {
      return this.activeQuestions[this.currentIndex] || {};
    },

    get progressPct() {
      if (!this.activeQuestions.length) return 0;
      return Math.round(((this.currentIndex + 1) / this.activeQuestions.length) * 100);
    },

    loadAnswer() {
      const q = this.currentQuestion;
      const saved = this.draft.answers[q.id];
      if (saved) {
        this.answer = {
          questionId: q.id,
          skipped: saved.skipped,
          value: saved.value || "",
          selectedOptions: [...(saved.selectedOptions || [])],
          openValue: saved.openValue || "",
        };
      } else {
        this.answer = { questionId: q.id, skipped: false, value: "", selectedOptions: [], openValue: "" };
      }
    },

    commitAnswer(skipped) {
      const q = this.currentQuestion;
      const hasContent =
        !!this.answer.value ||
        (this.answer.selectedOptions && this.answer.selectedOptions.length > 0) ||
        !!(this.answer.openValue && this.answer.openValue.trim());
      this.draft.answers[q.id] = {
        questionId: q.id,
        skipped: skipped && !hasContent,
        value: this.answer.value,
        selectedOptions: [...this.answer.selectedOptions],
        openValue: this.answer.openValue,
      };
    },

    nextQuestion() {
      this.commitAnswer(false);
      if (this.currentIndex === this.activeQuestions.length - 1) {
        this.screen = "summary";
        return;
      }
      this.currentIndex++;
      this.loadAnswer();
    },

    skipQuestion() {
      this.commitAnswer(true);
      if (this.currentIndex === this.activeQuestions.length - 1) {
        this.screen = "summary";
        return;
      }
      this.currentIndex++;
      this.loadAnswer();
    },

    prevQuestion() {
      this.commitAnswer(false);
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.loadAnswer();
      }
    },

    jumpTo(idx) {
      this.currentIndex = idx;
      this.loadAnswer();
      this.screen = "question";
    },

    // ---------- إدخال الإجابات ----------
    setYesNo(val) {
      this.answer.value = this.answer.value === val ? "" : val;
    },

    toggleMulti(opt) {
      const i = this.answer.selectedOptions.indexOf(opt);
      if (i === -1) this.answer.selectedOptions.push(opt);
      else this.answer.selectedOptions.splice(i, 1);
    },

    needsTextArea() {
      const q = this.currentQuestion;
      return q.type === "open" || q.type === "yesno_open" || !!q.followup;
    },

    textPlaceholder() {
      const q = this.currentQuestion;
      if (q.type === "open") return "اكتب الإجابة هنا...";
      if (q.followup) return q.followup;
      return "تفاصيل إضافية...";
    },

    // ---------- الحفظ ----------
    get answeredCount() {
      return this.activeQuestions.filter((q) => this.isAnswered(q.id)).length;
    },

    get completionRate() {
      if (!this.activeQuestions.length) return 0;
      return this.answeredCount / this.activeQuestions.length;
    },

    isAnswered(qid) {
      const a = this.draft.answers[qid];
      if (!a || a.skipped) return false;
      return (
        !!a.value ||
        (a.selectedOptions && a.selectedOptions.length > 0) ||
        !!(a.openValue && a.openValue.trim())
      );
    },

    answerPreview(qid) {
      const a = this.draft.answers[qid];
      if (!a) return "—";
      return this.composeAnswer(a) || "(تم التخطي)";
    },

    composeAnswer(a) {
      const parts = [];
      if (a.value) parts.push(a.value);
      if (a.selectedOptions && a.selectedOptions.length) parts.push(a.selectedOptions.join("، "));
      if (a.openValue && a.openValue.trim()) parts.push(a.openValue.trim());
      return parts.join(" — ");
    },

    saveInterview() {
      this.commitAnswer(false);
      const answersArr = this.activeQuestions.map((q) => {
        const a = this.draft.answers[q.id] || { questionId: q.id, skipped: true, value: "", selectedOptions: [], openValue: "" };
        return {
          questionId: q.id,
          keywords: q.keywords,
          questionText: q.text,
          priority: q.priority,
          section: q.section,
          skipped: !this.isAnswered(q.id),
          value: a.value || "",
          selectedOptions: a.selectedOptions || [],
          openValue: a.openValue || "",
        };
      });
      const interview = {
        id: "iv_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7),
        date: new Date().toISOString(),
        persona: this.draft.persona,
        name: this.draft.name,
        source: this.draft.source,
        notes: this.draft.notes,
        answers: answersArr,
        completionRate: this.completionRate,
        duration: this.startTime ? Math.round((Date.now() - this.startTime) / 1000) : 0,
      };
      this.interviews.push(interview);
      this.persist();
      this.showToast("تم حفظ المقابلة ✓");
      this.screen = "home";
    },

    confirmExit() {
      if (confirm("إنهاء المقابلة والذهاب للملخص؟")) {
        this.commitAnswer(false);
        this.screen = "summary";
      }
    },

    // ---------- المقابلات السابقة ----------
    get sortedInterviews() {
      return [...this.interviews].sort((a, b) => new Date(b.date) - new Date(a.date));
    },

    viewInterview(iv) {
      this.viewing = iv;
      this.screen = "pastDetail";
    },

    deleteInterview(id) {
      if (!confirm("حذف هذه المقابلة نهائيا؟")) return;
      this.interviews = this.interviews.filter((iv) => iv.id !== id);
      this.persist();
      this.showToast("تم الحذف");
    },

    questionById(qid) {
      return QUESTIONS.find((q) => q.id === qid) || { keywords: qid, text: "" };
    },

    fullAnswerText(a) {
      return this.composeAnswer(a) || "—";
    },

    // ---------- مساعدات العرض ----------
    priorityClass(p) {
      const map = {
        1: "bg-red-500/20 text-red-300",
        2: "bg-orange-500/20 text-orange-300",
        3: "bg-blue-500/20 text-blue-300",
        4: "bg-slate-500/20 text-slate-300",
      };
      return map[p] || map[4];
    },

    formatDate(iso) {
      const d = new Date(iso);
      const pad = (n) => String(n).padStart(2, "0");
      return `${pad(d.getDate())}/${pad(d.getMonth() + 1)} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    },

    showToast(msg) {
      this.toast = msg;
      clearTimeout(this._toastTimer);
      this._toastTimer = setTimeout(() => (this.toast = ""), 2200);
    },

    // ---------- التصدير ----------
    exportJSON() {
      const data = JSON.stringify(this.interviews, null, 2);
      this.download(data, `gym-interviews-${this.stamp()}.json`, "application/json");
      this.showToast("تم تصدير JSON");
    },

    exportCSV() {
      const rows = [];
      const header = [
        "interview_id", "date", "persona", "name", "source", "completion_rate", "duration_sec", "overall_notes",
        "question_id", "priority", "section", "keywords", "question_text", "skipped", "answer",
      ];
      rows.push(header);
      this.interviews.forEach((iv) => {
        iv.answers.forEach((a) => {
          rows.push([
            iv.id,
            iv.date,
            (PERSONAS[iv.persona] && PERSONAS[iv.persona].label) || iv.persona,
            iv.name || "",
            iv.source || "",
            Math.round((iv.completionRate || 0) * 100) + "%",
            iv.duration || 0,
            iv.notes || "",
            a.questionId,
            a.priority,
            a.section || "",
            a.keywords || "",
            a.questionText || "",
            a.skipped ? "نعم" : "لا",
            this.composeAnswer(a),
          ]);
        });
      });
      const csv = "\uFEFF" + rows.map((r) => r.map((c) => this.csvCell(c)).join(",")).join("\r\n");
      this.download(csv, `gym-interviews-${this.stamp()}.csv`, "text/csv");
      this.showToast("تم تصدير CSV");
    },

    csvCell(val) {
      const s = String(val == null ? "" : val);
      if (/[",\r\n]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
      return s;
    },

    async copyJSON() {
      const data = JSON.stringify(this.interviews, null, 2);
      try {
        await navigator.clipboard.writeText(data);
        this.copyMsg = "تم النسخ للحافظة ✓";
      } catch (e) {
        this.copyMsg = "تعذّر النسخ - استخدم التصدير";
      }
      setTimeout(() => (this.copyMsg = ""), 2500);
    },

    download(content, filename, type) {
      const blob = new Blob([content], { type: type + ";charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    },

    stamp() {
      const d = new Date();
      const pad = (n) => String(n).padStart(2, "0");
      return `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}`;
    },
  };
}
