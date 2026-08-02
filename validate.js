#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { execFileSync } = require("node:child_process");

const root = __dirname;
const questionPath = path.join(root, "questions.js");
const appPath = path.join(root, "app.js");
const CURRENT_BATCH_ID = "addition-2026-07-26";
const CHAPTER_13_15_BATCH_ID = "addition-2026-08-02-ch13-15";
const requiredTerms = [
  "SCM", "SFA", "CRM", "ERP", "RPA", "BPR", "BPM", "DFD", "EA", "SoE", "RFI", "NDA", "RFP",
  "ソースコード", "コンパイラ", "ブラックボックス", "ホワイトボックス", "単体テスト", "結合テスト", "システムテスト", "運用テスト",
  "要件定義", "運用", "保守", "ウォーターフォールモデル", "アジャイル開発", "DevOps", "オブジェクト指向", "EUC", "RAD", "リバースエンジニアリング",
  "プロジェクトマネジメント", "WBS", "ステークホルダー", "SLA", "SLM", "インシデント管理", "サービスデスク", "システム監査",
  "コーポレートガバナンス", "経営理念", "ビジョン", "CSR", "グリーンIT", "DE&I", "ソーシャルビジネス", "HRM", "マトリックス組織",
  "著作権", "特許権", "実用新案権", "意匠権", "商標権", "パブリックドメインソフトウェア", "オープンソースソフトウェア", "CSIRT",
  "国家サイバー統括室", "雇用契約", "労働者派遣契約", "GDPR", "ISO", "ISO 9000",
  "デジュレスタンダード", "フォーラム標準", "デファクトスタンダード",
  "SWOT分析", "PPM", "VC", "IPO", "TOB", "MBO", "4P", "4C", "RFM分析", "ラガート", "UX", "マーチャンダイジング",
  "オムニチャネル", "シーズ思考", "フェルミ推定", "BSC",
  "ハッカソン", "API", "APIエコノミー", "魔の川", "死の谷", "ダーウィンの海", "PoC", "PoV", "イノベーションのジレンマ",
  "デザイン思考", "ビジネスモデルキャンバス", "リーンスタートアップ", "デジタルディスラプション", "フォアキャスティング", "バックキャスティング",
  "RFID", "NFC", "CAD", "CAM", "フリーミアム", "SEO", "CGM", "IaaS", "PaaS", "SaaS", "DaaS", "SLCP"
];
const additionRequiredTerms = [
  "BCM", "BCP", "ファシリティマネジメント", "UPS", "自家発電装置", "フリーアクセスフロア",
  "システム監査", "コーポレートガバナンス", "内部統制", "ITガバナンス", "IT統制", "職務分掌",
  "スタック", "キュー", "アルゴリズム", "HTML", "XML", "CSS", "変数", "擬似言語における代入記号「←」",
  "変数を宣言するときの型名", "配列", "順次処理", "選択処理", "繰り返し処理", "分散処理",
  "クライアントサーバシステム", "Webシステム", "シンクライアント", "サーバの仮想化", "シンプレックスシステム",
  "デュプレックスシステム", "デュアルシステム", "RAID", "ストライピング", "ミラーリング", "NAS",
  "レスポンスタイム", "TCO", "MTBF", "MTTR", "フェールソフト", "フェールセーフ", "フールプルーフ",
  "フォールトトレラント", "バスタブ曲線", "ウェアラブル端末", "ブレードサーバ", "クロック周波数",
  "マルチコアプロセッサ", "フラッシュメモリ", "CD", "DVD", "Blu-ray Disc", "RAM", "ROM", "DRAM",
  "SRAM", "dpi", "ppm", "プラグアンドプレイ"
];
const chapterRequiredTerms = [
  "E-R図", "エンティティ", "リレーションシップ", "正規化", "DBMS", "選択", "射影", "結合", "SQL", "トランザクション管理", "コミット", "バックアップファイル", "ログファイル", "ロールバック", "ロールフォワード", "排他制御",
  "LAN", "WAN", "ルーター", "デフォルトゲートウェイ", "ESSID", "ハブ", "イーサネット", "ESSIDステルス", "PLC", "通信プロトコル", "SMTP", "POP", "IMAP", "IPアドレス", "ポート番号", "MACアドレス", "DNS", "IPv6", "グローバルIPアドレス", "プライベートIPアドレス", "NAT", "DHCP", "Cc", "Bcc", "RSS", "Cookie", "MVNO", "FTTH", "VoIP", "プラチナバンド", "BLE", "LPWA", "マルチホップ", "エッジコンピューティング",
  "クラッキング", "ソーシャルエンジニアリング", "ショルダーハッキング", "トラッシング", "ダークウェブ", "マルウェア", "トロイの木馬", "RAT", "バックドア", "オートラン", "DoS攻撃", "ゼロデイ攻撃", "クロスサイトスクリプティング", "バッファオーバーフロー攻撃", "スパイウェア",
  "リスク特定→リスク分析→リスク評価→リスク対応", "リスク回避", "リスク低減", "リスク共有", "リスク保有", "ISMS", "情報セキュリティポリシー", "機密性", "完全性", "可用性",
  "共通鍵暗号方式", "平文", "CA", "PKI", "バイオメトリクス認証", "WAF", "SSL/TLS", "WPA2", "2要素認証", "IDS", "IPS", "DMZ", "HTTPS", "VPN", "ペネトレーションテスト", "シングルサインオン", "セキュリティバイデザイン", "セキュアブート", "ブロックチェーン", "クリアスクリーン", "アンチパスバック"
];
const addedPositiveMessages = [
  "せいかいなのだ！さすがぴこちゃなのだ！", "ぶぃぶぃっ☆ また一つ強くなったのだ！", "ぽふぽふ応援が効いたのだー！",
  "その知識、しっかり持ち帰るのだ！", "一問ぶん、未来のぴこちゃを助けたのだ！", "焦らず、油断せず！でも今のは完璧なのだ！",
  "ぴこちゃ、冴えているのだー！", "大正解！葉っぱ二枚が喜んでいるのだ！", "てとてと進めば、合格へ着くのだ！",
  "その調子なのだ！ぽふりんも鼻が高いのだ！", "知識を一個捕まえたのだー！", "すごいのだ！ブラックサンダー級のひらめきなのだ！",
  "ぴこちゃの正解、最高レアなのだ！", "やったのだ！合格へまた一歩なのだ！", "ぽふりん先生、花丸をあげるのだ！",
  "この問題はもう怖くないのだ！", "正解を積み上げれば、いつか山になるのだ！", "今の一問、ぶぃぶぃだったのだ☆",
  "ぴこちゃ、ちゃんと理解しているのだ！", "むふー！これは見事な正解なのだ！", "かわいいぽふりんと賢いぴこちゃ、最強なのだ！",
  "今日の努力が、未来で光るのだ！", "苦手問題を一匹やっつけたのだー！", "経験は持ち帰る！正解も持ち帰るのだ！",
  "ぴこちゃならできると思っていたのだ！", "正解祝いのおやつを所望するのだ！", "ぽふりん、うれしくて転がってしまうのだー！",
  "葉っぱをぱたぱたして祝うのだ！", "よく見抜いたのだ！おみごとなのだ！", "正解だから、よいのだー！"
];
const chapterMessages = [
  "正解なのだ！知識がまたひとつ増えたのだー！", "ぶぃぶぃっ☆ その調子なのだ！", "今の一問が未来のぴこちゃを助けるのだ！",
  "見事なのだ！ぽふりんも短い腕で拍手するのだ！", "正解祝いのカルビを検討するのだ…😏", "努力した事実まで、しっかり保存したのだ！",
  "一歩進んだのだ！かわいいから二歩分でもよいのだ！", "かわいいから、よいのだ！",
  "惜しいのだ！今ここで覚えれば本番では正解なのだ！", "復習チャンスなのだ。経験だけ持ち帰るのだ！", "間違いを見つけたから、今日はもう一つ強くなったのだ！",
  "焦らず、油断せずなのだ。解説を一緒に見るのだ！", "この問題、次に会ったときが勝負なのだ！", "ぽふりんも一緒に覚えるから大丈夫なのだ！",
  "不正解は敗北ではなく、弱点発見イベントなのだ！", "連続正解なのだー！葉っぱが誇らしげに揺れているのだ！", "勢いが来ているのだ！ぶぃぶぃっ☆",
  "けいかくどおりなのだ…😏", "知識のコンボがつながっているのだ！", "最高レアの集中バフをかけるのだー！"
];

