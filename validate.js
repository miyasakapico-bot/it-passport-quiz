#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { execFileSync } = require("node:child_process");

const root = __dirname;
const questionPath = path.join(root, "questions.js");
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
