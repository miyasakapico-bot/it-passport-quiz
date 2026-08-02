(() => {
  "use strict";

  const QUESTIONS = Array.isArray(globalThis.QUIZ_QUESTIONS) ? globalThis.QUIZ_QUESTIONS : [];
  const STORAGE_KEY = "pofurin-it-passport-history-v1";
  const CURRENT_BATCH_ID = "addition-2026-07-26";
  const CHAPTER_13_15_BATCH_ID = "addition-2026-08-02-ch13-15";
  const POSITIVE_MESSAGES = [
    "その調子なのだ！",
    "ひとつ身についたのだ！",
    "いい答えなのだ！",
    "こつこつ最強なのだ！",
    "せいかいなのだ！さすがぴこちゃなのだ！",
    "ぶぃぶぃっ☆ また一つ強くなったのだ！",
    "ぽふぽふ応援が効いたのだー！",
    "その知識、しっかり持ち帰るのだ！",
    "一問ぶん、未来のぴこちゃを助けたのだ！",
    "焦らず、油断せず！でも今のは完璧なのだ！",
    "ぴこちゃ、冴えているのだー！",
    "大正解！葉っぱ二枚が喜んでいるのだ！",
    "てとてと進めば、合格へ着くのだ！",
    "その調子なのだ！ぽふりんも鼻が高いのだ！",
    "知識を一個捕まえたのだー！",
    "すごいのだ！ブラックサンダー級のひらめきなのだ！",
    "ぴこちゃの正解、最高レアなのだ！",
    "やったのだ！合格へまた一歩なのだ！",
    "ぽふりん先生、花丸をあげるのだ！",
    "この問題はもう怖くないのだ！",
    "正解を積み上げれば、いつか山になるのだ！",
    "今の一問、ぶぃぶぃだったのだ☆",
    "ぴこちゃ、ちゃんと理解しているのだ！",
    "むふー！これは見事な正解なのだ！",
    "かわいいぽふりんと賢いぴこちゃ、最強なのだ！",
    "今日の努力が、未来で光るのだ！",
    "苦手問題を一匹やっつけたのだー！",
    "経験は持ち帰る！正解も持ち帰るのだ！",
    "ぴこちゃならできると思っていたのだ！",
    "正解祝いのおやつを所望するのだ！",
    "ぽふりん、うれしくて転がってしまうのだー！",
    "葉っぱをぱたぱたして祝うのだ！",
    "よく見抜いたのだ！おみごとなのだ！",
    "正解だから、よいのだー！",
    "正解なのだ！知識がまたひとつ増えたのだー！",
    "ぶぃぶぃっ☆ その調子なのだ！",
    "今の一問が未来のぴこちゃを助けるのだ！",
    "見事なのだ！ぽふりんも短い腕で拍手するのだ！",
    "正解祝いのカルビを検討するのだ…😏",
    "努力した事実まで、しっかり保存したのだ！",
    "一歩進んだのだ！かわいいから二歩分でもよいのだ！",
    "かわいいから、よいのだ！"
  ];
  const INCORRECT_MESSAGES = [
    "あとで復習するのだ！",
    "惜しいのだ！今ここで覚えれば本番では正解なのだ！",
    "復習チャンスなのだ。経験だけ持ち帰るのだ！",
    "間違いを見つけたから、今日はもう一つ強くなったのだ！",
    "焦らず、油断せずなのだ。解説を一緒に見るのだ！",
    "この問題、次に会ったときが勝負なのだ！",
    "ぽふりんも一緒に覚えるから大丈夫なのだ！",
    "不正解は敗北ではなく、弱点発見イベントなのだ！"
  ];
  const STREAK_MESSAGES = [
    "連続正解なのだー！葉っぱが誇らしげに揺れているのだ！",
    "勢いが来ているのだ！ぶぃぶぃっ☆",
    "けいかくどおりなのだ…😏",
    "知識のコンボがつながっているのだ！",
    "最高レアの集中バフをかけるのだー！"
  ];
  const MODE_LABELS = {
    all: "全問題",
    random10: "ランダム10問",
    random20: "ランダム20問",
    weak: "苦手問題のみ",
    category: "カテゴリー別"
  };
  const RANGE_LABELS = {
    legacy: "これまでの問題",
    current: "今回追加した問題",
    chapter1315: "追加範囲②（13～15章）",
    all: "すべての問題"
  };

  const elements = {
    views: [...document.querySelectorAll(".view")],
    homeButton: document.querySelector("#home-button"),
    historyButton: document.querySelector("#history-button"),
    homeView: document.querySelector("#home-view"),
    quizView: document.querySelector("#quiz-view"),
    resultView: document.querySelector("#result-view"),
    historyView: document.querySelector("#history-view"),
    modeButtons: [...document.querySelectorAll("[data-mode]")],
    rangeInputs: [...document.querySelectorAll("[name='question-range']")],
    rangeSummary: document.querySelector("#range-summary"),
    legacyRangeCount: document.querySelector("#legacy-range-count"),
    currentRangeCount: document.querySelector("#current-range-count"),
    chapterRangeCount: document.querySelector("#chapter-range-count"),
    allRangeCount: document.querySelector("#all-range-count"),
    questionCountLabel: document.querySelector("#question-count-label"),
    weakModeCount: document.querySelector("#weak-mode-count"),
    categorySelect: document.querySelector("#category-select"),
    categoryStartButton: document.querySelector("#category-start-button"),
    lifetimeStats: document.querySelector("#lifetime-stats"),
    quitButton: document.querySelector("#quit-button"),
    modeLabel: document.querySelector("#mode-label"),
    correctStat: document.querySelector("#correct-stat"),
    answeredStat: document.querySelector("#answered-stat"),
    rateStat: document.querySelector("#rate-stat"),
    streakStat: document.querySelector("#streak-stat"),
    questionNumber: document.querySelector("#question-number"),
    categoryLabel: document.querySelector("#category-label"),
    progressBar: document.querySelector("#progress-bar"),
    quizHeading: document.querySelector("#quiz-heading"),
    choices: document.querySelector("#choices"),
    unknownButton: document.querySelector("#unknown-button"),
    feedback: document.querySelector("#feedback"),
    feedbackTitle: document.querySelector("#feedback-title"),
    feedbackMascot: document.querySelector("#feedback-mascot"),
    mascotMessage: document.querySelector("#mascot-message"),
    correctAnswerLine: document.querySelector("#correct-answer-line"),
    explanation: document.querySelector("#explanation"),
    nextButton: document.querySelector("#next-button"),
    resultMessage: document.querySelector("#result-message"),
    resultStats: document.querySelector("#result-stats"),
    retryButton: document.querySelector("#retry-button"),
    resultHomeButton: document.querySelector("#result-home-button"),
    historyHomeButton: document.querySelector("#history-home-button"),
    weakListCount: document.querySelector("#weak-list-count"),
    weakList: document.querySelector("#weak-list"),
    resetHistoryButton: document.querySelector("#reset-history-button")
  };

  let learningHistory = loadHistory();
  let session = null;
  let selectedRange = elements.rangeInputs.find((input) => input.checked)?.value || "all";
  let lastModeConfig = { mode: "random10", category: null, range: selectedRange };

  function loadHistory() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved && saved.version === 1 && saved.questions && typeof saved.questions === "object") {
        return saved;
      }
    } catch (error) {
      console.warn("学習履歴を読み込めませんでした。", error);
    }
    return { version: 1, questions: {}, updatedAt: null };
  }

  function saveHistory() {
    learningHistory.updatedAt = new Date().toISOString();
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(learningHistory));
    } catch (error) {
      console.warn("学習履歴を保存できませんでした。", error);
    }
  }

  function shuffle(items) {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
    }
    return result;
  }

  function randomMessage(messages) {
    return messages[Math.floor(Math.random() * messages.length)];
  }

  function showView(target) {
    elements.views.forEach((view) => {
      view.hidden = view !== target;
    });
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function goHome() {
    session = null;
    updateHomeSummary();
    showView(elements.homeView);
  }

  function getRangePool(range = selectedRange) {
    if (range === "legacy") return QUESTIONS.filter((question) => !question.batchId);
    if (range === "current") return QUESTIONS.filter((question) => question.batchId === CURRENT_BATCH_ID);
    if (range === "chapter1315") return QUESTIONS.filter((question) => question.batchId === CHAPTER_13_15_BATCH_ID);
    return [...QUESTIONS];
  }

  function getWeakQuestions(range = null) {
    const pool = range ? getRangePool(range) : QUESTIONS;
    return pool.filter((question) => learningHistory.questions[question.id]?.weak);
  }

  function updateHomeSummary() {
    const records = Object.values(learningHistory.questions);
    const correct = records.reduce((sum, record) => sum + (record.correct || 0), 0);
    const incorrect = records.reduce((sum, record) => sum + (record.incorrect || 0), 0);
    const answered = correct + incorrect;
    const rate = answered ? Math.round((correct / answered) * 100) : 0;
    const weakCount = getWeakQuestions().length;
    const rangePool = getRangePool();
    const rangeWeakCount = getWeakQuestions(selectedRange).length;

    elements.questionCountLabel.textContent = `${rangePool.length}問が対象`;
    elements.weakModeCount.textContent = `この範囲に ${rangeWeakCount}問`;
    elements.lifetimeStats.innerHTML = `
      <span>回答 <strong>${answered}</strong>回</span>
      <span>正答率 <strong>${answered ? `${rate}%` : "--%"}</strong></span>
      <span>苦手 <strong>${weakCount}</strong>問</span>
    `;

    const legacyCount = getRangePool("legacy").length;
    const currentCount = getRangePool("current").length;
    const chapterCount = getRangePool("chapter1315").length;
    elements.legacyRangeCount.textContent = `${legacyCount}問`;
    elements.currentRangeCount.textContent = `${currentCount}問`;
    elements.chapterRangeCount.textContent = `${chapterCount}問`;
    elements.allRangeCount.textContent = `${QUESTIONS.length}問`;
    elements.rangeSummary.textContent = `選択中：${RANGE_LABELS[selectedRange]}（${rangePool.length}問）`;
  }

  function setupCategories() {
    const pool = getRangePool();
    const categories = [...new Set(pool.map((question) => question.category))];
    elements.categorySelect.innerHTML = categories
      .map((category) => {
        const count = pool.filter((question) => question.category === category).length;
        return `<option value="${escapeHtml(category)}">${escapeHtml(category)}（${count}問）</option>`;
      })
      .join("");
    elements.categoryStartButton.disabled = categories.length === 0;
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function selectQuestions(mode, category, range = selectedRange) {
    const rangePool = getRangePool(range);
    const shuffled = shuffle(rangePool);
    if (mode === "all") return shuffled;
    if (mode === "random10") return shuffled.slice(0, Math.min(10, shuffled.length));
    if (mode === "random20") return shuffled.slice(0, Math.min(20, shuffled.length));
    if (mode === "weak") return shuffle(getWeakQuestions(range));
    if (mode === "category") {
      return shuffle(rangePool.filter((question) => question.category === category));
    }
    return [];
  }

  function startQuiz(mode, category = null, range = selectedRange) {
    const selected = selectQuestions(mode, category, range);
    if (!selected.length) {
      window.alert(mode === "weak"
        ? "苦手問題はまだありません。間違えた問題や「わからない」を選んだ問題がここに追加されます。"
        : "このモードで出題できる問題がありません。");
      return;
    }

    lastModeConfig = { mode, category, range };
    session = {
      mode,
      category,
      range,
      rangePoolIds: getRangePool(range).map((question) => question.id),
      basePoolIds: selected.map((question) => question.id),
      seenIds: new Set(),
      queue: selected.map((question) => ({ id: question.id, retry: false, bridge: false })),
      initialTotal: selected.length,
      current: null,
      shuffledChoices: [],
      locked: false,
      displayed: 0,
      answered: 0,
      correct: 0,
      streak: 0,
      bestStreak: 0,
      retryCount: 0
    };

    const suffix = mode === "category" ? `：${category}` : "";
    elements.modeLabel.textContent = `${RANGE_LABELS[range]}｜${MODE_LABELS[mode]}${suffix}`;
    showView(elements.quizView);
    updateSessionStats();
    showNextQuestion();
  }

  function findQuestion(id) {
    return QUESTIONS.find((question) => question.id === id);
  }

  function showNextQuestion() {
    if (!session || session.queue.length === 0) {
      showResults();
      return;
    }

    const next = session.queue.shift();
    const question = findQuestion(next.id);
    if (!question) {
      showNextQuestion();
      return;
    }

    session.current = { ...next, question };
    session.seenIds.add(question.id);
    session.shuffledChoices = shuffle(question.choices);
    session.locked = false;
    session.displayed += 1;

    elements.questionNumber.textContent = `第${session.displayed}問${next.retry ? "・復習" : next.bridge ? "・間隔問題" : ""}`;
    elements.categoryLabel.textContent = question.category;
    elements.quizHeading.textContent = question.question;
    elements.choices.innerHTML = "";
    session.shuffledChoices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "choice-button";
      button.dataset.choice = choice;
      button.setAttribute("aria-label", `${index + 1}番、${choice}`);

      const number = document.createElement("span");
      number.className = "choice-number";
      number.textContent = String(index + 1);
      number.setAttribute("aria-hidden", "true");

      const label = document.createElement("span");
      label.textContent = choice;

      const mark = document.createElement("span");
      mark.className = "choice-mark";
      mark.setAttribute("aria-hidden", "true");

      button.append(number, label, mark);
      button.addEventListener("click", () => answerQuestion("choice", choice));
      elements.choices.append(button);
    });

    elements.unknownButton.disabled = false;
    elements.feedback.hidden = true;
    elements.feedback.className = "feedback";
    const totalNow = session.answered + session.queue.length + 1;
    elements.progressBar.style.width = `${Math.min(100, (session.answered / totalNow) * 100)}%`;
    updateSessionStats();
    elements.quizHeading.focus({ preventScroll: true });
  }

  function answerQuestion(type, selectedChoice = null) {
    if (!session || session.locked || !session.current) return;
    session.locked = true;

    const question = session.current.question;
    const isCorrect = type === "choice" && selectedChoice === question.answer;
    session.answered += 1;
    if (isCorrect) {
      session.correct += 1;
      session.streak += 1;
      session.bestStreak = Math.max(session.bestStreak, session.streak);
    } else {
      session.streak = 0;
      scheduleRetry(question.id);
    }

    recordAnswer(question.id, isCorrect, type === "unknown");
    revealAnswer(question, selectedChoice, isCorrect, type);
    updateSessionStats();
  }

  function scheduleRetry(questionId) {
    const alreadyScheduled = session.queue.some((entry) => entry.id === questionId && entry.retry);
    if (alreadyScheduled) return;

    const queuedIds = new Set(session.queue.map((entry) => entry.id));
    const bridgeCandidates = session.rangePoolIds
      .map(findQuestion)
      .filter((question) => question
        && question.id !== questionId
        && !session.seenIds.has(question.id)
        && !queuedIds.has(question.id));
    const fallbackCandidates = session.rangePoolIds
      .map(findQuestion)
      .filter((question) => question && question.id !== questionId);
    let previousId = session.queue.at(-1)?.id || questionId;
    while (session.queue.length < 5 && fallbackCandidates.length) {
      const preferred = bridgeCandidates.filter((question) => question.id !== previousId);
      const unqueuedFallback = fallbackCandidates.filter((question) => question.id !== previousId
        && !session.queue.some((entry) => entry.id === question.id));
      const nonRepeatingFallback = fallbackCandidates.filter((question) => question.id !== previousId);
      const pool = preferred.length
        ? preferred
        : unqueuedFallback.length
          ? unqueuedFallback
          : nonRepeatingFallback.length
            ? nonRepeatingFallback
            : fallbackCandidates;
      const bridge = pool[Math.floor(Math.random() * pool.length)];
      session.queue.push({ id: bridge.id, retry: false, bridge: true });
      const preferredIndex = bridgeCandidates.indexOf(bridge);
      if (preferredIndex >= 0) bridgeCandidates.splice(preferredIndex, 1);
      previousId = bridge.id;
    }

    session.queue.splice(5, 0, { id: questionId, retry: true, bridge: false });
    session.retryCount += 1;
  }

  function recordAnswer(questionId, isCorrect, isUnknown) {
    const current = learningHistory.questions[questionId] || {
      correct: 0,
      incorrect: 0,
      unknown: 0,
      lastAnswered: null,
      weak: false
    };

    if (isCorrect) {
      current.correct += 1;
    } else {
      current.incorrect += 1;
      current.weak = true;
      if (isUnknown) current.unknown += 1;
    }
    current.lastAnswered = new Date().toISOString();
    learningHistory.questions[questionId] = current;
    saveHistory();
  }

  function revealAnswer(question, selectedChoice, isCorrect, type) {
    const buttons = [...elements.choices.querySelectorAll(".choice-button")];
    buttons.forEach((button) => {
      button.disabled = true;
      const mark = button.querySelector(".choice-mark");
      if (button.dataset.choice === question.answer) {
        button.classList.add("is-correct");
        mark.textContent = "✓ 正解";
      } else if (type === "choice" && button.dataset.choice === selectedChoice) {
        button.classList.add("is-wrong");
        mark.textContent = "✕ 選択";
      }
    });
    elements.unknownButton.disabled = true;

    if (isCorrect) {
      elements.feedback.classList.add("correct");
      elements.feedbackTitle.textContent = "✓ 正解！";
      elements.mascotMessage.textContent = randomMessage(session.streak >= 2 ? STREAK_MESSAGES : POSITIVE_MESSAGES);
      elements.feedbackMascot.src = "assets/pofurin-celebrate.png";
      elements.feedbackMascot.alt = "両手を上げて喜ぶぽふりん";
    } else if (type === "unknown") {
      elements.feedback.classList.add("unknown");
      elements.feedbackTitle.textContent = "？ ここで覚えよう";
      elements.mascotMessage.textContent = randomMessage(INCORRECT_MESSAGES);
      elements.feedbackMascot.src = "assets/pofurin-study.png";
      elements.feedbackMascot.alt = "一緒に勉強するぽふりん";
    } else {
      elements.feedback.classList.add("incorrect");
      elements.feedbackTitle.textContent = "✕ おしい！";
      elements.mascotMessage.textContent = randomMessage(INCORRECT_MESSAGES);
      elements.feedbackMascot.src = "assets/pofurin-thinking.png";
      elements.feedbackMascot.alt = "やさしく考えるぽふりん";
    }

    elements.correctAnswerLine.textContent = `正解：${question.answer}`;
    elements.explanation.textContent = question.explanation;
    elements.nextButton.textContent = session.queue.length ? "次の問題へ →" : "結果を見る →";
    elements.feedback.hidden = false;
    elements.progressBar.style.width = `${Math.min(100, (session.answered / (session.answered + session.queue.length)) * 100)}%`;
    elements.feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function updateSessionStats() {
    if (!session) return;
    const rate = session.answered ? Math.round((session.correct / session.answered) * 100) : null;
    elements.correctStat.textContent = String(session.correct);
    elements.answeredStat.textContent = String(session.answered);
    elements.rateStat.textContent = rate === null ? "--%" : `${rate}%`;
    elements.streakStat.textContent = String(session.streak);
  }

  function showResults() {
    if (!session) return;
    const rate = session.answered ? Math.round((session.correct / session.answered) * 100) : 0;
    elements.resultMessage.textContent = rate >= 80
      ? "すごい集中力！この調子で定着させるのだ！"
      : rate >= 60
        ? "いい積み重ねなのだ。苦手も少しずつ育てよう！"
        : "今日見つけた苦手は、伸びしろなのだ！";
    elements.resultStats.innerHTML = `
      <div><span>正解</span><strong>${session.correct}</strong></div>
      <div><span>回答</span><strong>${session.answered}</strong></div>
      <div><span>正答率</span><strong>${rate}%</strong></div>
      <div><span>最高連続正解</span><strong>${session.bestStreak}</strong></div>
      <div><span>復習登録</span><strong>${session.retryCount}</strong></div>
      <div><span>収録済み苦手</span><strong>${getWeakQuestions().length}</strong></div>
    `;
    showView(elements.resultView);
  }

  function formatDate(value) {
    if (!value) return "未回答";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "日時不明";
    return new Intl.DateTimeFormat("ja-JP", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }).format(date);
  }

  function showHistoryView() {
    renderWeakList();
    showView(elements.historyView);
  }

  function renderWeakList() {
    const weakQuestions = getWeakQuestions();
    elements.weakListCount.textContent = `${weakQuestions.length}問`;
    elements.resetHistoryButton.disabled = Object.keys(learningHistory.questions).length === 0;

    if (!weakQuestions.length) {
      elements.weakList.innerHTML = '<div class="empty-state">🍏 苦手問題はまだありません。<br>クイズで間違えた問題がここに並びます。</div>';
      return;
    }

    elements.weakList.innerHTML = weakQuestions
      .sort((a, b) => a.category.localeCompare(b.category, "ja"))
      .map((question) => {
        const record = learningHistory.questions[question.id];
        return `
          <article class="weak-item">
            <div>
              <span class="category-tag">${escapeHtml(question.category)}</span>
              <h3>${escapeHtml(question.answer)}</h3>
              <p>${escapeHtml(question.question)}</p>
              <div class="weak-item-meta">
                <span>正解 ${record.correct || 0}回</span>
                <span>不正解 ${record.incorrect || 0}回</span>
                <span>最終回答 ${escapeHtml(formatDate(record.lastAnswered))}</span>
              </div>
            </div>
            <button class="button button-secondary remove-weak-button" type="button" data-id="${escapeHtml(question.id)}">苦手から解除</button>
          </article>
        `;
      })
      .join("");
  }

  function removeWeak(questionId) {
    if (!learningHistory.questions[questionId]) return;
    learningHistory.questions[questionId].weak = false;
    saveHistory();
    renderWeakList();
    updateHomeSummary();
  }

  function resetAllHistory() {
    const approved = window.confirm("正解・不正解回数、苦手問題、最終回答日時をすべて削除します。元に戻せません。リセットしますか？");
    if (!approved) return;
    learningHistory = { version: 1, questions: {}, updatedAt: null };
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.warn("学習履歴を削除できませんでした。", error);
    }
    renderWeakList();
    updateHomeSummary();
  }

  elements.modeButtons.forEach((button) => {
    button.addEventListener("click", () => startQuiz(button.dataset.mode));
  });
  elements.rangeInputs.forEach((input) => {
    input.addEventListener("change", () => {
      selectedRange = input.value;
      setupCategories();
      updateHomeSummary();
    });
  });
  elements.categoryStartButton.addEventListener("click", () => startQuiz("category", elements.categorySelect.value));
  elements.unknownButton.addEventListener("click", () => answerQuestion("unknown"));
  elements.nextButton.addEventListener("click", showNextQuestion);
  elements.homeButton.addEventListener("click", goHome);
  elements.quitButton.addEventListener("click", goHome);
  elements.resultHomeButton.addEventListener("click", goHome);
  elements.historyHomeButton.addEventListener("click", goHome);
  elements.historyButton.addEventListener("click", showHistoryView);
  elements.retryButton.addEventListener("click", () => startQuiz(lastModeConfig.mode, lastModeConfig.category, lastModeConfig.range));
  elements.resetHistoryButton.addEventListener("click", resetAllHistory);
  elements.weakList.addEventListener("click", (event) => {
    const button = event.target.closest(".remove-weak-button");
    if (button) removeWeak(button.dataset.id);
  });

  document.addEventListener("keydown", (event) => {
    if (elements.quizView.hidden || !session || session.locked) return;
    if (!["1", "2", "3", "4"].includes(event.key)) return;
    const index = Number(event.key) - 1;
    const choice = session.shuffledChoices[index];
    if (choice !== undefined) {
      event.preventDefault();
      answerQuestion("choice", choice);
    }
  });

  setupCategories();
  updateHomeSummary();
})();