const failures = [];
const checks = [];

function pass(message) {
  checks.push(`✓ ${message}`);
}

function fail(message) {
  failures.push(`✗ ${message}`);
}

function loadQuestions() {
  const source = fs.readFileSync(questionPath, "utf8");
  const context = vm.createContext({});
  try {
    new vm.Script(source, { filename: "questions.js" }).runInContext(context);
  } catch (error) {
    fail(`questions.js を読み込めません: ${error.message}`);
    return [];
  }
  return Array.isArray(context.QUIZ_QUESTIONS) ? context.QUIZ_QUESTIONS : [];
}

const questions = loadQuestions();
if (questions.length > 0) {
  pass(`${questions.length}問のデータを読み込み`);
} else {
  fail("問題データが1問もありません");
}

const ids = new Map();
const requiredFields = ["id", "category", "question", "answer", "choices", "explanation"];

questions.forEach((question, index) => {
  const label = question.id || `index ${index}`;
  requiredFields.forEach((field) => {
    const value = question[field];
    const isEmptyArray = Array.isArray(value) && value.length === 0;
    if (value === undefined || value === null || value === "" || isEmptyArray) {
      fail(`${label}: 必須項目 ${field} が空です`);
    }
  });

  if (question.id) {
    ids.set(question.id, (ids.get(question.id) || 0) + 1);
  }

  if (!Array.isArray(question.choices) || question.choices.length !== 4) {
    fail(`${label}: 選択肢は4つ必要です`);
    return;
  }

  if (new Set(question.choices).size !== question.choices.length) {
    fail(`${label}: 選択肢内に重複があります`);
  }

  const answerCount = question.choices.filter((choice) => choice === question.answer).length;
  if (answerCount !== 1) {
    fail(`${label}: 正解「${question.answer}」は選択肢に1回だけ含めてください（現在 ${answerCount}回）`);
  }
});

