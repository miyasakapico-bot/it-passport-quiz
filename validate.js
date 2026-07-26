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
const unknownBatchQuestions = questions.filter((question) => question.batchId && question.batchId !== CURRENT_BATCH_ID);

if (legacyQuestions.length === requiredTerms.length) {
  pass(`これまでの問題を${legacyQuestions.length}問として維持`);
} else {
  fail(`これまでの問題は${requiredTerms.length}問の想定です（現在 ${legacyQuestions.length}問）`);
}

if (additionQuestions.length === additionRequiredTerms.length) {
  pass(`今回追加した問題を${additionQuestions.length}問として分離`);
} else {
  fail(`今回追加した問題は${additionRequiredTerms.length}問必要です（現在 ${additionQuestions.length}問）`);
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

const legacyIds = new Set(legacyQuestions.map((question) => question.id));
const additionIds = new Set(additionQuestions.map((question) => question.id));
const rangeOverlap = [...legacyIds].filter((id) => additionIds.has(id));
if (!rangeOverlap.length && legacyQuestions.length + additionQuestions.length === questions.length) {
  pass("3出題範囲（これまで・今回・すべて）の対象が重複なく分離");
} else {
  fail(`出題範囲の分離に問題があります: ${rangeOverlap.join("、")}`);
}

const answersLeakingIntoQuestions = additionQuestions.filter((question) => question.question.includes(question.answer));
if (!answersLeakingIntoQuestions.length) {
  pass("今回追加分の問題文に正解用語の直接記載なし");
} else {
  fail(`問題文に正解用語が含まれています: ${answersLeakingIntoQuestions.map((question) => question.id).join("、")}`);
}

const appSource = fs.readFileSync(appPath, "utf8");
const missingMessages = addedPositiveMessages.filter((message) => !appSource.includes(message));
if (!missingMessages.length) {
  pass(`指定された正解メッセージ${addedPositiveMessages.length}件を追加`);
} else {
  fail(`正解メッセージが不足しています: ${missingMessages.join("、")}`);
}

if (appSource.includes('const STORAGE_KEY = "pofurin-it-passport-history-v1"') && !appSource.includes("localStorage.clear(")) {
  pass("既存localStorageキーを維持し、全ストレージ消去処理なし");
} else {
  fail("既存localStorageデータを保護する実装を確認できません");
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