const duplicateIds = [...ids.entries()].filter(([, count]) => count > 1);
if (duplicateIds.length) {
  duplicateIds.forEach(([id, count]) => fail(`問題ID「${id}」が${count}件あります`));
} else {
  pass("問題IDに重複なし");
}

if (!failures.some((message) => message.includes("必須項目"))) pass("全問題の必須項目が入力済み");
if (!failures.some((message) => message.includes("選択肢は4つ"))) pass("全問題に4つの選択肢あり");
if (!failures.some((message) => message.includes("選択肢内に重複"))) pass("選択肢内に重複なし");
if (!failures.some((message) => message.includes("選択肢に1回だけ"))) pass("全問題で正解が選択肢に1回だけ存在");

const answerSet = new Set(questions.map((question) => question.answer));
const missingTerms = requiredTerms.filter((term) => !answerSet.has(term));
if (missingTerms.length) {
  fail(`指定用語が未登録です: ${missingTerms.join("、")}`);
} else {
  pass(`指定された全${requiredTerms.length}用語を正解として網羅`);
}

const legacyQuestions = questions.filter((question) => !question.batchId);
const additionQuestions = questions.filter((question) => question.batchId === CURRENT_BATCH_ID);
const chapterQuestions = questions.filter((question) => question.batchId === CHAPTER_13_15_BATCH_ID);
const knownBatchIds = new Set([CURRENT_BATCH_ID, CHAPTER_13_15_BATCH_ID]);
const unknownBatchQuestions = questions.filter((question) => question.batchId && !knownBatchIds.has(question.batchId));

if (legacyQuestions.length === requiredTerms.length) {
  pass(`これまでの問題を${legacyQuestions.length}問として維持`);
} else {
  fail(`これまでの問題は${requiredTerms.length}問の想定です（現在 ${legacyQuestions.length}問）`);
}

if (additionQuestions.length === additionRequiredTerms.length) {
  pass(`追加範囲①を${additionQuestions.length}問として維持`);
} else {
  fail(`追加範囲①は${additionRequiredTerms.length}問の想定です（現在 ${additionQuestions.length}問）`);
}

if (chapterQuestions.length === chapterRequiredTerms.length) {
  pass(`追加範囲②（13～15章）を${chapterQuestions.length}問として分離`);
} else {
  fail(`追加範囲②（13～15章）は${chapterRequiredTerms.length}問必要です（現在 ${chapterQuestions.length}問）`);
}

if (unknownBatchQuestions.length === 0) {
  pass("未定義の問題バッチなし");
} else {
  fail(`未定義のbatchIdを持つ問題があります: ${unknownBatchQuestions.map((question) => question.id).join("、")}`);
}

const additionAnswerCounts = new Map();
additionQuestions.forEach((question) => {
  additionAnswerCounts.set(question.answer, (additionAnswerCounts.get(question.answer) || 0) + 1);
});
const missingAdditionTerms = additionRequiredTerms.filter((term) => !additionAnswerCounts.has(term));
const duplicateAdditionTerms = additionRequiredTerms.filter((term) => additionAnswerCounts.get(term) !== 1);
if (missingAdditionTerms.length) {
  fail(`今回追加分で未登録の用語があります: ${missingAdditionTerms.join("、")}`);
} else if (duplicateAdditionTerms.length) {
  fail(`今回追加分で正解が重複しています: ${duplicateAdditionTerms.join("、")}`);
} else {
  pass(`今回指定された全${additionRequiredTerms.length}用語を1問ずつ網羅`);
}

const chapterAnswerCounts = new Map();
chapterQuestions.forEach((question) => {
  chapterAnswerCounts.set(question.answer, (chapterAnswerCounts.get(question.answer) || 0) + 1);
});
const missingChapterTerms = chapterRequiredTerms.filter((term) => !chapterAnswerCounts.has(term));
const duplicateChapterTerms = chapterRequiredTerms.filter((term) => chapterAnswerCounts.get(term) !== 1);
if (missingChapterTerms.length) {
  fail(`追加範囲②で未登録の用語があります: ${missingChapterTerms.join("、")}`);
} else if (duplicateChapterTerms.length) {
  fail(`追加範囲②で正解が重複しています: ${duplicateChapterTerms.join("、")}`);
} else {
  pass(`第13～15章の指定全${chapterRequiredTerms.length}用語を1問ずつ網羅`);
}

const legacyIds = new Set(legacyQuestions.map((question) => question.id));
const additionIds = new Set(additionQuestions.map((question) => question.id));
const chapterIds = new Set(chapterQuestions.map((question) => question.id));
const rangeOverlap = [...legacyIds].filter((id) => additionIds.has(id) || chapterIds.has(id))
  .concat([...additionIds].filter((id) => chapterIds.has(id)));
if (!rangeOverlap.length && legacyQuestions.length + additionQuestions.length + chapterQuestions.length === questions.length) {
  pass("4出題範囲（これまで・追加①・追加②・すべて）の対象が重複なく分離");
} else {
  fail(`出題範囲の分離に問題があります: ${rangeOverlap.join("、")}`);
}

const answersLeakingIntoQuestions = additionQuestions.filter((question) => question.question.includes(question.answer));
if (!answersLeakingIntoQuestions.length) {
  pass("今回追加分の問題文に正解用語の直接記載なし");
} else {
  fail(`問題文に正解用語が含まれています: ${answersLeakingIntoQuestions.map((question) => question.id).join("、")}`);
}

const chapterAnswersLeakingIntoQuestions = chapterQuestions.filter((question) => question.question.includes(question.answer));
if (!chapterAnswersLeakingIntoQuestions.length) {
  pass("追加範囲②の問題文に正解用語の直接記載なし");
} else {
  fail(`追加範囲②の問題文に正解用語が含まれています: ${chapterAnswersLeakingIntoQuestions.map((question) => question.id).join("、")}`);
}

const invalidChapterIds = chapterQuestions.filter((question) => !question.id.startsWith("add-20260802-"));
if (!invalidChapterIds.length) {
  pass("追加範囲②の全IDが専用接頭辞を使用");
} else {
  fail(`追加範囲②に想定外のIDがあります: ${invalidChapterIds.map((question) => question.id).join("、")}`);
}

const questionTexts = new Map();
questions.forEach((question) => {
  questionTexts.set(question.question, (questionTexts.get(question.question) || 0) + 1);
});
const duplicateQuestionTexts = [...questionTexts.entries()].filter(([, count]) => count > 1);
if (!duplicateQuestionTexts.length) {
  pass("同じ問題文の重複なし");
} else {
  fail(`同じ問題文が重複しています: ${duplicateQuestionTexts.map(([text]) => text).join("／")}`);
}

const answerPositionCounts = [0, 0, 0, 0];
chapterQuestions.forEach((question) => {
  answerPositionCounts[question.choices.indexOf(question.answer)] += 1;
});
if (answerPositionCounts.every((count) => count === chapterQuestions.length / 4)) {
  pass(`追加範囲②のデータ上の正解位置を均等化（各${answerPositionCounts[0]}問）`);
} else {
  fail(`追加範囲②の正解位置に偏りがあります: ${answerPositionCounts.join("、")}`);
}

const appSource = fs.readFileSync(appPath, "utf8");
const missingMessages = addedPositiveMessages.filter((message) => !appSource.includes(message));
if (!missingMessages.length) {
  pass(`指定された正解メッセージ${addedPositiveMessages.length}件を追加`);
} else {
  fail(`正解メッセージが不足しています: ${missingMessages.join("、")}`);
}

const missingChapterMessages = chapterMessages.filter((message) => !appSource.includes(message));
if (!missingChapterMessages.length) {
  pass(`ぽふりんの新規メッセージ${chapterMessages.length}件を登録`);
} else {
  fail(`ぽふりんの新規メッセージが不足しています: ${missingChapterMessages.join("、")}`);
}

if (appSource.includes(`const CHAPTER_13_15_BATCH_ID = "${CHAPTER_13_15_BATCH_ID}"`)
  && appSource.includes('range === "chapter1315"')
  && appSource.includes('chapter1315: "追加範囲②（13～15章）"')) {
  pass("追加範囲②の専用出題モードを実装");
} else {
  fail("追加範囲②の専用出題モードを確認できません");
}

if (appSource.includes("session.shuffledChoices = shuffle(question.choices)")
  && appSource.includes("const shuffled = shuffle(rangePool)")) {
  pass("問題順と選択肢順のランダム化を維持");
} else {
  fail("問題または選択肢のランダム化を確認できません");
}

if (appSource.includes('const STORAGE_KEY = "pofurin-it-passport-history-v1"') && !appSource.includes("localStorage.clear(")) {
  pass("既存localStorageキーを維持し、全ストレージ消去処理なし");
} else {
  fail("既存localStorageデータを保護する実装を確認できません");
}

const historyCompatibilityMarkers = [
  "localStorage.getItem(STORAGE_KEY)",
  "saved.version === 1",
  "learningHistory.questions[questionId] ||",
  "current.correct += 1",
  "current.incorrect += 1",
  "current.weak = true",
  "current.lastAnswered = new Date().toISOString()",
  "localStorage.setItem(STORAGE_KEY, JSON.stringify(learningHistory))"
];
const missingHistoryMarkers = historyCompatibilityMarkers.filter((marker) => !appSource.includes(marker));
if (!missingHistoryMarkers.length) {
  pass("既存の回答履歴・正誤回数・苦手・最終回答日時の読込保存形式を維持");
} else {
  fail(`学習履歴の後方互換処理が不足しています: ${missingHistoryMarkers.join("、")}`);
}

if (appSource.includes("scheduleRetry(question.id)") && appSource.includes("session.queue.splice(5, 0")) {
  pass("誤答・わからない問題の5問後復習登録を維持");
} else {
  fail("苦手問題のセッション内復習登録を確認できません");
}

["RFP", "NDA"].forEach((term) => {
  const count = questions.filter((question) => question.answer === term).length;
  if (count === 1) {
    pass(`${term} は1問だけ登録`);
  } else {
    fail(`${term} は1問だけ登録してください（現在 ${count}問）`);
  }
});

for (const filename of ["questions.js", "app.js", "validate.js"]) {
  try {
    execFileSync(process.execPath, ["--check", path.join(root, filename)], { stdio: "pipe" });
    pass(`${filename} のJavaScript構文にエラーなし`);
  } catch (error) {
    const detail = error.stderr ? error.stderr.toString().trim() : error.message;
    fail(`${filename} のJavaScript構文エラー: ${detail}`);
  }
}

console.log("\nITパスポートクイズ データ検証");
console.log("================================");
checks.forEach((message) => console.log(message));

if (failures.length) {
  console.error("\n検証エラー");
  failures.forEach((message) => console.error(message));
  process.exitCode = 1;
} else {
  console.log(`\nすべての検証に合格しました（${questions.length}問・${new Set(questions.map((q) => q.category)).size}カテゴリー）。`);
}
