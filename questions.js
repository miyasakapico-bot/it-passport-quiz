/*
 * 問題を追加するときは、この配列へ同じ形のオブジェクトを追加します。
 * choices は必ず4つ、answer は choices に1回だけ含めてください。
 */
globalThis.QUIZ_QUESTIONS = [
  {
    id: "scm",
    category: "経営・業務・システム戦略",
    question: "調達・生産・物流・販売まで、供給網全体の流れをまとめて最適化する考え方はどれか。",
    answer: "SCM",
    choices: ["SCM", "CRM", "SFA", "ERP"],
    explanation: "SCMはSupply Chain Management（供給連鎖管理）の略。企業をまたぐモノや情報の流れを全体最適する。"
  },
  {
    id: "sfa",
    category: "経営・業務・システム戦略",
    question: "商談の進捗や顧客への訪問履歴を共有し、営業活動を支援する仕組みはどれか。",
    answer: "SFA",
    choices: ["SFA", "CRM", "SCM", "BPM"],
    explanation: "SFAはSales Force Automation（営業支援システム）の略。案件や行動を見える化して営業を効率化する。CRMは顧客関係全体の管理が中心。"
  },
  {
    id: "crm",
    category: "経営・業務・システム戦略",
    question: "顧客情報や購買履歴を活用し、顧客との長期的な関係を築く経営手法はどれか。",
    answer: "CRM",
    choices: ["CRM", "SFA", "ERP", "RPA"],
    explanation: "CRMはCustomer Relationship Management（顧客関係管理）の略。顧客満足や継続利用の向上を目指す。SFAは主に営業活動を支援する。"
  },
  {
    id: "erp",
    category: "経営・業務・システム戦略",
    question: "会計・販売・生産・人事など、企業の基幹業務を統合して経営資源を管理する仕組みはどれか。",
    answer: "ERP",
    choices: ["ERP", "SCM", "CRM", "EA"],
    explanation: "ERPはEnterprise Resource Planning（企業資源計画）の略。部門別に分かれた情報を統合し、経営資源を有効活用する。"
  },
  {
    id: "rpa",
    category: "経営・業務・システム戦略",
    question: "定型的なパソコン操作をソフトウェアロボットに記録・実行させる自動化技術はどれか。",
    answer: "RPA",
    choices: ["RPA", "BPR", "BPM", "SFA"],
    explanation: "RPAはRobotic Process Automation（ロボットによる業務自動化）の略。入力や転記など、決まった手順の作業に向く。"
  },
  {
    id: "bpr",
    category: "経営・業務・システム戦略",
    question: "既存の業務手順を前提にせず、成果を大きく改善するため業務プロセスを抜本的に再設計する考え方はどれか。",
    answer: "BPR",
    choices: ["BPR", "BPM", "RPA", "ERP"],
    explanation: "BPRはBusiness Process Re-engineering（業務プロセス再設計）の略。部分改善ではなく、業務の流れを根本から見直す。"
  },
  {
    id: "bpm",
    category: "経営・業務・システム戦略",
    question: "業務プロセスを可視化し、実行・測定・改善を継続的に繰り返す管理手法はどれか。",
    answer: "BPM",
    choices: ["BPM", "BPR", "WBS", "RPA"],
    explanation: "BPMはBusiness Process Management（業務プロセス管理）の略。継続的な改善が中心で、抜本的に再設計するBPRとは狙いが異なる。"
  },
  {
    id: "dfd",
    category: "経営・業務・システム戦略",
    question: "システム内のデータの流れを、処理・データストア・外部実体などの記号で表す図はどれか。",
    answer: "DFD",
    choices: ["DFD", "WBS", "ER図", "フローチャート"],
    explanation: "DFDはData Flow Diagram（データフロー図）の略。処理の順番よりも、データがどこから来てどこへ流れるかを表す。"
  },
  {
    id: "ea",
    category: "経営・業務・システム戦略",
    question: "組織全体の業務と情報システムを、共通の構造や方針で整理して全体最適を図る考え方はどれか。",
    answer: "EA",
    choices: ["EA", "ERP", "SoE", "SLA"],
    explanation: "EAはEnterprise Architecture（企業全体の構造設計）の略。政策・業務・データ・システムなどを体系化し、全体最適を目指す。"
  },
  {
    id: "soe",
    category: "経営・業務・システム戦略",
    question: "顧客や取引先とのつながりを深めるため、変化へ素早く対応することを重視したシステム領域はどれか。",
    answer: "SoE",
    choices: ["SoE", "SoR", "ERP", "EA"],
    explanation: "SoEはSystem of Engagement（人との関係を強化するシステム）の略。顧客接点などの柔軟性を重視する。記録の正確な管理を重視するSoRと対比される。"
  },
  {
    id: "rfi",
    category: "経営・業務・システム戦略",
    question: "システム調達の初期に、候補企業から技術や製品の情報を広く集めるための文書はどれか。",
    answer: "RFI",
    choices: ["RFI", "RFP", "NDA", "SLA"],
    explanation: "RFIはRequest for Information（情報提供依頼書）の略。提案を正式に求めるRFPより前に、市場や実現方法の情報を集める。"
  },
  {
    id: "nda",
    category: "経営・業務・システム戦略",
    question: "取引や共同作業で知った秘密情報を、許可なく第三者へ開示しないことを約束する契約はどれか。",
    answer: "NDA",
    choices: ["NDA", "SLA", "RFP", "雇用契約"],
    explanation: "NDAはNon-Disclosure Agreement（秘密保持契約）の略。守る情報の範囲や利用目的、保持期間などを定める。"
  },
  {
    id: "rfp",
    category: "経営・業務・システム戦略",
    question: "発注側がシステムの要件や条件を示し、候補企業へ具体的な提案を求める文書はどれか。",
    answer: "RFP",
    choices: ["RFP", "RFI", "NDA", "SLA"],
    explanation: "RFPはRequest for Proposal（提案依頼書）の略。情報収集が中心のRFIと違い、要件に対する具体的な提案を求める。"
  },

  {
    id: "source-code",
    category: "開発・プログラミング",
    question: "プログラミング言語を使って、人が読み書きできる形で記述したプログラムはどれか。",
    answer: "ソースコード",
    choices: ["ソースコード", "オブジェクトコード", "機械語", "実行ファイル"],
    explanation: "ソースコードは、開発者がプログラミング言語で記述した元のプログラム。翻訳や実行の前段階に当たる。"
  },
  {
    id: "compiler",
    category: "開発・プログラミング",
    question: "高水準言語で書かれたプログラム全体を、機械語などへまとめて翻訳するソフトウェアはどれか。",
    answer: "コンパイラ",
    choices: ["コンパイラ", "インタプリタ", "デバッガ", "リンカ"],
    explanation: "コンパイラはソースコードを機械が実行できる形式へ翻訳する。逐次解釈しながら実行するインタプリタとは方式が異なる。"
  },
  {
    id: "black-box",
    category: "開発・プログラミング",
    question: "プログラム内部の構造を見ず、入力に対して期待する出力になるかを確認する考え方はどれか。",
    answer: "ブラックボックス",
    choices: ["ブラックボックス", "ホワイトボックス", "単体テスト", "静的解析"],
    explanation: "ブラックボックステストは外部仕様に基づいて入出力を確認する。内部の分岐や経路を意識するホワイトボックステストと対比される。"
  },
  {
    id: "white-box",
    category: "開発・プログラミング",
    question: "プログラム内部の分岐や処理経路を意識して、十分に実行されたかを確認する考え方はどれか。",
    answer: "ホワイトボックス",
    choices: ["ホワイトボックス", "ブラックボックス", "運用テスト", "受入テスト"],
    explanation: "ホワイトボックステストは内部構造に基づいて命令や分岐の網羅を確認する。外部仕様だけを見るブラックボックステストとは観点が違う。"
  },
  {
    id: "unit-test",
    category: "開発・プログラミング",
    question: "関数やモジュールなど、プログラムの小さな単位ごとに正しく動くかを確認するテストはどれか。",
    answer: "単体テスト",
    choices: ["単体テスト", "結合テスト", "システムテスト", "運用テスト"],
    explanation: "単体テストは個々の部品を対象にする。部品同士の受け渡しを確認する結合テストより前に行うのが一般的。"
  },
  {
    id: "integration-test",
    category: "開発・プログラミング",
    question: "複数のモジュールを組み合わせ、データの受け渡しや呼出しが正しいかを確認するテストはどれか。",
    answer: "結合テスト",
    choices: ["結合テスト", "単体テスト", "システムテスト", "運用テスト"],
    explanation: "結合テストは、単体テスト済みの部品を接続してインタフェースを確認する。システム全体の要件確認はシステムテストで行う。"
  },
  {
    id: "system-test",
    category: "開発・プログラミング",
    question: "完成したシステム全体が、定められた機能や性能の要件を満たすかを確認するテストはどれか。",
    answer: "システムテスト",
    choices: ["システムテスト", "単体テスト", "結合テスト", "運用テスト"],
    explanation: "システムテストはシステム全体を対象に、機能・性能・信頼性などを確認する。実際の利用環境で利用者が確認する運用テストとは主体や観点が異なる。"
  },
  {
    id: "operation-test",
    category: "開発・プログラミング",
    question: "本番に近い環境で、利用部門が実際の業務手順どおりに使えるかを確認するテストはどれか。",
    answer: "運用テスト",
    choices: ["運用テスト", "システムテスト", "結合テスト", "単体テスト"],
    explanation: "運用テストは利用者側が中心となり、実業務や運用手順に適合するかを確認する。開発側の総合確認であるシステムテストと区別する。"
  },
  {
    id: "requirements-definition",
    category: "開発・プログラミング",
    question: "新しいシステムで実現する機能、性能、制約などを利用者と合意して明確にする工程はどれか。",
    answer: "要件定義",
    choices: ["要件定義", "外部設計", "内部設計", "運用"],
    explanation: "要件定義では、利用者の目的を満たすために何が必要かを明確にする。どのように作るかを具体化する設計より前の工程。"
  },
  {
    id: "operation",
    category: "開発・プログラミング",
    question: "稼働中のシステムを日常的に監視し、バックアップや定例処理を行って安定提供する活動はどれか。",
    answer: "運用",
    choices: ["運用", "保守", "要件定義", "監査"],
    explanation: "運用はシステムを日々安定して使える状態に保つ活動。障害修正や環境変化に合わせた改修を行う保守とは役割が異なる。"
  },
  {
    id: "maintenance",
    category: "開発・プログラミング",
    question: "稼働後のシステムに対し、障害修正や制度変更に伴うプログラム改修を行う活動はどれか。",
    answer: "保守",
    choices: ["保守", "運用", "要件定義", "監査"],
    explanation: "保守は稼働後の不具合修正や仕様変更への対応を行う。日常の監視や定例作業を担う運用と区別する。"
  },
  {
    id: "waterfall",
    category: "開発・プログラミング",
    question: "要件定義、設計、実装、テストを順番に進め、原則として前工程へ戻らない開発モデルはどれか。",
    answer: "ウォーターフォールモデル",
    choices: ["ウォーターフォールモデル", "アジャイル開発", "RAD", "DevOps"],
    explanation: "ウォーターフォールモデルは工程を上流から下流へ順に進める。計画を立てやすい一方、後半の変更には対応しにくい。"
  },
  {
    id: "agile",
    category: "開発・プログラミング",
    question: "短い期間で動くソフトウェアを繰り返し作り、利用者の反応を取り入れながら改善する開発方法はどれか。",
    answer: "アジャイル開発",
    choices: ["アジャイル開発", "ウォーターフォールモデル", "SLCP", "リバースエンジニアリング"],
    explanation: "アジャイル開発は短い反復で計画・開発・評価を行い、変化へ柔軟に対応する。工程を順に固定しやすいウォーターフォールモデルと対比される。"
  },
  {
    id: "devops",
    category: "開発・プログラミング",
    question: "開発担当と運用担当が協力し、自動化も活用してソフトウェアを素早く継続的に届ける考え方はどれか。",
    answer: "DevOps",
    choices: ["DevOps", "アジャイル開発", "EUC", "BPM"],
    explanation: "DevOpsはDevelopment and Operations（開発と運用）を組み合わせた呼び方。組織間の協力と継続的な提供を重視する。"
  },
  {
    id: "object-oriented",
    category: "開発・プログラミング",
    question: "データとそれを扱う処理を一体化した部品を組み合わせて、システムを表現する考え方はどれか。",
    answer: "オブジェクト指向",
    choices: ["オブジェクト指向", "構造化設計", "関数型", "EUC"],
    explanation: "オブジェクト指向は、状態と振る舞いを持つオブジェクトを組み合わせる。カプセル化・継承・多態性などが代表的な特徴。"
  },
  {
    id: "euc",
    category: "開発・プログラミング",
    question: "情報システム部門だけに頼らず、業務を知る利用者自身が表計算や簡易ツールでシステムを作成・活用する考え方はどれか。",
    answer: "EUC",
    choices: ["EUC", "ERP", "RAD", "DevOps"],
    explanation: "EUCはEnd User Computing（エンドユーザーコンピューティング）の略。現場主導で素早く作れる一方、品質や管理ルールにも注意が必要。"
  },
  {
    id: "rad",
    category: "開発・プログラミング",
    question: "開発支援ツールや部品の再利用、試作品への利用者参加によって短期間でシステムを作る手法はどれか。",
    answer: "RAD",
    choices: ["RAD", "ウォーターフォールモデル", "EUC", "RPA"],
    explanation: "RADはRapid Application Development（高速アプリケーション開発）の略。プロトタイプや開発ツールを活用して開発期間を短縮する。"
  },
  {
    id: "reverse-engineering",
    category: "開発・プログラミング",
    question: "既存の製品やプログラムを解析し、その構造や仕様、動作原理を明らかにする行為はどれか。",
    answer: "リバースエンジニアリング",
    choices: ["リバースエンジニアリング", "フォワードエンジニアリング", "リファクタリング", "デバッグ"],
    explanation: "リバースエンジニアリングは完成物から設計や仕様を逆方向に調べる。解析の目的や対象によっては契約・著作権などの確認も必要。"
  },

  {
    id: "project-management",
    category: "プロジェクト・サービス管理・監査",
    question: "期限・予算・品質などの制約の中で、一時的な取組みの目標達成に向けて計画し統制する活動はどれか。",
    answer: "プロジェクトマネジメント",
    choices: ["プロジェクトマネジメント", "サービスマネジメント", "システム監査", "BPM"],
    explanation: "プロジェクトマネジメントは、明確な開始と終了がある取組みを計画・実行・監視する活動。定常的なサービス運営とは性格が異なる。"
  },
  {
    id: "wbs",
    category: "プロジェクト・サービス管理・監査",
    question: "プロジェクトの成果物や作業を、管理できる小さな単位まで階層的に分解したものはどれか。",
    answer: "WBS",
    choices: ["WBS", "DFD", "BSC", "SLA"],
    explanation: "WBSはWork Breakdown Structure（作業分解構成図）の略。作業の漏れを防ぎ、見積りや担当割当ての土台にする。"
  },
  {
    id: "stakeholder",
    category: "プロジェクト・サービス管理・監査",
    question: "プロジェクトの結果に影響を与える、または結果から影響を受ける個人や組織を何と呼ぶか。",
    answer: "ステークホルダー",
    choices: ["ステークホルダー", "スポンサー", "プロジェクトマネージャ", "ベンダー"],
    explanation: "ステークホルダーは利害関係者の総称。顧客・利用者・チーム・経営者・取引先など幅広く含み、特定の役割だけを指す語ではない。"
  },
  {
    id: "sla",
    category: "プロジェクト・サービス管理・監査",
    question: "サービス提供者と利用者の間で、稼働率や応答時間などの達成水準を合意した文書はどれか。",
    answer: "SLA",
    choices: ["SLA", "SLM", "NDA", "RFP"],
    explanation: "SLAはService Level Agreement（サービスレベル合意書）の略。SLMは、その合意水準を維持・改善する管理活動を指す。"
  },
  {
    id: "slm",
    category: "プロジェクト・サービス管理・監査",
    question: "合意したサービス水準を測定・評価し、利用者との調整を通じて継続的に改善する活動はどれか。",
    answer: "SLM",
    choices: ["SLM", "SLA", "インシデント管理", "サービスデスク"],
    explanation: "SLMはService Level Management（サービスレベル管理）の略。SLAを作るだけでなく、実績を監視して改善する一連の活動。"
  },
  {
    id: "incident-management",
    category: "プロジェクト・サービス管理・監査",
    question: "サービスの中断や品質低下が起きたとき、原因究明より先に通常の利用状態へ早く戻すことを重視する活動はどれか。",
    answer: "インシデント管理",
    choices: ["インシデント管理", "問題管理", "変更管理", "SLM"],
    explanation: "インシデント管理はサービスの早期復旧を優先する。根本原因を特定して再発防止を図る問題管理とは目的が異なる。"
  },
  {
    id: "service-desk",
    category: "プロジェクト・サービス管理・監査",
    question: "利用者からの問合せや障害連絡を一元的に受け付け、適切な担当へつなぐ窓口はどれか。",
    answer: "サービスデスク",
    choices: ["サービスデスク", "コールセンター", "CSIRT", "ヘルプファイル"],
    explanation: "サービスデスクはITサービス利用者との単一窓口。受付だけでなく、記録・一次対応・進捗連絡などを担う。"
  },
  {
    id: "system-audit",
    category: "プロジェクト・サービス管理・監査",
    question: "情報システムの信頼性・安全性・効率性などを、独立した立場で点検し助言する活動はどれか。",
    answer: "システム監査",
    choices: ["システム監査", "内部統制", "運用テスト", "インシデント管理"],
    explanation: "システム監査は、監査対象から独立した立場で客観的に評価し、必要に応じて改善を助言する。開発作業そのものではない。"
  },

  {
    id: "corporate-governance",
    category: "経営・組織・社会",
    question: "経営者の行動を監督し、企業が公正で効率的な意思決定を行うための仕組みはどれか。",
    answer: "コーポレートガバナンス",
    choices: ["コーポレートガバナンス", "コンプライアンス", "内部監査", "CSR"],
    explanation: "コーポレートガバナンスは企業統治の仕組み。取締役会による監督や情報開示などを通じ、経営の健全性を高める。"
  },
  {
    id: "management-philosophy",
    category: "経営・組織・社会",
    question: "企業がなぜ存在し、経営で何を大切にするかという基本的な価値観を示すものはどれか。",
    answer: "経営理念",
    choices: ["経営理念", "ビジョン", "経営戦略", "行動計画"],
    explanation: "経営理念は企業の存在意義や根本的な価値観を表す。将来の目指す姿を描くビジョンより、長期的で根本的なよりどころになる。"
  },
  {
    id: "vision",
    category: "経営・組織・社会",
    question: "企業が中長期的に実現したい将来像を、社員や社会へ分かりやすく示したものはどれか。",
    answer: "ビジョン",
    choices: ["ビジョン", "経営理念", "ミッション", "行動規範"],
    explanation: "ビジョンは将来の目指す姿。経営理念は存在意義や価値観、ミッションは果たすべき使命を表すことが多い。"
  },
  {
    id: "csr",
    category: "経営・組織・社会",
    question: "法令順守だけでなく、環境・人権・地域社会などへ配慮し、企業が社会的責任を果たす考え方はどれか。",
    answer: "CSR",
    choices: ["CSR", "CSV", "DE&I", "コーポレートガバナンス"],
    explanation: "CSRはCorporate Social Responsibility（企業の社会的責任）の略。事業活動が社会へ与える影響に責任を持つ。"
  },
  {
    id: "green-it",
    category: "経営・組織・社会",
    question: "省電力機器の利用や仮想化などにより、ITの利用に伴う環境負荷を減らす取組みはどれか。",
    answer: "グリーンIT",
    choices: ["グリーンIT", "グリーン購入", "CSR", "カーボンオフセット"],
    explanation: "グリーンITは、IT機器やシステムの省電力化と、IT活用による社会全体の環境負荷削減を目指す。"
  },
  {
    id: "dei",
    category: "経営・組織・社会",
    question: "人材の多様性を尊重し、公平な機会を整え、一人ひとりが組織へ参加できる状態を目指す考え方はどれか。",
    answer: "DE&I",
    choices: ["DE&I", "CSR", "HRM", "ダイバーシティ採用"],
    explanation: "DE&IはDiversity, Equity and Inclusion（多様性・公平性・包摂性）の略。人数の多様化だけでなく、公平な支援と参加しやすさも重視する。"
  },
  {
    id: "social-business",
    category: "経営・組織・社会",
    question: "貧困や地域活性化などの社会課題を、寄付だけに頼らず継続的な事業によって解決する取組みはどれか。",
    answer: "ソーシャルビジネス",
    choices: ["ソーシャルビジネス", "ボランティア", "フィランソロピー", "CSR"],
    explanation: "ソーシャルビジネスは社会課題の解決を事業の中心目的とし、収益を得ながら継続性を確保する。"
  },
  {
    id: "hrm",
    category: "経営・組織・社会",
    question: "採用・配置・評価・育成などを通じ、人材を組織の重要な資源として活用する管理活動はどれか。",
    answer: "HRM",
    choices: ["HRM", "CRM", "ERP", "SLM"],
    explanation: "HRMはHuman Resource Management（人的資源管理）の略。人材の能力を生かし、組織目標と個人の成長を結び付ける。"
  },
  {
    id: "matrix-organization",
    category: "経営・組織・社会",
    question: "職能別組織とプロジェクト別組織を組み合わせ、メンバーが二つの指揮系統に属する組織形態はどれか。",
    answer: "マトリックス組織",
    choices: ["マトリックス組織", "事業部制組織", "職能別組織", "プロジェクト組織"],
    explanation: "マトリックス組織は、専門性と案件対応力を両立しやすい一方、命令系統の調整が難しくなることがある。"
  },

  {
    id: "copyright",
    category: "法務・知的財産・セキュリティ",
    question: "小説・音楽・プログラムなど、創作性のある表現を創作した時点で原則として発生する権利はどれか。",
    answer: "著作権",
    choices: ["著作権", "特許権", "意匠権", "商標権"],
    explanation: "著作権は思想や感情を創作的に表現した著作物を保護する。原則として登録をしなくても創作時に発生する点が、特許権などと異なる。"
  },
  {
    id: "patent-right",
    category: "法務・知的財産・セキュリティ",
    question: "自然法則を利用した高度な技術的アイデアである発明を、出願・審査を経て保護する権利はどれか。",
    answer: "特許権",
    choices: ["特許権", "実用新案権", "意匠権", "著作権"],
    explanation: "特許権は発明を保護する産業財産権。物品の形状などの考案を保護する実用新案権より、高度な技術的創作を対象にする。"
  },
  {
    id: "utility-model-right",
    category: "法務・知的財産・セキュリティ",
    question: "物品の形状・構造・組合せに関する考案を保護し、方法そのものは対象にしない権利はどれか。",
    answer: "実用新案権",
    choices: ["実用新案権", "特許権", "意匠権", "商標権"],
    explanation: "実用新案権は物品の形状・構造・組合せに関する考案を保護する。高度な発明を保護する特許権とは対象や制度が異なる。"
  },
  {
    id: "design-right",
    category: "法務・知的財産・セキュリティ",
    question: "製品の形状や模様、色彩など、視覚を通じて美感を起こさせるデザインを保護する権利はどれか。",
    answer: "意匠権",
    choices: ["意匠権", "商標権", "著作権", "実用新案権"],
    explanation: "意匠権は物品や建築物、画像などのデザインを保護する。商品を識別する名称やマークを保護する商標権とは対象が違う。"
  },
  {
    id: "trademark-right",
    category: "法務・知的財産・セキュリティ",
    question: "商品やサービスを他社のものと区別する名称・ロゴ・マークなどを保護する権利はどれか。",
    answer: "商標権",
    choices: ["商標権", "意匠権", "著作権", "特許権"],
    explanation: "商標権は商品・サービスの出所を示す標識を保護する。見た目のデザイン自体を保護する意匠権と区別する。"
  },
  {
    id: "public-domain-software",
    category: "法務・知的財産・セキュリティ",
    question: "著作権の保護期間満了や権利放棄などにより、著作権による利用制限がないソフトウェアはどれか。",
    answer: "パブリックドメインソフトウェア",
    choices: ["パブリックドメインソフトウェア", "オープンソースソフトウェア", "フリーウェア", "シェアウェア"],
    explanation: "パブリックドメインソフトウェアは著作権による独占的な制限がない。著作権を残したままライセンス条件で利用を認めるOSSとは異なる。"
  },
  {
    id: "open-source-software",
    category: "法務・知的財産・セキュリティ",
    question: "ソースコードが公開され、定められたライセンス条件の下で利用・改変・再配布できるソフトウェアはどれか。",
    answer: "オープンソースソフトウェア",
    choices: ["オープンソースソフトウェア", "パブリックドメインソフトウェア", "フリーウェア", "プロプライエタリソフトウェア"],
    explanation: "オープンソースソフトウェアは著作権を放棄したものではなく、OSSライセンスの条件に従って利用する。"
  },
  {
    id: "csirt",
    category: "法務・知的財産・セキュリティ",
    question: "組織内外のセキュリティ事故に備え、発生時の分析・対応・連絡・再発防止を担う専門チームはどれか。",
    answer: "CSIRT",
    choices: ["CSIRT", "サービスデスク", "SOC", "CERT"],
    explanation: "CSIRTはComputer Security Incident Response Team（コンピュータセキュリティ事故対応チーム）の略。インシデント対応の体制を指す。"
  },
  {
    id: "national-cybersecurity-office",
    category: "法務・知的財産・セキュリティ",
    question: "日本の国レベルでサイバー安全保障分野の司令塔機能を担い、施策の総合調整を行う組織はどれか。",
    answer: "国家サイバー統括室",
    choices: ["国家サイバー統括室", "個人情報保護委員会", "デジタル庁", "CSIRT"],
    explanation: "国家サイバー統括室は、国のサイバー安全保障政策を総合調整する司令塔組織。個々の企業内で事故対応を行うCSIRTとは範囲が異なる。"
  },
  {
    id: "employment-contract",
    category: "法務・知的財産・セキュリティ",
    question: "労働者が使用者の指揮命令を受けて働き、使用者が賃金を支払うことを約束する契約はどれか。",
    answer: "雇用契約",
    choices: ["雇用契約", "労働者派遣契約", "請負契約", "委任契約"],
    explanation: "雇用契約では、雇用した企業と労働者の間に指揮命令関係がある。派遣では派遣先が業務上の指揮命令を行う点が異なる。"
  },
  {
    id: "worker-dispatch-contract",
    category: "法務・知的財産・セキュリティ",
    question: "労働者を雇用する会社と、実際に業務上の指揮命令を行う会社が異なる働き方に関する契約はどれか。",
    answer: "労働者派遣契約",
    choices: ["労働者派遣契約", "雇用契約", "請負契約", "売買契約"],
    explanation: "労働者派遣では派遣元が労働者を雇用し、派遣先が業務上の指揮命令を行う。請負では注文者が請負側の労働者へ直接指揮命令しない。"
  },
  {
    id: "gdpr",
    category: "法務・知的財産・セキュリティ",
    question: "EU域内の個人データ保護を定め、域外の事業者にも適用される場合がある規則はどれか。",
    answer: "GDPR",
    choices: ["GDPR", "個人情報保護法", "不正競争防止法", "サイバーセキュリティ基本法"],
    explanation: "GDPRはGeneral Data Protection Regulation（一般データ保護規則）の略。本人の権利や事業者の義務、域外適用などを定めるEUの規則。"
  },
  {
    id: "iso",
    category: "法務・知的財産・セキュリティ",
    question: "製品やサービスの国際的な互換性・品質などを高めるため、多分野の国際規格を策定する組織はどれか。",
    answer: "ISO",
    choices: ["ISO", "IEC", "JIS", "IEEE"],
    explanation: "ISOはInternational Organization for Standardization（国際標準化機構）。電気・電子以外を含む幅広い分野で国際規格を策定する。"
  },
  {
    id: "iso-9000",
    category: "法務・知的財産・セキュリティ",
    question: "組織が一貫した品質の製品・サービスを提供するための、品質マネジメントシステムに関する規格群はどれか。",
    answer: "ISO 9000",
    choices: ["ISO 9000", "ISO 14000", "ISO/IEC 27000", "ISO 31000"],
    explanation: "ISO 9000は品質マネジメントシステムの規格群。ISO 14000は環境、ISO/IEC 27000は情報セキュリティのマネジメント規格群。"
  },

  {
    id: "de-jure-standard",
    category: "標準化",
    question: "公的な標準化機関が、正式な手続を経て制定した規格はどれか。",
    answer: "デジュレスタンダード",
    choices: ["デジュレスタンダード", "フォーラム標準", "デファクトスタンダード", "オープン標準"],
    explanation: "デジュレスタンダードは法律上・公的な標準という意味。ISOやJISのように、公的機関の手続で制定される。"
  },
  {
    id: "forum-standard",
    category: "標準化",
    question: "特定分野の複数企業が集まった業界団体が、合意して策定する標準はどれか。",
    answer: "フォーラム標準",
    choices: ["フォーラム標準", "デジュレスタンダード", "デファクトスタンダード", "社内標準"],
    explanation: "フォーラム標準は、企業連合や業界団体によって作られる。公的機関によるデジュレ、市場競争の結果によるデファクトと成立過程が異なる。"
  },
  {
    id: "de-facto-standard",
    category: "標準化",
    question: "公的な制定を経ていなくても、市場で広く普及した結果、事実上の標準となったものはどれか。",
    answer: "デファクトスタンダード",
    choices: ["デファクトスタンダード", "デジュレスタンダード", "フォーラム標準", "国際規格"],
    explanation: "デファクトスタンダードは市場競争や普及の結果として事実上の標準になったもの。標準化機関の正式な制定が条件ではない。"
  },

  {
    id: "swot",
    category: "経営分析・マーケティング・財務",
    question: "組織の内部環境を強み・弱み、外部環境を機会・脅威に分けて戦略を考える手法はどれか。",
    answer: "SWOT分析",
    choices: ["SWOT分析", "PPM", "3C分析", "PEST分析"],
    explanation: "SWOTはStrengths, Weaknesses, Opportunities, Threats（強み・弱み・機会・脅威）の頭文字。内部と外部の要因を組み合わせて戦略を検討する。"
  },
  {
    id: "ppm",
    category: "経営分析・マーケティング・財務",
    question: "複数の事業を市場成長率と相対的市場占有率で分類し、経営資源の配分を検討する手法はどれか。",
    answer: "PPM",
    choices: ["PPM", "SWOT分析", "BSC", "RFM分析"],
    explanation: "PPMはProduct Portfolio Management（製品ポートフォリオ管理）の略。花形・金のなる木・問題児・負け犬の4領域で事業を捉える。"
  },
  {
    id: "vc",
    category: "経営分析・マーケティング・財務",
    question: "高い成長が期待される未上場企業へ出資し、株式公開などによる値上がり益を目指す投資主体はどれか。",
    answer: "VC",
    choices: ["VC", "投資銀行", "信用金庫", "クラウドファンディング"],
    explanation: "VCはVenture Capital（ベンチャーキャピタル）の略。資金提供に加え、経営支援を行うこともある。ここではValue Chainの意味ではない。"
  },
  {
    id: "ipo",
    category: "経営分析・マーケティング・財務",
    question: "未上場企業が、証券市場で初めて自社株式を一般の投資家へ公開することはどれか。",
    answer: "IPO",
    choices: ["IPO", "TOB", "MBO", "増資"],
    explanation: "IPOはInitial Public Offering（新規株式公開）の略。株式を公開市場で売買できるようにする。"
  },
  {
    id: "tob",
    category: "経営分析・マーケティング・財務",
    question: "買付価格や期間、株数を公表し、取引所外で株主から広く株式を買い集める方法はどれか。",
    answer: "TOB",
    choices: ["TOB", "IPO", "MBO", "株式分割"],
    explanation: "TOBはTake Over Bid（株式公開買付け）の略。企業買収などで、条件を公開して対象会社の株式を取得する。"
  },
  {
    id: "mbo",
    category: "経営分析・マーケティング・財務",
    question: "会社の経営陣が、株主などから自社や事業部門の株式を買い取って経営権を得る手法はどれか。",
    answer: "MBO",
    choices: ["MBO", "TOB", "IPO", "LBO"],
    explanation: "MBOはManagement Buyout（経営陣による買収）の略。この問題では目標による管理（Management by Objectives）ではない。"
  },
  {
    id: "marketing-4p",
    category: "経営分析・マーケティング・財務",
    question: "売り手の視点で、製品・価格・流通・販売促進を組み合わせるマーケティングの枠組みはどれか。",
    answer: "4P",
    choices: ["4P", "4C", "RFM分析", "PPM"],
    explanation: "4PはProduct, Price, Place, Promotion（製品・価格・流通・販売促進）の組合せ。買い手視点の4Cと対応させて考える。"
  },
  {
    id: "marketing-4c",
    category: "経営分析・マーケティング・財務",
    question: "買い手の視点で、顧客価値・顧客コスト・利便性・コミュニケーションを考える枠組みはどれか。",
    answer: "4C",
    choices: ["4C", "4P", "BSC", "SWOT分析"],
    explanation: "4CはCustomer Value, Cost, Convenience, Communication（顧客価値・コスト・利便性・対話）の組合せ。売り手視点の4Pと対比される。"
  },
  {
    id: "rfm-analysis",
    category: "経営分析・マーケティング・財務",
    question: "顧客を最終購入日・購入頻度・購入金額の3指標で分類する分析手法はどれか。",
    answer: "RFM分析",
    choices: ["RFM分析", "SWOT分析", "PPM", "ABC分析"],
    explanation: "RFMはRecency, Frequency, Monetary（最終購入日・購入頻度・購入金額）の頭文字。優良顧客の抽出などに使う。"
  },
  {
    id: "laggard",
    category: "経営分析・マーケティング・財務",
    question: "新製品の普及過程で、周囲に十分普及してから採用する、最も慎重な層はどれか。",
    answer: "ラガート",
    choices: ["ラガート", "イノベータ", "アーリーアダプタ", "アーリーマジョリティ"],
    explanation: "ラガートは採用時期が最も遅い層。革新性を重視して最初に採用するイノベータとは対極に位置する。"
  },
  {
    id: "ux",
    category: "経営分析・マーケティング・財務",
    question: "製品やサービスを知り、利用し、その後に感じることまで含めた利用者の総合的な体験はどれか。",
    answer: "UX",
    choices: ["UX", "UI", "CX", "アクセシビリティ"],
    explanation: "UXはUser Experience（ユーザー体験）の略。画面や操作部分であるUIだけでなく、利用前後を含む感情や満足まで捉える。"
  },
  {
    id: "merchandising",
    category: "経営分析・マーケティング・財務",
    question: "小売業が、適切な商品を適切な数量・価格・時期・場所で提供するために品ぞろえや販売を計画する活動はどれか。",
    answer: "マーチャンダイジング",
    choices: ["マーチャンダイジング", "プロモーション", "ブランディング", "オムニチャネル"],
    explanation: "マーチャンダイジングは商品政策全般を計画・管理する活動。単なる広告ではなく、仕入れ・品ぞろえ・価格・陳列などを含む。"
  },
  {
    id: "omnichannel",
    category: "経営分析・マーケティング・財務",
    question: "実店舗・ECサイト・アプリなど複数の販売接点を連携し、顧客が途切れず買物できるようにする戦略はどれか。",
    answer: "オムニチャネル",
    choices: ["オムニチャネル", "マルチチャネル", "マーチャンダイジング", "O2O"],
    explanation: "オムニチャネルは在庫や顧客情報も含めて接点を統合し、一貫した体験を提供する。複数チャネルを単に並べるマルチチャネルより連携を重視する。"
  },
  {
    id: "seeds-oriented",
    category: "経営分析・マーケティング・財務",
    question: "企業が持つ独自技術や研究成果を出発点に、活用できる製品や市場を考える発想法はどれか。",
    answer: "シーズ思考",
    choices: ["シーズ思考", "ニーズ思考", "デザイン思考", "バックキャスティング"],
    explanation: "シーズ思考は自社の技術・資源という種から事業を考える。顧客の課題を出発点にするニーズ思考と対比される。"
  },
  {
    id: "fermi-estimation",
    category: "経営分析・マーケティング・財務",
    question: "直接の統計がなくても、分解した要素に妥当な仮定を置いて概算値を求める手法はどれか。",
    answer: "フェルミ推定",
    choices: ["フェルミ推定", "回帰分析", "デルファイ法", "モンテカルロ法"],
    explanation: "フェルミ推定は、未知の数量を複数の要素へ分解し、既知情報や合理的な仮定から短時間で概算する。"
  },
  {
    id: "bsc",
    category: "経営分析・マーケティング・財務",
    question: "財務だけでなく、顧客、業務プロセス、学習と成長の視点から戦略目標と指標を管理する手法はどれか。",
    answer: "BSC",
    choices: ["BSC", "SWOT分析", "PPM", "KPI"],
    explanation: "BSCはBalanced Scorecard（バランススコアカード）の略。4つの視点を関連付け、戦略を具体的な目標・指標へ落とし込む。"
  },

  {
    id: "hackathon",
    category: "イノベーション・新規事業",
    question: "技術者や企画者などが短期間に集まり、集中的にアイデアを形にして成果を発表するイベントはどれか。",
    answer: "ハッカソン",
    choices: ["ハッカソン", "アイデアソン", "アクセラレータ", "PoC"],
    explanation: "ハッカソンはHackとMarathonを組み合わせた言葉。アイデア検討だけでなく、短期間で試作品などの成果物を作る点が特徴。"
  },
  {
    id: "api",
    category: "イノベーション・新規事業",
    question: "あるソフトウェアの機能やデータを、決められた手順で別のソフトウェアから利用できるようにする接点はどれか。",
    answer: "API",
    choices: ["API", "GUI", "SDK", "プロトコル"],
    explanation: "APIはApplication Programming Interface（アプリケーションプログラミングインタフェース）の略。プログラム同士が機能を呼び出すための仕様を提供する。"
  },
  {
    id: "api-economy",
    category: "イノベーション・新規事業",
    question: "企業がAPIを通じて機能やデータを相互利用し、新たなサービスや事業価値を生み出す経済活動はどれか。",
    answer: "APIエコノミー",
    choices: ["APIエコノミー", "シェアリングエコノミー", "サブスクリプション", "オープンイノベーション"],
    explanation: "APIエコノミーは、組織の機能やデータをAPIでつなぎ、企業の境界を越えて新しいサービスや収益機会を生む考え方。"
  },
  {
    id: "devils-river",
    category: "イノベーション・新規事業",
    question: "研究段階の成果が、実用化を目指す開発段階へ進めずに消えてしまう障壁を何と呼ぶか。",
    answer: "魔の川",
    choices: ["魔の川", "死の谷", "ダーウィンの海", "キャズム"],
    explanation: "魔の川は基礎研究と製品化を目指す開発の間にある障壁。開発から事業化の間にある死の谷より前の段階。"
  },
  {
    id: "valley-of-death",
    category: "イノベーション・新規事業",
    question: "技術開発に成功しても、資金や事業化体制が不足して製品・サービスとして市場へ出せない障壁を何と呼ぶか。",
    answer: "死の谷",
    choices: ["死の谷", "魔の川", "ダーウィンの海", "キャズム"],
    explanation: "死の谷は技術開発から事業化までの障壁。研究から開発への魔の川、市場競争を生き残るダーウィンの海と段階が異なる。"
  },
  {
    id: "darwinian-sea",
    category: "イノベーション・新規事業",
    question: "事業化した製品が、市場で他社との競争や顧客の選別を乗り越えて定着するまでの障壁を何と呼ぶか。",
    answer: "ダーウィンの海",
    choices: ["ダーウィンの海", "魔の川", "死の谷", "キャズム"],
    explanation: "ダーウィンの海は事業化後の市場競争を生き残る難しさを表す。研究・開発・事業化を越えた後の段階に位置する。"
  },
  {
    id: "poc",
    category: "イノベーション・新規事業",
    question: "新しい技術やアイデアが技術的に実現可能かを、小規模な試作や実験で確かめる活動はどれか。",
    answer: "PoC",
    choices: ["PoC", "PoV", "プロトタイプ", "MVP"],
    explanation: "PoCはProof of Concept（概念実証）の略。まず実現可能性を確かめる。事業価値を確かめるPoVとは評価の中心が異なる。"
  },
  {
    id: "pov",
    category: "イノベーション・新規事業",
    question: "新しい取組みが、顧客や事業に十分な価値を生むかを検証する活動はどれか。",
    answer: "PoV",
    choices: ["PoV", "PoC", "MVP", "A/Bテスト"],
    explanation: "PoVはProof of Value（価値実証）の略。技術的に作れるかを確かめるPoCに対し、導入効果や顧客価値があるかを重視する。"
  },
  {
    id: "innovators-dilemma",
    category: "イノベーション・新規事業",
    question: "優良企業が既存顧客と高収益製品を重視するあまり、当初は低性能な新技術への対応が遅れて地位を失う現象はどれか。",
    answer: "イノベーションのジレンマ",
    choices: ["イノベーションのジレンマ", "キャズム", "デジタルディスラプション", "ダーウィンの海"],
    explanation: "イノベーションのジレンマは、合理的な既存事業の改善が破壊的イノベーションへの対応を妨げる逆説を示す。"
  },
  {
    id: "design-thinking",
    category: "イノベーション・新規事業",
    question: "利用者への共感から課題を捉え、アイデア・試作・テストを繰り返して解決策を探る方法はどれか。",
    answer: "デザイン思考",
    choices: ["デザイン思考", "シーズ思考", "リーンスタートアップ", "バックキャスティング"],
    explanation: "デザイン思考は人間中心で、共感・問題定義・発想・試作・テストを反復する。見た目を整える作業だけを意味しない。"
  },
  {
    id: "business-model-canvas",
    category: "イノベーション・新規事業",
    question: "顧客層、価値提案、チャネル、収益の流れなど9要素を一枚に整理し、事業の仕組みを検討する道具はどれか。",
    answer: "ビジネスモデルキャンバス",
    choices: ["ビジネスモデルキャンバス", "BSC", "SWOT分析", "カスタマージャーニーマップ"],
    explanation: "ビジネスモデルキャンバスは、事業が誰にどんな価値をどう届け、どう収益を得るかを9つの欄で俯瞰する。"
  },
  {
    id: "lean-startup",
    category: "イノベーション・新規事業",
    question: "必要最小限の製品を早く市場に出し、顧客の反応を測って学び、仮説を修正する起業手法はどれか。",
    answer: "リーンスタートアップ",
    choices: ["リーンスタートアップ", "デザイン思考", "ウォーターフォールモデル", "ハッカソン"],
    explanation: "リーンスタートアップはBuild-Measure-Learn（構築・計測・学習）の循環で、無駄を抑えながら事業仮説を検証する。"
  },
  {
    id: "digital-disruption",
    category: "イノベーション・新規事業",
    question: "デジタル技術を使う新規企業やサービスが、既存業界の競争ルールや事業構造を大きく変える現象はどれか。",
    answer: "デジタルディスラプション",
    choices: ["デジタルディスラプション", "デジタルトランスフォーメーション", "イノベーションのジレンマ", "APIエコノミー"],
    explanation: "デジタルディスラプションはデジタルによる創造的破壊。既存企業内の変革を表すDXより、市場や業界が外部から揺さぶられる側面を強調する。"
  },
  {
    id: "forecasting",
    category: "イノベーション・新規事業",
    question: "現在までの傾向や実績を起点に、その延長として将来を予測し計画を立てる方法はどれか。",
    answer: "フォアキャスティング",
    choices: ["フォアキャスティング", "バックキャスティング", "フェルミ推定", "シナリオプランニング"],
    explanation: "フォアキャスティングは現在から未来へ向けて予測する。望ましい未来から逆算するバックキャスティングと時間の向きが異なる。"
  },
  {
    id: "backcasting",
    category: "イノベーション・新規事業",
    question: "望ましい将来像を先に定め、そこから逆算して現在行うべき施策を考える方法はどれか。",
    answer: "バックキャスティング",
    choices: ["バックキャスティング", "フォアキャスティング", "デザイン思考", "SWOT分析"],
    explanation: "バックキャスティングは目標とする未来を起点に道筋を逆算する。過去・現在の延長で予測するフォアキャスティングと対比される。"
  },

  {
    id: "rfid",
    category: "技術・サービス",
    question: "ICタグへ電波を使って非接触で情報を読み書きし、複数の商品をまとめて識別できる技術はどれか。",
    answer: "RFID",
    choices: ["RFID", "NFC", "QRコード", "GPS"],
    explanation: "RFIDはRadio Frequency Identification（無線周波数識別）の略。タグを直接見せずに読み取れる。NFCは近距離無線通信の方式。"
  },
  {
    id: "nfc",
    category: "技術・サービス",
    question: "スマートフォンのタッチ決済などで使われる、数cm程度の近距離で通信する無線技術はどれか。",
    answer: "NFC",
    choices: ["NFC", "RFID", "Bluetooth", "Wi-Fi"],
    explanation: "NFCはNear Field Communication（近距離無線通信）の略。RFID技術の一種で、非常に近い距離で端末同士やタグと通信する。"
  },
  {
    id: "cad",
    category: "技術・サービス",
    question: "製品や建築物の図面を、コンピュータ上で作成・修正するための仕組みはどれか。",
    answer: "CAD",
    choices: ["CAD", "CAM", "CAE", "CGM"],
    explanation: "CADはComputer Aided Design（コンピュータ支援設計）の略。設計図作成を支援する。製造工程を支援するCAMと連携して使われる。"
  },
  {
    id: "cam",
    category: "技術・サービス",
    question: "CADで作成した設計情報などを使い、工作機械の制御や製造工程をコンピュータで支援する仕組みはどれか。",
    answer: "CAM",
    choices: ["CAM", "CAD", "CAE", "FA"],
    explanation: "CAMはComputer Aided Manufacturing（コンピュータ支援製造）の略。設計支援のCADに対し、製造や加工を支援する。"
  },
  {
    id: "freemium",
    category: "技術・サービス",
    question: "基本機能を無料で提供し、高機能版や追加容量など一部の利用者から料金を得るビジネスモデルはどれか。",
    answer: "フリーミアム",
    choices: ["フリーミアム", "サブスクリプション", "従量課金", "広告モデル"],
    explanation: "フリーミアムはFreeとPremiumを組み合わせた言葉。無料利用で裾野を広げ、有料機能への移行で収益化する。"
  },
  {
    id: "seo",
    category: "技術・サービス",
    question: "検索結果の広告枠ではない部分で、自社サイトが見つけられやすくなるよう内容や構造を改善する取組みはどれか。",
    answer: "SEO",
    choices: ["SEO", "SEM", "リスティング広告", "アフィリエイト"],
    explanation: "SEOはSearch Engine Optimization（検索エンジン最適化）の略。検索広告の出稿そのものではなく、自然検索での発見性を高める。"
  },
  {
    id: "cgm",
    category: "技術・サービス",
    question: "レビューサイトやSNSの投稿など、企業ではなく一般の利用者が作成した内容を中心に成り立つメディアはどれか。",
    answer: "CGM",
    choices: ["CGM", "CMS", "オウンドメディア", "マスメディア"],
    explanation: "CGMはConsumer Generated Media（消費者生成メディア）の略。口コミ、投稿、動画など利用者が生み出す内容が中心。"
  },
  {
    id: "iaas",
    category: "技術・サービス",
    question: "仮想サーバ、ストレージ、ネットワークなどのIT基盤をインターネット経由で提供するクラウドサービスはどれか。",
    answer: "IaaS",
    choices: ["IaaS", "PaaS", "SaaS", "DaaS"],
    explanation: "IaaSはInfrastructure as a Service（サービスとしてのIT基盤）の略。利用者はOSやミドルウェア以降を構築・管理する。"
  },
  {
    id: "paas",
    category: "技術・サービス",
    question: "アプリケーションの開発・実行に必要なOS、データベース、実行環境などをクラウドで提供するサービスはどれか。",
    answer: "PaaS",
    choices: ["PaaS", "IaaS", "SaaS", "DaaS"],
    explanation: "PaaSはPlatform as a Service（サービスとしてのプラットフォーム）の略。利用者は基盤管理を抑え、アプリ開発に集中できる。"
  },
  {
    id: "saas",
    category: "技術・サービス",
    question: "メールや表計算など、完成したアプリケーション機能をインターネット経由で利用するクラウドサービスはどれか。",
    answer: "SaaS",
    choices: ["SaaS", "PaaS", "IaaS", "DaaS"],
    explanation: "SaaSはSoftware as a Service（サービスとしてのソフトウェア）の略。利用者はアプリをインストール・運用せず、機能をそのまま利用する。"
  },
  {
    id: "daas",
    category: "技術・サービス",
    question: "仮想デスクトップ環境をクラウドから配信し、利用者が端末を問わず同じ作業環境へ接続できるサービスはどれか。",
    answer: "DaaS",
    choices: ["DaaS", "SaaS", "IaaS", "VDI"],
    explanation: "DaaSはDesktop as a Service（サービスとしてのデスクトップ）の略。クラウド側のデスクトップを月額利用などで提供する。"
  },
  {
    id: "slcp",
    category: "技術・サービス",
    question: "ソフトウェアの企画・開発・運用・保守など、誕生から廃止までの作業を共通化したプロセスの枠組みはどれか。",
    answer: "SLCP",
    choices: ["SLCP", "SLA", "SDLC", "WBS"],
    explanation: "SLCPはSoftware Life Cycle Process（ソフトウェアライフサイクルプロセス）の略。ソフトウェアの取得・供給・開発・運用・保守などの作業を体系化する。"
  },
  {
    id: "add-20260726-bcm",
    batchId: "addition-2026-07-26",
    category: "事業継続・設備管理",
    question: "災害や事故に備え、事業継続計画の策定・訓練・見直しを継続的に行う管理活動はどれか。",
    answer: "BCM",
    choices: ["BCM", "BCP", "SLA", "SLM"],
    explanation: "BCMはBusiness Continuity Management（事業継続管理）の略。計画を作るだけでなく、訓練や改善まで継続して行う。"
  },
  {
    id: "add-20260726-bcp",
    batchId: "addition-2026-07-26",
    category: "事業継続・設備管理",
    question: "災害や事故が起きても重要業務を続け、停止した場合は早期に復旧するための具体的な計画はどれか。",
    answer: "BCP",
    choices: ["BCP", "BCM", "SLA", "WBS"],
    explanation: "BCPはBusiness Continuity Plan（事業継続計画）の略。緊急時に継続・復旧する業務、手順、体制などを定める。"
  },
  {
    id: "add-20260726-facility-management",
    batchId: "addition-2026-07-26",
    category: "事業継続・設備管理",
    question: "安全性、コスト、快適性、機密性などを考慮し、建物や設備とその利用環境を総合的に管理する考え方はどれか。",
    answer: "ファシリティマネジメント",
    choices: ["ファシリティマネジメント", "サービスマネジメント", "プロジェクトマネジメント", "サプライチェーンマネジメント"],
    explanation: "ファシリティマネジメントは、施設・設備と環境を経営資源として総合的に企画、管理、活用する考え方。安全、費用、快適さ、情報保護なども考える。"
  },
  {
    id: "add-20260726-ups",
    batchId: "addition-2026-07-26",
    category: "事業継続・設備管理",
    question: "停電した直後にバッテリーから電力を供給し、機器の安全な終了や発電設備への切替時間を確保する装置はどれか。",
    answer: "UPS",
    choices: ["UPS", "自家発電装置", "NAS", "RAID"],
    explanation: "UPSはUninterruptible Power Supply（無停電電源装置）の略。停電や瞬断のとき、一定時間電力を供給する。"
  },
  {
    id: "add-20260726-emergency-generator",
    batchId: "addition-2026-07-26",
    category: "事業継続・設備管理",
    question: "停電が長引く場合に、エンジンなどを動力として発電し、設備へ比較的長時間電力を供給するものはどれか。",
    answer: "自家発電装置",
    choices: ["自家発電装置", "UPS", "フリーアクセスフロア", "サージ保護装置"],
    explanation: "自家発電装置は燃料などを使って電力を作る設備。起動までの短い時間をUPSで補う構成もある。"
  },
  {
    id: "add-20260726-free-access-floor",
    batchId: "addition-2026-07-26",
    category: "事業継続・設備管理",
    question: "床を取り外せるパネルでかさ上げし、床下の空間へ電源線や通信ケーブルを配線できるようにした床はどれか。",
    answer: "フリーアクセスフロア",
    choices: ["フリーアクセスフロア", "耐震床", "二重天井", "防音床"],
    explanation: "フリーアクセスフロアは、床下に配線用の空間を設ける床。機器配置や配線変更に対応しやすい。"
  },
  {
    id: "add-20260726-system-audit-controls",
    batchId: "addition-2026-07-26",
    category: "ガバナンス・統制・監査",
    question: "情報システムに関する統制が適切かを、独立した立場の専門家が客観的に点検・評価し、改善を助言する活動はどれか。",
    answer: "システム監査",
    choices: ["システム監査", "IT統制", "内部統制", "ITガバナンス"],
    explanation: "システム監査は、独立した立場から情報システムのリスクへの対応を点検・評価し、必要に応じて改善を助言する。IT統制は監査される仕組みそのもの。"
  },
  {
    id: "add-20260726-corporate-governance-oversight",
    batchId: "addition-2026-07-26",
    category: "ガバナンス・統制・監査",
    question: "経営の公正性・透明性を高め、株主などに説明責任を果たせるように、経営を監督する仕組みはどれか。",
    answer: "コーポレートガバナンス",
    choices: ["コーポレートガバナンス", "ITガバナンス", "内部統制", "職務分掌"],
    explanation: "コーポレートガバナンスは企業統治のこと。取締役会などによって経営を監督し、公正で透明な経営を目指す。ITガバナンスはそのうちIT活用に焦点を当てる。"
  },
  {
    id: "add-20260726-internal-control",
    batchId: "addition-2026-07-26",
    category: "ガバナンス・統制・監査",
    question: "業務の有効性・効率性、報告の信頼性、法令順守、資産の保全などを達成するため、組織内に整備・運用する仕組みはどれか。",
    answer: "内部統制",
    choices: ["内部統制", "IT統制", "システム監査", "コーポレートガバナンス"],
    explanation: "内部統制は、組織の目的を適切に達成するため、業務に組み込んで運用するルールや手続の総体。IT統制もその一部になる。"
  },
  {
    id: "add-20260726-it-governance",
    batchId: "addition-2026-07-26",
    category: "ガバナンス・統制・監査",
    question: "経営戦略に沿って情報技術への投資や活用方針を決め、その成果とリスクを組織として監督する仕組みはどれか。",
    answer: "ITガバナンス",
    choices: ["ITガバナンス", "IT統制", "内部統制", "システム監査"],
    explanation: "ITガバナンスは、ITを経営目標に役立てるため、意思決定、責任、評価の仕組みを整えること。IT統制は方針を実現する具体的な管理策。"
  },
  {
    id: "add-20260726-it-control",
    batchId: "addition-2026-07-26",
    category: "ガバナンス・統制・監査",
    question: "アクセス権の管理、変更手順、バックアップなど、情報技術に関する処理の正確性や安全性を確保する具体的な管理策はどれか。",
    answer: "IT統制",
    choices: ["IT統制", "ITガバナンス", "システム監査", "職務分掌"],
    explanation: "IT統制は、情報システムを適切に管理・運用するための具体的な仕組み。組織全体の内部統制をITの面から支える。"
  },
  {
    id: "add-20260726-segregation-of-duties",
    batchId: "addition-2026-07-26",
    category: "ガバナンス・統制・監査",
    question: "取引の承認、実行、記録などを一人に集中させず、複数の担当者へ分けて不正や誤りを防ぐ考え方はどれか。",
    answer: "職務分掌",
    choices: ["職務分掌", "権限委譲", "ジョブローテーション", "内部監査"],
    explanation: "職務分掌は、相互に確認できるよう責任や作業を分ける内部統制の方法。一人だけで取引を完結できないようにする。"
  },
  {
    id: "add-20260726-stack",
    batchId: "addition-2026-07-26",
    category: "アルゴリズム・データ構造",
    question: "最後に格納したデータを最初に取り出す、後入れ先出しのデータ構造はどれか。",
    answer: "スタック",
    choices: ["スタック", "キュー", "配列", "リスト"],
    explanation: "スタックはLIFO（Last In, First Out）のデータ構造。積み重ねた皿のように、最後に入れたものから取り出す。"
  },
  {
    id: "add-20260726-queue",
    batchId: "addition-2026-07-26",
    category: "アルゴリズム・データ構造",
    question: "最初に格納したデータを最初に取り出す、先入れ先出しのデータ構造はどれか。",
    answer: "キュー",
    choices: ["キュー", "スタック", "配列", "木構造"],
    explanation: "キューはFIFO（First In, First Out）のデータ構造。待ち行列のように、先に入ったものから処理する。"
  },
  {
    id: "add-20260726-algorithm",
    batchId: "addition-2026-07-26",
    category: "アルゴリズム・データ構造",
    question: "問題を解くための計算や処理の手順を、有限回で終わるよう明確に表したものはどれか。",
    answer: "アルゴリズム",
    choices: ["アルゴリズム", "プログラム言語", "ソースコード", "データベース"],
    explanation: "アルゴリズムは、入力から目的の結果を得るための明確な処理手順。プログラムは、その手順を言語で実装したもの。"
  },
  {
    id: "add-20260726-html",
    batchId: "addition-2026-07-26",
    category: "Web・データ記述",
    question: "見出し、段落、リンクなど、Webページの文書構造や意味をタグで記述する言語はどれか。",
    answer: "HTML",
    choices: ["HTML", "CSS", "XML", "SQL"],
    explanation: "HTMLはHyperText Markup Languageの略。Webページの構造や意味を記述する。見た目の指定には主にCSSを使う。"
  },
  {
    id: "add-20260726-xml",
    batchId: "addition-2026-07-26",
    category: "Web・データ記述",
    question: "利用目的に合わせて独自のタグを定義でき、データの意味や構造を交換しやすい形で記述する言語はどれか。",
    answer: "XML",
    choices: ["XML", "HTML", "CSS", "JavaScript"],
    explanation: "XMLはExtensible Markup Language（拡張可能なマーク付け言語）の略。独自タグを使って構造化データを表現できる。"
  },
  {
    id: "add-20260726-css",
    batchId: "addition-2026-07-26",
    category: "Web・データ記述",
    question: "Webページの文字色、余白、配置など、表示上のデザインを指定するための言語はどれか。",
    answer: "CSS",
    choices: ["CSS", "HTML", "XML", "SQL"],
    explanation: "CSSはCascading Style Sheetsの略。文書構造を記述するHTMLと役割を分け、見た目を指定する。"
  },
  {
    id: "add-20260726-variable",
    batchId: "addition-2026-07-26",
    category: "アルゴリズム・データ構造",
    question: "プログラムで値を一時的に記憶し、名前を付けて参照・変更できる領域はどれか。",
    answer: "変数",
    choices: ["変数", "定数", "関数", "演算子"],
    explanation: "変数は、値を格納する名前付きの領域。処理の途中で格納する値を変更できる。"
  },
  {
    id: "add-20260726-pseudocode-assignment-arrow",
    batchId: "addition-2026-07-26",
    category: "アルゴリズム・データ構造",
    question: "ITパスポートの擬似言語で、右辺の式を計算し、その値を左辺の変数へ格納するときに使う記号はどれか。",
    answer: "擬似言語における代入記号「←」",
    choices: ["擬似言語における代入記号「←」", "比較記号「＝」", "加算記号「＋」", "連結記号「&」"],
    explanation: "擬似言語では「変数名 ← 式」の形で代入を表す。矢印の右側を計算し、その結果を左側の変数に格納する。"
  },
  {
    id: "add-20260726-pseudocode-type-name",
    batchId: "addition-2026-07-26",
    category: "アルゴリズム・データ構造",
    question: "擬似言語の「整数型：count」で、countに格納できるデータの種類を示している部分はどれか。",
    answer: "変数を宣言するときの型名",
    choices: ["変数を宣言するときの型名", "変数名", "関数名", "引数"],
    explanation: "変数宣言は「型名：変数名」の形で表す。この例の「整数型」が型名で、格納するデータの種類を決める。"
  },
  {
    id: "add-20260726-array",
    batchId: "addition-2026-07-26",
    category: "アルゴリズム・データ構造",
    question: "同じ種類の複数のデータを一つの名前でまとめ、添字を使って各要素を指定するデータ構造はどれか。",
    answer: "配列",
    choices: ["配列", "スタック", "キュー", "変数"],
    explanation: "配列は複数の要素を順番にまとめたデータ構造。要素は添字（インデックス）で指定する。"
  },
  {
    id: "add-20260726-sequence",
    batchId: "addition-2026-07-26",
    category: "アルゴリズム・データ構造",
    question: "処理を記述された順番どおりに、上から一つずつ実行する基本構造はどれか。",
    answer: "順次処理",
    choices: ["順次処理", "選択処理", "繰り返し処理", "分散処理"],
    explanation: "順次処理は、処理を並んだ順に実行する構造。選択、繰り返しと並ぶ基本的な制御構造の一つ。"
  },
  {
    id: "add-20260726-selection",
    batchId: "addition-2026-07-26",
    category: "アルゴリズム・データ構造",
    question: "条件が成立するかどうかによって、実行する処理を分岐させる基本構造はどれか。",
    answer: "選択処理",
    choices: ["選択処理", "順次処理", "繰り返し処理", "並列処理"],
    explanation: "選択処理は、条件によって実行する道筋を選ぶ構造。if文などで表される。"
  },
  {
    id: "add-20260726-repetition",
    batchId: "addition-2026-07-26",
    category: "アルゴリズム・データ構造",
    question: "条件を満たす間、または決めた回数だけ、同じ処理を反復する基本構造はどれか。",
    answer: "繰り返し処理",
    choices: ["繰り返し処理", "順次処理", "選択処理", "割込み処理"],
    explanation: "繰り返し処理は、同じ手順を条件や回数に応じて実行する構造。for文やwhile文などで表される。"
  },
  {
    id: "add-20260726-distributed-processing",
    batchId: "addition-2026-07-26",
    category: "システム構成・仮想化",
    question: "ネットワークで接続した複数のコンピュータへ処理を分け、互いに連携して実行する方式はどれか。",
    answer: "分散処理",
    choices: ["分散処理", "集中処理", "順次処理", "バッチ処理"],
    explanation: "分散処理は、複数のコンピュータに機能や負荷を分けて処理する方式。負荷分散や拠点分散などに利用される。"
  },
  {
    id: "add-20260726-client-server-system",
    batchId: "addition-2026-07-26",
    category: "システム構成・仮想化",
    question: "サービスを要求する側と、要求に応じて機能やデータを提供する側に役割を分けたシステムはどれか。",
    answer: "クライアントサーバシステム",
    choices: ["クライアントサーバシステム", "シンクライアント", "デュアルシステム", "スタンドアロンシステム"],
    explanation: "クライアントサーバシステムは、要求するクライアントと、サービスを提供するサーバが連携する構成。"
  },
  {
    id: "add-20260726-web-system",
    batchId: "addition-2026-07-26",
    category: "システム構成・仮想化",
    question: "利用者がブラウザから要求を送り、Webサーバなどが処理した結果をページとして返すシステムはどれか。",
    answer: "Webシステム",
    choices: ["Webシステム", "シンクライアント", "スタンドアロンシステム", "組込みシステム"],
    explanation: "Webシステムは、ブラウザとWebサーバがHTTPなどで通信してサービスを提供する。端末ごとの専用アプリを減らしやすい。"
  },
  {
    id: "add-20260726-thin-client",
    batchId: "addition-2026-07-26",
    category: "システム構成・仮想化",
    question: "利用者の端末には必要最小限の機能だけを持たせ、アプリやデータを主にサーバ側で管理する方式はどれか。",
    answer: "シンクライアント",
    choices: ["シンクライアント", "クライアントサーバシステム", "スタンドアロン", "ピアツーピア"],
    explanation: "シンクライアントは、端末側の機能を絞ってサーバに集約する方式。情報漏えい対策や一元管理に役立つ。"
  },
  {
    id: "add-20260726-server-virtualization",
    batchId: "addition-2026-07-26",
    category: "システム構成・仮想化",
    question: "一台の物理コンピュータ上に、互いに独立した複数の仮想的なコンピュータを動かす技術はどれか。",
    answer: "サーバの仮想化",
    choices: ["サーバの仮想化", "分散処理", "シンクライアント", "RAID"],
    explanation: "サーバの仮想化は、CPUやメモリなどを分けて複数の仮想マシンを稼働させる技術。物理資源を効率よく使える。"
  },
  {
    id: "add-20260726-simplex-system",
    batchId: "addition-2026-07-26",
    category: "システム構成・仮想化",
    question: "予備系を用意せず、一組の機器だけで処理する最も単純なシステム構成はどれか。",
    answer: "シンプレックスシステム",
    choices: ["シンプレックスシステム", "デュプレックスシステム", "デュアルシステム", "クラスタシステム"],
    explanation: "シンプレックスシステムは一系統だけで動作する構成。低コストだが、その系統の故障が停止につながりやすい。"
  },
  {
    id: "add-20260726-duplex-system",
    batchId: "addition-2026-07-26",
    category: "システム構成・仮想化",
    question: "稼働系と待機系を用意し、稼働系が故障したときに待機系へ切り替えて処理を続ける構成はどれか。",
    answer: "デュプレックスシステム",
    choices: ["デュプレックスシステム", "デュアルシステム", "シンプレックスシステム", "マルチプロセッサシステム"],
    explanation: "デュプレックスシステムは、主系と待機系で構成する。両系で同じ処理を照合するデュアルシステムとは異なる。"
  },
  {
    id: "add-20260726-dual-system",
    batchId: "addition-2026-07-26",
    category: "システム構成・仮想化",
    question: "二組のシステムで同じ処理を同時に行い、結果を照合して信頼性を高める構成はどれか。",
    answer: "デュアルシステム",
    choices: ["デュアルシステム", "デュプレックスシステム", "シンプレックスシステム", "クライアントサーバシステム"],
    explanation: "デュアルシステムは、二系統で同じ処理を行って結果を照合する。片方を待機させるデュプレックスシステムより高い信頼性を狙う。"
  },
  {
    id: "add-20260726-raid",
    batchId: "addition-2026-07-26",
    category: "ストレージ・性能・信頼性",
    question: "複数の磁気ディスクを組み合わせ、一台の装置のように扱って性能や信頼性を高める技術はどれか。",
    answer: "RAID",
    choices: ["RAID", "NAS", "SAN", "UPS"],
    explanation: "RAIDはRedundant Arrays of Independent Disksの略。データの分散や冗長化によって性能・信頼性を高める。方式によって効果は異なる。"
  },
  {
    id: "add-20260726-striping",
    batchId: "addition-2026-07-26",
    category: "ストレージ・性能・信頼性",
    question: "データを細かく分割して複数のディスクへ並行して読み書きし、高速化を図る記録方式はどれか。",
    answer: "ストライピング",
    choices: ["ストライピング", "ミラーリング", "バックアップ", "キャッシング"],
    explanation: "ストライピングはデータを複数ディスクに分散する方式。RAID 0は高速化できるが、冗長性はない。"
  },
  {
    id: "add-20260726-mirroring",
    batchId: "addition-2026-07-26",
    category: "ストレージ・性能・信頼性",
    question: "同じデータを二台以上のディスクへ同時に書き込み、一台が故障してもデータを利用できるようにする方式はどれか。",
    answer: "ミラーリング",
    choices: ["ミラーリング", "ストライピング", "圧縮", "デフラグ"],
    explanation: "ミラーリングは同じ内容を複製して保存する方式。RAID 1で使われ、使用できる容量はディスク合計より少なくなる。"
  },
  {
    id: "add-20260726-nas",
    batchId: "addition-2026-07-26",
    category: "ストレージ・性能・信頼性",
    question: "ネットワークへ直接接続し、複数の利用者へファイル共有機能を提供する記憶装置はどれか。",
    answer: "NAS",
    choices: ["NAS", "RAID", "UPS", "キャッシュメモリ"],
    explanation: "NASはNetwork Attached Storageの略。LANなどに接続し、ファイル単位で共有できるストレージ。"
  },
  {
    id: "add-20260726-response-time",
    batchId: "addition-2026-07-26",
    category: "ストレージ・性能・信頼性",
    question: "利用者が処理を要求してから、システムが応答を返すまでにかかる時間を表す指標はどれか。",
    answer: "レスポンスタイム",
    choices: ["レスポンスタイム", "ターンアラウンドタイム", "スループット", "クロック周波数"],
    explanation: "レスポンスタイムは要求から応答までの時間。ターンアラウンドタイムは、処理の投入から結果がすべて得られるまでの時間を指す。"
  },
  {
    id: "add-20260726-tco",
    batchId: "addition-2026-07-26",
    category: "ストレージ・性能・信頼性",
    question: "情報システムの導入費だけでなく、運用、保守、教育、廃棄など利用期間全体の費用を合計したものはどれか。",
    answer: "TCO",
    choices: ["TCO", "ROI", "NPV", "BEP"],
    explanation: "TCOはTotal Cost of Ownership（総保有コスト）の略。購入価格だけでなく、保有中にかかる費用を総合して比較する。"
  },
  {
    id: "add-20260726-mtbf",
    batchId: "addition-2026-07-26",
    category: "ストレージ・性能・信頼性",
    question: "修理して使い続けるシステムが、故障してから次に故障するまでに正常稼働した平均時間はどれか。",
    answer: "MTBF",
    choices: ["MTBF", "MTTR", "TCO", "SLA"],
    explanation: "MTBFはMean Time Between Failures（平均故障間隔）の略。値が大きいほど、一般に故障しにくいと考えられる。"
  },
  {
    id: "add-20260726-mttr",
    batchId: "addition-2026-07-26",
    category: "ストレージ・性能・信頼性",
    question: "故障したシステムを修理し、再び利用できる状態へ戻すまでにかかる平均時間はどれか。",
    answer: "MTTR",
    choices: ["MTTR", "MTBF", "TCO", "RTO"],
    explanation: "MTTRはMean Time To Repair（平均修復時間）の略。値が小さいほど、一般に復旧が速い。"
  },
  {
    id: "add-20260726-fail-soft",
    batchId: "addition-2026-07-26",
    category: "ストレージ・性能・信頼性",
    question: "障害が起きたとき、一部の機能や性能を低下させてもシステム全体の停止を避け、可能な範囲で処理を続ける考え方はどれか。",
    answer: "フェールソフト",
    choices: ["フェールソフト", "フェールセーフ", "フールプルーフ", "フォールトトレラント"],
    explanation: "フェールソフトは、故障時に機能を段階的に縮小して運転を続ける考え方。安全な状態へ停止させるフェールセーフとは異なる。"
  },
  {
    id: "add-20260726-fail-safe",
    batchId: "addition-2026-07-26",
    category: "ストレージ・性能・信頼性",
    question: "機器が故障したとき、被害が広がらないよう動作を安全な側へ移す考え方はどれか。",
    answer: "フェールセーフ",
    choices: ["フェールセーフ", "フェールソフト", "フールプルーフ", "フォールトトレラント"],
    explanation: "フェールセーフは、故障しても危険にならない状態にする設計。例として、故障時に踏切の遮断機を下げる動作がある。"
  },
  {
    id: "add-20260726-fool-proof",
    batchId: "addition-2026-07-26",
    category: "ストレージ・性能・信頼性",
    question: "利用者が誤った操作をしても事故や故障につながらないよう、操作そのものをできなくするなどの工夫はどれか。",
    answer: "フールプルーフ",
    choices: ["フールプルーフ", "フェールセーフ", "フェールソフト", "フォールトトレラント"],
    explanation: "フールプルーフは、誤操作をしても危険な結果にならないようにする設計。故障後の安全を考えるフェールセーフとは原因が異なる。"
  },
  {
    id: "add-20260726-fault-tolerant",
    batchId: "addition-2026-07-26",
    category: "ストレージ・性能・信頼性",
    question: "構成要素の一部が故障しても、冗長な構成などによってシステム全体の処理を継続できるようにする考え方はどれか。",
    answer: "フォールトトレラント",
    choices: ["フォールトトレラント", "フェールソフト", "フェールセーフ", "フールプルーフ"],
    explanation: "フォールトトレラントは、故障を許容してサービスを継続する設計思想。部品の二重化などで実現する。"
  },
  {
    id: "add-20260726-bathtub-curve",
    batchId: "addition-2026-07-26",
    category: "ストレージ・性能・信頼性",
    question: "機器の故障率が、使用開始直後は高く、その後は低く安定し、寿命が近づくと再び高くなる形を表す曲線はどれか。",
    answer: "バスタブ曲線",
    choices: ["バスタブ曲線", "S字曲線", "経験曲線", "正規分布曲線"],
    explanation: "バスタブ曲線は、初期故障期・偶発故障期・摩耗故障期における故障率の変化を浴槽の断面のような形で表す。"
  },
  {
    id: "add-20260726-wearable-device",
    batchId: "addition-2026-07-26",
    category: "ハードウェア・周辺機器",
    question: "腕時計型や眼鏡型など、身体に装着して持ち歩きながら利用する情報機器はどれか。",
    answer: "ウェアラブル端末",
    choices: ["ウェアラブル端末", "タブレット端末", "シンクライアント", "ブレードサーバ"],
    explanation: "ウェアラブル端末は、身に着けて使う小型コンピュータ。健康情報の測定や通知の確認などに利用される。"
  },
  {
    id: "add-20260726-blade-server",
    batchId: "addition-2026-07-26",
    category: "ハードウェア・周辺機器",
    question: "薄い板状のサーバを共通の筐体へ複数差し込み、電源や冷却設備を共有して高密度に設置するサーバはどれか。",
    answer: "ブレードサーバ",
    choices: ["ブレードサーバ", "ラックマウントサーバ", "タワー型サーバ", "NAS"],
    explanation: "ブレードサーバは、薄型のサーバモジュールを専用筐体へ集約する方式。省スペースで一括管理しやすい。"
  },
  {
    id: "add-20260726-clock-frequency",
    batchId: "addition-2026-07-26",
    category: "ハードウェア・周辺機器",
    question: "CPUが動作のタイミングを取る信号を1秒間に何回繰り返すかを、Hzで表したものはどれか。",
    answer: "クロック周波数",
    choices: ["クロック周波数", "解像度", "転送速度", "レスポンスタイム"],
    explanation: "クロック周波数は、CPUなどの基準信号の繰返し回数。GHzは10億Hzを表すが、性能は周波数だけでは決まらない。"
  },
  {
    id: "add-20260726-multicore-processor",
    batchId: "addition-2026-07-26",
    category: "ハードウェア・周辺機器",
    question: "一つのCPUパッケージ内に複数の演算処理装置を持ち、複数の処理を並行して実行しやすくしたものはどれか。",
    answer: "マルチコアプロセッサ",
    choices: ["マルチコアプロセッサ", "シングルコアプロセッサ", "ブレードサーバ", "GPUメモリ"],
    explanation: "マルチコアプロセッサは、一つのプロセッサに複数のコアを搭載する。並列化できる処理の性能向上に役立つ。"
  },
  {
    id: "add-20260726-flash-memory",
    batchId: "addition-2026-07-26",
    category: "ハードウェア・周辺機器",
    question: "電源を切っても内容を保持し、電気的に一括消去・書換えができる半導体メモリはどれか。",
    answer: "フラッシュメモリ",
    choices: ["フラッシュメモリ", "DRAM", "SRAM", "キャッシュメモリ"],
    explanation: "フラッシュメモリは不揮発性の半導体メモリ。USBメモリ、SSD、メモリカードなどに使われる。"
  },
  {
    id: "add-20260726-cd-capacity",
    batchId: "addition-2026-07-26",
    category: "ハードウェア・周辺機器",
    question: "代表的な記憶容量が700MBである光ディスクはどれか。",
    answer: "CD",
    choices: ["CD", "DVD", "Blu-ray Disc", "フラッシュメモリ"],
    explanation: "CDはCompact Discの略。代表的な記憶容量は700MBで、DVDやBlu-ray Discより小さい。"
  },
  {
    id: "add-20260726-dvd-capacity",
    batchId: "addition-2026-07-26",
    category: "ハードウェア・周辺機器",
    question: "片面1層の代表的な記憶容量が4.7GBである光ディスクはどれか。",
    answer: "DVD",
    choices: ["DVD", "CD", "Blu-ray Disc", "フラッシュメモリ"],
    explanation: "DVDはDigital Versatile Discの略。片面1層の代表的な記憶容量は4.7GBである。"
  },
  {
    id: "add-20260726-bluray-capacity",
    batchId: "addition-2026-07-26",
    category: "ハードウェア・周辺機器",
    question: "1層の代表的な記憶容量が25GBで、青紫色レーザーを使う光ディスクはどれか。",
    answer: "Blu-ray Disc",
    choices: ["Blu-ray Disc", "DVD", "CD", "フラッシュメモリ"],
    explanation: "Blu-ray Discは、1層で25GBが代表的な記憶容量。DVDより短い波長の青紫色レーザーを使い、高密度に記録する。"
  },
  {
    id: "add-20260726-ram-volatile",
    batchId: "addition-2026-07-26",
    category: "ハードウェア・周辺機器",
    question: "読み書きができる主記憶として使われ、一般に電源を切ると内容が失われるメモリはどれか。",
    answer: "RAM",
    choices: ["RAM", "ROM", "フラッシュメモリ", "光ディスク"],
    explanation: "RAMはRandom Access Memoryの略。一般に揮発性で、電源を切ると記憶内容が失われる。"
  },
  {
    id: "add-20260726-rom-nonvolatile",
    batchId: "addition-2026-07-26",
    category: "ハードウェア・周辺機器",
    question: "主に読出し用として使われ、電源を切っても内容が保持される不揮発性メモリはどれか。",
    answer: "ROM",
    choices: ["ROM", "RAM", "DRAM", "SRAM"],
    explanation: "ROMはRead Only Memoryの略。不揮発性で、電源を切っても記憶内容を保持する。"
  },
  {
    id: "add-20260726-dram",
    batchId: "addition-2026-07-26",
    category: "ハードウェア・周辺機器",
    question: "コンデンサに電荷を蓄えて情報を記憶し、内容を保つために定期的な再書込みが必要なメモリはどれか。",
    answer: "DRAM",
    choices: ["DRAM", "SRAM", "ROM", "フラッシュメモリ"],
    explanation: "DRAMはDynamic Random Access Memoryの略。定期的なリフレッシュが必要で、主記憶に広く使われる。"
  },
  {
    id: "add-20260726-sram",
    batchId: "addition-2026-07-26",
    category: "ハードウェア・周辺機器",
    question: "フリップフロップ回路で情報を保持し、再書込み動作が不要で高速なためキャッシュに使われるメモリはどれか。",
    answer: "SRAM",
    choices: ["SRAM", "DRAM", "ROM", "フラッシュメモリ"],
    explanation: "SRAMはStatic Random Access Memoryの略。DRAMより高速でリフレッシュ不要だが、一般に高価で容量を大きくしにくい。"
  },
  {
    id: "add-20260726-dpi",
    batchId: "addition-2026-07-26",
    category: "ハードウェア・周辺機器",
    question: "プリンタやスキャナの解像度を、1インチ当たりに並ぶ点の数で表す単位はどれか。",
    answer: "dpi",
    choices: ["dpi", "ppm", "bps", "Hz"],
    explanation: "dpiはdots per inchの略。1インチ当たりのドット数を表し、値が大きいほど細かく表現できる。"
  },
  {
    id: "add-20260726-ppm",
    batchId: "addition-2026-07-26",
    category: "ハードウェア・周辺機器",
    question: "プリンタの印刷速度を、1分間に印刷できるページ数で表す単位はどれか。",
    answer: "ppm",
    choices: ["ppm", "dpi", "bps", "rpm"],
    explanation: "ppmはpages per minuteの略。1分間に何ページ印刷できるかを表す。dpiは解像度の単位。"
  },
  {
    id: "add-20260726-plug-and-play",
    batchId: "addition-2026-07-26",
    category: "ハードウェア・周辺機器",
    question: "周辺機器を接続したとき、OSが機器を自動検出し、必要な設定を行って利用可能にする仕組みはどれか。",
    answer: "プラグアンドプレイ",
    choices: ["プラグアンドプレイ", "ホットスワップ", "デュアルブート", "オーバークロック"],
    explanation: "プラグアンドプレイは、接続した機器を自動認識して設定する仕組み。電源を入れたまま交換できることを表すホットスワップとは異なる。"
  },
  {
    id: "add-20260802-er-diagram",
    batchId: "addition-2026-08-02-ch13-15",
    category: "データベース",
    question: "業務で扱う人・商品などの実体と、それらの関係を図で表すデータモデルはどれか。",
    answer: "E-R図",
    choices: ["E-R図", "DFD", "フローチャート", "状態遷移図"],
    explanation: "E-R図はEntity-Relationship Diagramの略。エンティティ（実体）とリレーションシップ（関連）を表す。DFDはデータの流れを表す図である。"
  },
  {
    id: "add-20260802-entity",
    batchId: "addition-2026-08-02-ch13-15",
    category: "データベース",
    question: "データ設計で、顧客・商品・注文のように情報を管理する対象となる実体はどれか。",
    answer: "エンティティ",
    choices: ["属性", "エンティティ", "リレーションシップ", "インデックス"],
    explanation: "エンティティは、データとして管理する人・物・出来事などの実体。属性は実体が持つ名前や価格などの性質、リレーションシップは実体同士の関連である。"
  },
  {
    id: "add-20260802-relationship",
    batchId: "addition-2026-08-02-ch13-15",
    category: "データベース",
    question: "データ設計で、顧客が注文する、注文に商品が含まれる、という実体同士の関連を指すものはどれか。",
    answer: "リレーションシップ",
    choices: ["エンティティ", "属性", "リレーションシップ", "主キー"],
    explanation: "リレーションシップはエンティティ同士の関連を表す。エンティティは管理対象そのもの、属性はその対象の特徴である。"
  },
  {
    id: "add-20260802-normalization",
    batchId: "addition-2026-08-02-ch13-15",
    category: "データベース",
    question: "表の重複データや更新時の矛盾を減らすため、項目の関係に基づいて表を適切に分割する作業はどれか。",
    answer: "正規化",
    choices: ["暗号化", "索引付け", "排他制御", "正規化"],
    explanation: "正規化は、データの重複や追加・更新・削除時の不整合を減らすように表を整理する作業。暗号化や排他制御とは目的が異なる。"
  },
  {
    id: "add-20260802-dbms",
    batchId: "addition-2026-08-02-ch13-15",
    category: "データベース",
    question: "データを体系的に蓄積し、検索・更新・同時利用・障害回復などをまとめて管理するソフトウェアはどれか。",
    answer: "DBMS",
    choices: ["DBMS", "OS", "BI", "DWH"],
    explanation: "DBMSはDatabase Management System（データベース管理システム）の略。データの一貫性を保ちながら、効率的な検索や更新を提供する。"
  },
  {
    id: "add-20260802-relational-selection",
    batchId: "addition-2026-08-02-ch13-15",
    category: "データベース",
    question: "関係データベースの表から、条件に合う行だけを取り出す操作はどれか。",
    answer: "選択",
    choices: ["射影", "選択", "結合", "正規化"],
    explanation: "選択は条件に合う行を取り出す操作。射影は必要な列を取り出し、結合は複数の表を関連付けて一つの結果にする。"
  },
  {
    id: "add-20260802-relational-projection",
    batchId: "addition-2026-08-02-ch13-15",
    category: "データベース",
    question: "関係データベースの表から、氏名列と電話番号列のように必要な列だけを取り出す操作はどれか。",
    answer: "射影",
    choices: ["選択", "結合", "射影", "排他制御"],
    explanation: "射影は必要な列を取り出す操作。選択は条件に合う行を取り出す操作なので、行と列の違いを押さえる。"
  },
  {
    id: "add-20260802-relational-join",
    batchId: "addition-2026-08-02-ch13-15",
    category: "データベース",
    question: "顧客表と注文表を顧客番号で対応付け、一つの検索結果として扱う操作はどれか。",
    answer: "結合",
    choices: ["選択", "射影", "正規化", "結合"],
    explanation: "結合は、共通する項目などを使って複数の表を関連付ける操作。選択は行、射影は列を取り出す操作である。"
  },
  {
    id: "add-20260802-sql",
    batchId: "addition-2026-08-02-ch13-15",
    category: "データベース",
    question: "関係データベースに対して、データの定義・検索・追加・更新などを指示するための標準的な言語はどれか。",
    answer: "SQL",
    choices: ["SQL", "HTML", "CSS", "XML"],
    explanation: "SQLはStructured Query Language（構造化問合せ言語）の略。関係データベースの定義や検索、更新などに用いる。"
  },
  {
    id: "add-20260802-transaction-management",
    batchId: "addition-2026-08-02-ch13-15",
    category: "データベース",
    question: "振込処理の出金と入金のような一連の処理を一つの単位として扱い、すべて成功か、すべて取消しにする管理はどれか。",
    answer: "トランザクション管理",
    choices: ["排他制御", "トランザクション管理", "アクセス管理", "バックアップ管理"],
    explanation: "トランザクション管理は、関連する一連の処理を一つの単位として扱い、データの整合性を保つ。排他制御は同時更新の衝突を防ぐ仕組みである。"
  },
  {
    id: "add-20260802-commit",
    batchId: "addition-2026-08-02-ch13-15",
    category: "データベース",
    question: "一連の更新処理が正常に終わったとき、その変更内容を確定してデータベースへ反映する操作はどれか。",
    answer: "コミット",
    choices: ["ロールバック", "ロールフォワード", "コミット", "チェックポイント"],
    explanation: "コミットはトランザクションの変更を確定する操作。ロールバックは未完了の変更を取り消す操作である。"
  },
  {
    id: "add-20260802-backup-file",
    batchId: "addition-2026-08-02-ch13-15",
    category: "データベース",
    question: "障害や誤削除に備え、ある時点のデータを別の媒体などへ複製して保存したものはどれか。",
    answer: "バックアップファイル",
    choices: ["ログファイル", "チェックポイント", "一時ファイル", "バックアップファイル"],
    explanation: "バックアップファイルは、復旧に備えてデータを複製したもの。ログファイルはバックアップ後に行われた更新履歴などを記録する。"
  },
  {
    id: "add-20260802-log-file",
    batchId: "addition-2026-08-02-ch13-15",
    category: "データベース",
    question: "障害回復に利用するため、データベースへの更新内容や処理の経過を時系列で記録したものはどれか。",
    answer: "ログファイル",
    choices: ["ログファイル", "バックアップファイル", "マスタファイル", "アーカイブファイル"],
    explanation: "ログファイルは更新履歴を記録し、取消しや再実行による復旧に利用する。バックアップファイルは特定時点のデータの複製である。"
  },
  {
    id: "add-20260802-rollback",
    batchId: "addition-2026-08-02-ch13-15",
    category: "データベース",
    question: "処理の途中で異常が起きたとき、更新前の状態へ戻して未完了の変更を取り消す回復処理はどれか。",
    answer: "ロールバック",
    choices: ["ロールフォワード", "ロールバック", "コミット", "バックアップ"],
    explanation: "ロールバックはログを使って更新前へ戻すバックワードリカバリ。ロールフォワードはバックアップ後の更新を再適用して障害直前へ進める。"
  },
  {
    id: "add-20260802-rollforward",
    batchId: "addition-2026-08-02-ch13-15",
    category: "データベース",
    question: "障害後、保存しておいた複製を戻してから更新履歴を再適用し、障害直前の状態へ近づける回復処理はどれか。",
    answer: "ロールフォワード",
    choices: ["ロールバック", "コミット", "ロールフォワード", "排他制御"],
    explanation: "ロールフォワードはバックアップを戻し、その後のログを順に反映するフォワードリカバリ。ロールバックは更新を取り消して前の状態へ戻す。"
  },
  {
    id: "add-20260802-exclusive-control",
    batchId: "addition-2026-08-02-ch13-15",
    category: "データベース",
    question: "複数の利用者が同じデータを同時に更新して矛盾が起きないよう、一方の処理中は他方の更新を制限する仕組みはどれか。",
    answer: "排他制御",
    choices: ["正規化", "認証", "暗号化", "排他制御"],
    explanation: "排他制御は同じデータへの同時更新を適切に制限し、整合性を保つ。同時実行制御とも呼ばれる。"
  },
  {
    id: "add-20260802-lan",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "一つの建物や敷地内など、比較的狭い範囲の機器を接続するネットワークはどれか。",
    answer: "LAN",
    choices: ["LAN", "WAN", "VPN", "PAN"],
    explanation: "LANはLocal Area Network（構内通信網）の略で、建物や敷地内などの限られた範囲を接続する。WANは離れた拠点など広い範囲を結ぶ。"
  },
  {
    id: "add-20260802-wan",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "通信事業者の回線などを使い、地理的に離れた本社と支社のネットワークを結ぶ広域網はどれか。",
    answer: "WAN",
    choices: ["LAN", "WAN", "PAN", "VLAN"],
    explanation: "WANはWide Area Network（広域通信網）の略。離れた地域のLAN同士などを接続する。"
  },
  {
    id: "add-20260802-router",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "異なるネットワーク間で宛先を判断し、パケットを適切な経路へ中継する装置はどれか。",
    answer: "ルーター",
    choices: ["ハブ", "リピータ", "ルーター", "アクセスポイント"],
    explanation: "ルーターはIPアドレスなどを基に、異なるネットワーク間の通信経路を選んで中継する。ハブは主に同じLAN内の機器を接続する。"
  },
  {
    id: "add-20260802-default-gateway",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "端末が自分と異なるネットワークへ通信するとき、最初の送り先として設定する中継点はどれか。",
    answer: "デフォルトゲートウェイ",
    choices: ["DNSサーバ", "DHCPサーバ", "プロキシサーバ", "デフォルトゲートウェイ"],
    explanation: "デフォルトゲートウェイは、端末が外部ネットワークへパケットを送るときの出口。通常はルーターのアドレスを設定する。"
  },
  {
    id: "add-20260802-essid",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "無線ネットワークを識別するために付ける名前で、端末の接続先一覧に表示されるものはどれか。",
    answer: "ESSID",
    choices: ["ESSID", "MACアドレス", "IPアドレス", "ポート番号"],
    explanation: "ESSIDはExtended Service Set Identifierの略で、無線LANを識別するネットワーク名。機器固有のMACアドレスとは役割が異なる。"
  },
  {
    id: "add-20260802-hub",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "同じ構内ネットワークで複数の端末や機器をケーブル接続するための集線装置はどれか。",
    answer: "ハブ",
    choices: ["ルーター", "ハブ", "モデム", "ファイアウォール"],
    explanation: "ハブは同じLAN内の複数機器を接続する装置。一般的なスイッチングハブは宛先に応じてフレームを転送する。"
  },
  {
    id: "add-20260802-ethernet",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "IEEE 802.3として標準化され、オフィスや家庭の有線ネットワークで広く使われる通信方式はどれか。",
    answer: "イーサネット",
    choices: ["Wi-Fi", "Bluetooth", "イーサネット", "NFC"],
    explanation: "イーサネットは有線LANで広く使われる通信規格。無線LANのWi-Fiや近距離無線のBluetoothとは異なる。"
  },
  {
    id: "add-20260802-essid-stealth",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "無線アクセスポイントがネットワーク名を知らせる信号を止め、端末の接続先一覧に表示されにくくする設定はどれか。",
    answer: "ESSIDステルス",
    choices: ["MACアドレスフィルタリング", "WPA2", "VPN", "ESSIDステルス"],
    explanation: "ESSIDステルスはネットワーク名の通知を抑える設定。ただし通信を解析すれば名前を知られる可能性があり、暗号化の代わりにはならない。"
  },
  {
    id: "add-20260802-plc",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "建物内の電力配線へ通信信号を重ね、専用アダプタをコンセントにつないでデータ通信する方式はどれか。",
    answer: "PLC",
    choices: ["PLC", "FTTH", "VoIP", "LPWA"],
    explanation: "PLCはPower Line Communication（電力線通信）の略。既設の電力線を通信経路として利用する。"
  },
  {
    id: "add-20260802-communication-protocol",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "異なる機器同士が通信できるように、データ形式・送受信手順・タイミングなどを定めた共通の規則はどれか。",
    answer: "通信プロトコル",
    choices: ["通信回線", "通信プロトコル", "ドメイン名", "トポロジ"],
    explanation: "通信プロトコルは、機器間通信のための取り決め。SMTPやHTTP、TCP/IPなどが代表例である。"
  },
  {
    id: "add-20260802-smtp",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "電子メールを送信したり、メールサーバ間で転送したりするときに使うプロトコルはどれか。",
    answer: "SMTP",
    choices: ["POP", "IMAP", "SMTP", "FTP"],
    explanation: "SMTPはSimple Mail Transfer Protocolの略で、メールの送信・転送に使う。POPとIMAPはサーバ上のメールを受信・閲覧するためのプロトコルである。"
  },
  {
    id: "add-20260802-pop",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "メールサーバから端末へメッセージを受信し、端末側で読む使い方に向くプロトコルはどれか。",
    answer: "POP",
    choices: ["SMTP", "IMAP", "HTTP", "POP"],
    explanation: "POPはPost Office Protocolの略で、サーバから端末へメールを取得する。IMAPはサーバ上に置いたまま複数端末で管理しやすい。"
  },
  {
    id: "add-20260802-imap",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "メッセージをサーバ上に置いたまま、複数端末で既読状態やフォルダを同期して管理するのに向くプロトコルはどれか。",
    answer: "IMAP",
    choices: ["IMAP", "SMTP", "POP", "FTP"],
    explanation: "IMAPはInternet Message Access Protocolの略。サーバ上のメールボックスを操作するため、複数端末で状態を共有しやすい。"
  },
  {
    id: "add-20260802-ip-address",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "TCP/IPネットワークで、通信相手となる機器や接続点を識別し、パケットの届け先を示す番号はどれか。",
    answer: "IPアドレス",
    choices: ["MACアドレス", "IPアドレス", "ポート番号", "ドメイン名"],
    explanation: "IPアドレスはInternet Protocol addressの略で、ネットワーク上の通信先を識別し経路制御に使う。ポート番号は機器内のサービスを識別する。"
  },
  {
    id: "add-20260802-port-number",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "一台のコンピュータで動くWebやメールなど、通信先のアプリケーションやサービスを識別する番号はどれか。",
    answer: "ポート番号",
    choices: ["IPアドレス", "MACアドレス", "ポート番号", "ESSID"],
    explanation: "ポート番号は一台の機器内で通信先のサービスを識別する。IPアドレスはネットワーク上の機器、MACアドレスはネットワークインタフェースの識別に使う。"
  },
  {
    id: "add-20260802-mac-address",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "主に同じ構内ネットワークで、ネットワークインタフェースを識別してフレームを届けるために使う識別情報はどれか。",
    answer: "MACアドレス",
    choices: ["IPアドレス", "ポート番号", "ESSID", "MACアドレス"],
    explanation: "MACアドレスはMedia Access Control addressの略で、主にデータリンク層でネットワークインタフェースを識別する。IPアドレスは経路制御に使われる。"
  },
  {
    id: "add-20260802-dns",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "Webサイトのドメイン名と、通信に使う数値の宛先情報を対応付けて名前解決する仕組みはどれか。",
    answer: "DNS",
    choices: ["DNS", "DHCP", "NAT", "NTP"],
    explanation: "DNSはDomain Name Systemの略。ドメイン名からIPアドレスを調べるなど、名前と宛先情報を対応付ける。"
  },
  {
    id: "add-20260802-ipv6",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "128ビットのアドレス空間を持ち、従来方式のアドレス不足を解消するために普及しているインターネットプロトコルはどれか。",
    answer: "IPv6",
    choices: ["IPv4", "IPv6", "TCP", "UDP"],
    explanation: "IPv6はInternet Protocol Version 6の略で、128ビットの広大なアドレス空間を持つ。IPv4のアドレスは32ビットである。"
  },
  {
    id: "add-20260802-global-ip-address",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "インターネット上で通信相手を一意に識別できるよう割り当てられ、外部との通信に用いるアドレスはどれか。",
    answer: "グローバルIPアドレス",
    choices: ["プライベートIPアドレス", "MACアドレス", "グローバルIPアドレス", "ループバックアドレス"],
    explanation: "グローバルIPアドレスはインターネット上で重複しないように管理される。プライベートIPアドレスは組織や家庭の内部で利用する。"
  },
  {
    id: "add-20260802-private-ip-address",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "家庭や組織の内部ネットワークで自由に使え、同じ値が別の組織でも使われ得るアドレスはどれか。",
    answer: "プライベートIPアドレス",
    choices: ["グローバルIPアドレス", "MACアドレス", "マルチキャストアドレス", "プライベートIPアドレス"],
    explanation: "プライベートIPアドレスは内部ネットワーク用で、そのままでは通常インターネットへ直接経路制御されない。外部通信ではNATなどを使う。"
  },
  {
    id: "add-20260802-nat",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "内部ネットワーク用のアドレスとインターネット用のアドレスを変換し、端末が外部と通信できるようにする技術はどれか。",
    answer: "NAT",
    choices: ["NAT", "DHCP", "DNS", "VPN"],
    explanation: "NATはNetwork Address Translation（ネットワークアドレス変換）の略。内部のプライベートIPアドレスと外部のグローバルIPアドレスを変換する。"
  },
  {
    id: "add-20260802-dhcp",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "ネットワークへ接続した端末へ、利用するアドレスやゲートウェイなどの設定を自動配布するプロトコルはどれか。",
    answer: "DHCP",
    choices: ["DNS", "DHCP", "NAT", "SMTP"],
    explanation: "DHCPはDynamic Host Configuration Protocolの略。端末へIPアドレスなどの通信設定を自動的に割り当てる。NATはアドレスを変換する技術である。"
  },
  {
    id: "add-20260802-cc",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "電子メールで、主な宛先以外の関係者にも内容を共有し、その受信者のアドレスを全員に見える形で送る指定はどれか。",
    answer: "Cc",
    choices: ["To", "Bcc", "Cc", "Reply-To"],
    explanation: "CcはCarbon Copyの略。参考として送る相手を指定し、そのアドレスは他の受信者にも表示される。Bccは指定した宛先を他の受信者から隠す。"
  },
  {
    id: "add-20260802-bcc",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "電子メールで、指定した受信者のアドレスをほかの受信者に知らせずに同じ内容を送る指定はどれか。",
    answer: "Bcc",
    choices: ["To", "Cc", "Reply-To", "Bcc"],
    explanation: "BccはBlind Carbon Copyの略。Bcc欄の宛先はほかの受信者から見えない。Cc欄の宛先は表示される。"
  },
  {
    id: "add-20260802-rss",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "Webサイトの新着記事の見出しや要約を決まった形式で配信し、登録した利用者がまとめて確認できる仕組みはどれか。",
    answer: "RSS",
    choices: ["RSS", "Cookie", "SMTP", "MIME"],
    explanation: "RSSはReally Simple Syndicationの略として知られる、Webサイトの更新情報を配信する形式。RSSリーダーで新着情報をまとめて確認できる。"
  },
  {
    id: "add-20260802-cookie",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "Webサイトがログイン状態や設定などを識別するため、ブラウザ側へ保存させて次回の通信で送り返させる小さなデータはどれか。",
    answer: "Cookie",
    choices: ["キャッシュ", "Cookie", "セッションID", "RSS"],
    explanation: "CookieはWebサーバがブラウザへ保存を依頼する小さなデータ。状態の維持などに使うが、キャッシュのように表示データそのものを一時保存する仕組みではない。"
  },
  {
    id: "add-20260802-mvno",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "自社で携帯電話の無線設備を持たず、他社の回線を借りて独自の料金やブランドで通信サービスを提供する事業者はどれか。",
    answer: "MVNO",
    choices: ["MNO", "ISP", "MVNO", "ASP"],
    explanation: "MVNOはMobile Virtual Network Operator（仮想移動体通信事業者）の略。MNOの無線通信設備を借りてサービスを提供する。"
  },
  {
    id: "add-20260802-ftth",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "通信事業者の設備から利用者宅まで光ファイバを引き込み、高速な固定通信を提供する方式はどれか。",
    answer: "FTTH",
    choices: ["ADSL", "CATV", "PLC", "FTTH"],
    explanation: "FTTHはFiber To The Home（家庭までの光ファイバ）の略。光ファイバを利用者宅まで敷設する。"
  },
  {
    id: "add-20260802-voip",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "音声をデジタルデータに変換し、インターネット技術を使うネットワーク上で送受信する仕組みはどれか。",
    answer: "VoIP",
    choices: ["VoIP", "FTTH", "PLC", "NFC"],
    explanation: "VoIPはVoice over Internet Protocolの略。音声をIPパケットとして送る技術で、IP電話などに使われる。"
  },
  {
    id: "add-20260802-platinum-band",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "携帯電話で、比較的低い周波数のため建物の陰や屋内にも電波が届きやすいとされる周波数帯の通称はどれか。",
    answer: "プラチナバンド",
    choices: ["ミリ波", "プラチナバンド", "赤外線", "キャリアアグリゲーション"],
    explanation: "プラチナバンドは主に700～900MHz付近の周波数帯の通称。回折しやすく、障害物の影響を受けにくい特性がある。"
  },
  {
    id: "add-20260802-ble",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "センサーやビーコンなどで使われる、近距離向けで消費電力を抑えたBluetoothの通信方式はどれか。",
    answer: "BLE",
    choices: ["NFC", "LPWA", "BLE", "Wi-Fi"],
    explanation: "BLEはBluetooth Low Energyの略。近距離・低消費電力の通信に向き、センサーやウェアラブル端末などで使われる。"
  },
  {
    id: "add-20260802-lpwa",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "小さなセンサーデータを、低消費電力で長距離へ送るIoT用途に適した無線通信の総称はどれか。",
    answer: "LPWA",
    choices: ["BLE", "Wi-Fi", "NFC", "LPWA"],
    explanation: "LPWAはLow Power Wide Areaの略。低速・小容量の通信を低消費電力かつ広い範囲で行う用途に向く。"
  },
  {
    id: "add-20260802-multihop",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "無線センサー同士が中継役となり、データを複数の機器経由で目的地まで段階的に届ける方式はどれか。",
    answer: "マルチホップ",
    choices: ["マルチホップ", "ブロードキャスト", "ローミング", "ハンドオーバー"],
    explanation: "マルチホップは複数の中継点を順に経由して通信する方式。直接届かない距離を補い、メッシュ型のIoTネットワークなどで使われる。"
  },
  {
    id: "add-20260802-edge-computing",
    batchId: "addition-2026-08-02-ch13-15",
    category: "ネットワーク・通信",
    question: "IoT機器が生むデータを遠隔のクラウドだけに送らず、機器や利用場所に近い側で処理して遅延や通信量を減らす考え方はどれか。",
    answer: "エッジコンピューティング",
    choices: ["クラウドコンピューティング", "エッジコンピューティング", "グリッドコンピューティング", "バッチ処理"],
    explanation: "エッジコンピューティングはデータ発生源の近くで処理する方式。クラウドへの通信量や応答遅延を減らせる。"
  },
  {
    id: "add-20260802-cracking",
    batchId: "addition-2026-08-02-ch13-15",
    category: "脅威・攻撃・マルウェア",
    question: "悪意を持って他人のコンピュータへ侵入したり、データの破壊や改ざんを行ったりする行為はどれか。",
    answer: "クラッキング",
    choices: ["クラッキング", "デバッグ", "ペネトレーションテスト", "ベンチマーク"],
    explanation: "クラッキングは悪意ある不正侵入や破壊・改ざんなどの行為。許可を得て弱点を調べるペネトレーションテストとは異なる。"
  },
  {
    id: "add-20260802-social-engineering",
    batchId: "addition-2026-08-02-ch13-15",
    category: "脅威・攻撃・マルウェア",
    question: "システムの技術的な弱点ではなく、人の心理的な隙や行動を利用して秘密情報を入手する手口の総称はどれか。",
    answer: "ソーシャルエンジニアリング",
    choices: ["フィッシング", "ソーシャルエンジニアリング", "バッファオーバーフロー攻撃", "DoS攻撃"],
    explanation: "ソーシャルエンジニアリングは、人をだます、のぞき見る、捨てた資料を探るなどして情報を得る手口の総称。"
  },
  {
    id: "add-20260802-shoulder-hacking",
    batchId: "addition-2026-08-02-ch13-15",
    category: "脅威・攻撃・マルウェア",
    question: "利用者の背後などから画面やキー入力を盗み見て、暗証番号やパスワードを得る手口はどれか。",
    answer: "ショルダーハッキング",
    choices: ["トラッシング", "盗聴", "ショルダーハッキング", "スパイウェア"],
    explanation: "ショルダーハッキングは肩越しなどに画面や手元を盗み見る手口。トラッシングは廃棄物から情報を探す手口である。"
  },
  {
    id: "add-20260802-trashing",
    batchId: "addition-2026-08-02-ch13-15",
    category: "脅威・攻撃・マルウェア",
    question: "ごみ箱に捨てられた書類や記憶媒体を調べ、機密情報や認証情報を入手する手口はどれか。",
    answer: "トラッシング",
    choices: ["ショルダーハッキング", "フィッシング", "スキミング", "トラッシング"],
    explanation: "トラッシングは廃棄物から情報を不正に得る手口。書類の裁断や記憶媒体の適切な消去が対策となる。"
  },
  {
    id: "add-20260802-dark-web",
    batchId: "addition-2026-08-02-ch13-15",
    category: "脅威・攻撃・マルウェア",
    question: "一般の検索エンジンでは見つけにくく、専用ソフトなど特別な方法で接続する匿名性の高いWeb領域はどれか。",
    answer: "ダークウェブ",
    choices: ["ダークウェブ", "イントラネット", "ディープリンク", "ポータルサイト"],
    explanation: "ダークウェブは一般的な検索エンジンに現れず、特別な接続手段を必要とするWeb領域。違法な情報取引などに悪用されることがある。"
  },
  {
    id: "add-20260802-malware",
    batchId: "addition-2026-08-02-ch13-15",
    category: "脅威・攻撃・マルウェア",
    question: "コンピュータや利用者へ害を与える目的で作られた、ウイルス・ワーム・スパイウェアなどの悪意あるソフトウェアの総称はどれか。",
    answer: "マルウェア",
    choices: ["ファームウェア", "マルウェア", "ミドルウェア", "シェアウェア"],
    explanation: "マルウェアはmalicious softwareに由来する総称。ウイルス、ワーム、トロイの木馬、スパイウェアなどを含む。"
  },
  {
    id: "add-20260802-trojan-horse",
    batchId: "addition-2026-08-02-ch13-15",
    category: "脅威・攻撃・マルウェア",
    question: "便利なソフトなどを装って利用者に実行させ、内部で情報窃取や不正操作を行う悪意あるプログラムはどれか。",
    answer: "トロイの木馬",
    choices: ["ワーム", "ランサムウェア", "トロイの木馬", "アドウェア"],
    explanation: "トロイの木馬は有用なプログラムを装って侵入し、実行後に悪意ある動作をする。自ら複製して広がるワームとは性質が異なる。"
  },
  {
    id: "add-20260802-rat",
    batchId: "addition-2026-08-02-ch13-15",
    category: "脅威・攻撃・マルウェア",
    question: "感染した端末を攻撃者が遠隔操作し、ファイル取得やカメラ操作などを行えるようにする不正プログラムはどれか。",
    answer: "RAT",
    choices: ["RAT", "WAF", "IDS", "Cookie"],
    explanation: "RATはRemote Access Trojanの略。端末へ潜伏し、攻撃者による遠隔操作を可能にする種類のマルウェアである。"
  },
  {
    id: "add-20260802-backdoor",
    batchId: "addition-2026-08-02-ch13-15",
    category: "脅威・攻撃・マルウェア",
    question: "正規の認証や手順を通らずにシステムへ再侵入できるよう、攻撃者がひそかに設ける入口はどれか。",
    answer: "バックドア",
    choices: ["ゼロデイ攻撃", "バックドア", "ファイアウォール", "サンドボックス"],
    explanation: "バックドアは正規のアクセス制御を回避する秘密の入口。RATなどのマルウェアによって作られる場合もある。"
  },
  {
    id: "add-20260802-autorun",
    batchId: "addition-2026-08-02-ch13-15",
    category: "脅威・攻撃・マルウェア",
    question: "USBメモリなどを接続した際に、媒体内の指定プログラムを自動的に起動する仕組みはどれか。",
    answer: "オートラン",
    choices: ["プラグアンドプレイ", "自動更新", "オートラン", "セキュアブート"],
    explanation: "オートランは外部媒体などの接続時にプログラムを自動実行する仕組み。利便性がある一方、マルウェア拡散に悪用されることがある。"
  },
  {
    id: "add-20260802-dos-attack",
    batchId: "addition-2026-08-02-ch13-15",
    category: "脅威・攻撃・マルウェア",
    question: "一台の攻撃元から大量の要求を送り付けるなどしてサーバの資源を使い切らせ、正規利用者へサービスを提供できなくする攻撃はどれか。",
    answer: "DoS攻撃",
    choices: ["SQLインジェクション", "DDoS攻撃", "ゼロデイ攻撃", "DoS攻撃"],
    explanation: "DoS攻撃はDenial of Service（サービス妨害）攻撃の略。多数の端末から分散して行うものはDDoS攻撃と呼ぶ。"
  },
  {
    id: "add-20260802-zero-day-attack",
    batchId: "addition-2026-08-02-ch13-15",
    category: "脅威・攻撃・マルウェア",
    question: "脆弱性が発見されてから修正プログラムが提供されるまでの対策が整っていない時期を狙う攻撃はどれか。",
    answer: "ゼロデイ攻撃",
    choices: ["ゼロデイ攻撃", "DoS攻撃", "総当たり攻撃", "中間者攻撃"],
    explanation: "ゼロデイ攻撃は、脆弱性への修正が提供される前など、防御が難しい段階を狙う攻撃。既知の脆弱性だけを指すものではない。"
  },
  {
    id: "add-20260802-xss",
    batchId: "addition-2026-08-02-ch13-15",
    category: "脅威・攻撃・マルウェア",
    question: "掲示板などへ悪意あるスクリプトを埋め込み、そのページを見た利用者のブラウザで実行させる攻撃はどれか。",
    answer: "クロスサイトスクリプティング",
    choices: ["SQLインジェクション", "クロスサイトスクリプティング", "バッファオーバーフロー攻撃", "ディレクトリトラバーサル"],
    explanation: "クロスサイトスクリプティングは、Webページへ不正なスクリプトを混入させ利用者のブラウザで実行させる。SQLインジェクションはDBへの命令を不正に組み立てる攻撃である。"
  },
  {
    id: "add-20260802-buffer-overflow",
    batchId: "addition-2026-08-02-ch13-15",
    category: "脅威・攻撃・マルウェア",
    question: "プログラムが確保した記憶領域を超えるデータを送り、隣接領域を書き換えて異常動作や不正コード実行を狙う攻撃はどれか。",
    answer: "バッファオーバーフロー攻撃",
    choices: ["クロスサイトスクリプティング", "DoS攻撃", "バッファオーバーフロー攻撃", "フィッシング"],
    explanation: "バッファオーバーフロー攻撃は、入力領域の境界を越えてメモリを書き換える脆弱性を悪用する。Webページ上のスクリプトを悪用する攻撃とは異なる。"
  },
  {
    id: "add-20260802-spyware",
    batchId: "addition-2026-08-02-ch13-15",
    category: "脅威・攻撃・マルウェア",
    question: "利用者に気付かれないよう操作履歴や個人情報などを収集し、外部へ送信するソフトウェアはどれか。",
    answer: "スパイウェア",
    choices: ["アドウェア", "ランサムウェア", "キーロガー", "スパイウェア"],
    explanation: "スパイウェアは利用者の情報や行動をひそかに収集するマルウェア。キーロガーはキー入力を記録する仕組みで、スパイウェアの機能として使われることがある。"
  },
  {
    id: "add-20260802-risk-process",
    batchId: "addition-2026-08-02-ch13-15",
    category: "リスク管理・情報セキュリティ",
    question: "情報セキュリティのリスクマネジメントを進めるときの、最初から最後までの正しい順序はどれか。",
    answer: "リスク特定→リスク分析→リスク評価→リスク対応",
    choices: ["リスク特定→リスク分析→リスク評価→リスク対応", "リスク分析→リスク特定→リスク対応→リスク評価", "リスク評価→リスク特定→リスク分析→リスク対応", "リスク対応→リスク分析→リスク特定→リスク評価"],
    explanation: "まずリスクを特定し、発生可能性と影響を分析し、基準に照らして評価した後、適切な対応を選ぶ。特定・分析・評価をまとめてリスクアセスメントという。"
  },
  {
    id: "add-20260802-risk-avoidance",
    batchId: "addition-2026-08-02-ch13-15",
    category: "リスク管理・情報セキュリティ",
    question: "危険性が高い新サービスの提供そのものを中止し、原因となる活動を行わないようにする対応はどれか。",
    answer: "リスク回避",
    choices: ["リスク低減", "リスク回避", "リスク共有", "リスク保有"],
    explanation: "リスク回避は、原因となる活動をやめてリスクをなくす対応。対策で発生確率や影響を下げるのはリスク低減である。"
  },
  {
    id: "add-20260802-risk-reduction",
    batchId: "addition-2026-08-02-ch13-15",
    category: "リスク管理・情報セキュリティ",
    question: "アクセス制御やバックアップを導入し、事故の発生可能性または被害の大きさを小さくする対応はどれか。",
    answer: "リスク低減",
    choices: ["リスク回避", "リスク共有", "リスク低減", "リスク保有"],
    explanation: "リスク低減は管理策によって発生可能性や影響を下げる対応。活動を中止する回避、保険などで分担する共有とは異なる。"
  },
  {
    id: "add-20260802-risk-sharing",
    batchId: "addition-2026-08-02-ch13-15",
    category: "リスク管理・情報セキュリティ",
    question: "サイバー保険への加入や契約による責任分担によって、損失の負担を他者と分ける対応はどれか。",
    answer: "リスク共有",
    choices: ["リスク回避", "リスク低減", "リスク保有", "リスク共有"],
    explanation: "リスク共有は、保険や契約、分散などでリスクを他者と分担する対応。単に何もせず受け入れるリスク保有とは異なる。"
  },
  {
    id: "add-20260802-risk-retention",
    batchId: "addition-2026-08-02-ch13-15",
    category: "リスク管理・情報セキュリティ",
    question: "対策費用と想定損失を比較した結果、小さな損失の可能性を理解したうえで自組織が受け入れる対応はどれか。",
    answer: "リスク保有",
    choices: ["リスク保有", "リスク回避", "リスク低減", "リスク共有"],
    explanation: "リスク保有は、判断したうえでリスクを自ら受け入れる対応。残留リスクを受容する場合などが該当する。"
  },
  {
    id: "add-20260802-isms",
    batchId: "addition-2026-08-02-ch13-15",
    category: "リスク管理・情報セキュリティ",
    question: "組織が情報セキュリティ方針を定め、リスクに応じた管理策を運用し、継続的に改善する仕組みはどれか。",
    answer: "ISMS",
    choices: ["BCMS", "ISMS", "SLM", "ITIL"],
    explanation: "ISMSはInformation Security Management System（情報セキュリティマネジメントシステム）の略。方針・リスク対応・運用・改善を組織的に行う。"
  },
  {
    id: "add-20260802-security-policy",
    batchId: "addition-2026-08-02-ch13-15",
    category: "リスク管理・情報セキュリティ",
    question: "組織が情報資産を守るための基本方針、対策基準、実施手順などを体系的に定めた規程はどれか。",
    answer: "情報セキュリティポリシー",
    choices: ["プライバシーポリシー", "事業継続計画", "情報セキュリティポリシー", "サービスレベル合意書"],
    explanation: "情報セキュリティポリシーは、組織の情報セキュリティに関する方針やルールを体系化したもの。個人情報だけでなく情報資産全体を対象とする。"
  },
  {
    id: "add-20260802-confidentiality",
    batchId: "addition-2026-08-02-ch13-15",
    category: "リスク管理・情報セキュリティ",
    question: "許可された人だけが情報へアクセスでき、権限のない人には開示されない性質はどれか。",
    answer: "機密性",
    choices: ["真正性", "完全性", "可用性", "機密性"],
    explanation: "機密性は認可された人だけが情報へアクセスできる性質。完全性は正確さ、可用性は必要なときに利用できる性質で、三つをCIAという。"
  },
  {
    id: "add-20260802-integrity",
    batchId: "addition-2026-08-02-ch13-15",
    category: "リスク管理・情報セキュリティ",
    question: "情報が正確で完全な状態に保たれ、許可なく改ざんや削除をされていない性質はどれか。",
    answer: "完全性",
    choices: ["完全性", "機密性", "可用性", "真正性"],
    explanation: "完全性は情報の正確さと完全さが保たれる性質。機密性は秘密を守ること、可用性は必要時に使えることである。"
  },
  {
    id: "add-20260802-availability",
    batchId: "addition-2026-08-02-ch13-15",
    category: "リスク管理・情報セキュリティ",
    question: "許可された利用者が必要なときに、情報やシステムを支障なく利用できる性質はどれか。",
    answer: "可用性",
    choices: ["機密性", "可用性", "完全性", "責任追跡性"],
    explanation: "可用性は必要なときに情報やシステムを利用できる性質。冗長化やバックアップ、障害対策が向上に役立つ。"
  },
  {
    id: "add-20260802-symmetric-key-cryptography",
    batchId: "addition-2026-08-02-ch13-15",
    category: "暗号・認証・セキュリティ対策",
    question: "暗号化と復号に同じ秘密の鍵を使い、事前に通信相手と安全に鍵を共有する必要がある方式はどれか。",
    answer: "共通鍵暗号方式",
    choices: ["公開鍵暗号方式", "ハッシュ関数", "共通鍵暗号方式", "デジタル署名"],
    explanation: "共通鍵暗号方式は暗号化と復号に同じ鍵を使う。高速だが鍵配送が課題。公開鍵暗号方式は異なる鍵の組を使う。"
  },
  {
    id: "add-20260802-plaintext",
    batchId: "addition-2026-08-02-ch13-15",
    category: "暗号・認証・セキュリティ対策",
    question: "暗号化される前、または復号された後の、人が内容を読める元のデータはどれか。",
    answer: "平文",
    choices: ["暗号文", "ハッシュ値", "署名値", "平文"],
    explanation: "平文は暗号化前の元データ。暗号化によって内容を読みにくくしたものが暗号文である。"
  },
  {
    id: "add-20260802-ca",
    batchId: "addition-2026-08-02-ch13-15",
    category: "暗号・認証・セキュリティ対策",
    question: "公開鍵証明書を発行し、その公開鍵が申請者本人や正しい組織のものだと保証する機関はどれか。",
    answer: "CA",
    choices: ["CA", "CSIRT", "ISP", "WAF"],
    explanation: "CAはCertification Authority（認証局）の略。本人確認を行い、公開鍵と所有者を結び付けるデジタル証明書を発行する。"
  },
  {
    id: "add-20260802-pki",
    batchId: "addition-2026-08-02-ch13-15",
    category: "暗号・認証・セキュリティ対策",
    question: "認証局、公開鍵証明書、失効情報などを用いて、公開鍵の信頼性を社会的に支える仕組みはどれか。",
    answer: "PKI",
    choices: ["SSL/TLS", "PKI", "VPN", "ISMS"],
    explanation: "PKIはPublic Key Infrastructure（公開鍵基盤）の略。CAやデジタル証明書などを用いて公開鍵を信頼できる形で運用する。"
  },
  {
    id: "add-20260802-biometric-authentication",
    batchId: "addition-2026-08-02-ch13-15",
    category: "暗号・認証・セキュリティ対策",
    question: "指紋、顔、虹彩、静脈、声紋など、人の身体的・行動的特徴を使って本人を確認する方式はどれか。",
    answer: "バイオメトリクス認証",
    choices: ["知識認証", "所有物認証", "バイオメトリクス認証", "リスクベース認証"],
    explanation: "バイオメトリクス認証は生体認証ともいい、人固有の特徴で本人確認する。パスワードは知識、ICカードは所有物による認証である。"
  },
  {
    id: "add-20260802-waf",
    batchId: "addition-2026-08-02-ch13-15",
    category: "暗号・認証・セキュリティ対策",
    question: "WebアプリケーションへのHTTP通信内容を検査し、SQLインジェクションなどの攻撃を防ぐ仕組みはどれか。",
    answer: "WAF",
    choices: ["ファイアウォール", "IDS", "IPS", "WAF"],
    explanation: "WAFはWeb Application Firewallの略で、Webアプリへの通信内容を検査する。通常のファイアウォールは主にIPアドレスやポートなどで通信を制御する。"
  },
  {
    id: "add-20260802-ssl-tls",
    batchId: "addition-2026-08-02-ch13-15",
    category: "暗号・認証・セキュリティ対策",
    question: "Web通信などで、相手の認証と通信内容の暗号化、改ざん検知に利用されるプロトコルはどれか。",
    answer: "SSL/TLS",
    choices: ["SSL/TLS", "SMTP", "DNS", "DHCP"],
    explanation: "SSL/TLSはSecure Sockets Layer／Transport Layer Securityの略。現在は後継のTLSが中心で、HTTPSなどの安全な通信に使われる。"
  },
  {
    id: "add-20260802-wpa2",
    batchId: "addition-2026-08-02-ch13-15",
    category: "暗号・認証・セキュリティ対策",
    question: "無線ネットワークの通信を暗号化して保護する規格で、WEPより強固な方式はどれか。",
    answer: "WPA2",
    choices: ["WEP", "WPA2", "ESSIDステルス", "MACアドレスフィルタリング"],
    explanation: "WPA2はWi-Fi Protected Access 2の略で、無線LANを暗号化する規格。ネットワーク名を隠す設定だけより強い保護を提供する。"
  },
  {
    id: "add-20260802-two-factor-authentication",
    batchId: "addition-2026-08-02-ch13-15",
    category: "暗号・認証・セキュリティ対策",
    question: "パスワードとスマートフォンのように、知識・所有物・生体情報のうち異なる二種類の要素を組み合わせる認証はどれか。",
    answer: "2要素認証",
    choices: ["二段階認証", "シングルサインオン", "2要素認証", "パスワードレス認証"],
    explanation: "2要素認証は異なる二種類の認証要素を使う。同じ種類の確認を二回行う二段階認証とは、必ずしも同じ意味ではない。"
  },
  {
    id: "add-20260802-ids",
    batchId: "addition-2026-08-02-ch13-15",
    category: "暗号・認証・セキュリティ対策",
    question: "ネットワークや端末を監視し、不正な通信や侵入の兆候を見つけて管理者へ通知するシステムはどれか。",
    answer: "IDS",
    choices: ["IPS", "WAF", "ファイアウォール", "IDS"],
    explanation: "IDSはIntrusion Detection System（侵入検知システム）の略で、攻撃を検知して通知する。IPSは検知に加えて通信の遮断も行う。"
  },
  {
    id: "add-20260802-ips",
    batchId: "addition-2026-08-02-ch13-15",
    category: "暗号・認証・セキュリティ対策",
    question: "不正な通信や侵入の兆候を検知し、その通信を自動的に遮断して被害を防ぐシステムはどれか。",
    answer: "IPS",
    choices: ["IPS", "IDS", "WAF", "SIEM"],
    explanation: "IPSはIntrusion Prevention System（侵入防止システム）の略。IDSの検知・通知に対し、IPSは通信を遮断する防止機能を持つ。"
  },
  {
    id: "add-20260802-dmz",
    batchId: "addition-2026-08-02-ch13-15",
    category: "暗号・認証・セキュリティ対策",
    question: "公開Webサーバなどを置くため、インターネットと社内ネットワークの間に設けて双方から分離する中間領域はどれか。",
    answer: "DMZ",
    choices: ["VPN", "DMZ", "VLAN", "SAN"],
    explanation: "DMZはDeMilitarized Zone（非武装地帯）の略。公開サーバを社内ネットワークから隔離し、侵入時の影響を抑える。"
  },
  {
    id: "add-20260802-https",
    batchId: "addition-2026-08-02-ch13-15",
    category: "暗号・認証・セキュリティ対策",
    question: "Webブラウザとサーバの通信をTLSで暗号化し、URLが通常「https://」で始まるプロトコルはどれか。",
    answer: "HTTPS",
    choices: ["HTTP", "FTPS", "HTTPS", "SSH"],
    explanation: "HTTPSはHypertext Transfer Protocol Secureの略で、HTTP通信をTLSで保護する。盗聴や改ざん、なりすましへの対策に役立つ。"
  },
  {
    id: "add-20260802-vpn",
    batchId: "addition-2026-08-02-ch13-15",
    category: "暗号・認証・セキュリティ対策",
    question: "公衆ネットワーク上に暗号化された仮想的な専用経路を作り、離れた拠点や端末を安全に接続する技術はどれか。",
    answer: "VPN",
    choices: ["WAN", "VLAN", "DMZ", "VPN"],
    explanation: "VPNはVirtual Private Network（仮想私設網）の略。インターネットなどを使いながら、暗号化されたトンネルで安全な通信経路を作る。"
  },
  {
    id: "add-20260802-penetration-test",
    batchId: "addition-2026-08-02-ch13-15",
    category: "暗号・認証・セキュリティ対策",
    question: "組織の許可の下で実際の攻撃手法を試し、システムへ侵入できる弱点がないか確認するテストはどれか。",
    answer: "ペネトレーションテスト",
    choices: ["ペネトレーションテスト", "単体テスト", "運用テスト", "負荷テスト"],
    explanation: "ペネトレーションテストは侵入テストともいい、許可された範囲で攻撃を模擬して脆弱性や侵入経路を確かめる。悪意あるクラッキングとは異なる。"
  },
  {
    id: "add-20260802-single-sign-on",
    batchId: "addition-2026-08-02-ch13-15",
    category: "暗号・認証・セキュリティ対策",
    question: "一度の利用者認証で、連携する複数のシステムやサービスを利用できるようにする仕組みはどれか。",
    answer: "シングルサインオン",
    choices: ["多要素認証", "シングルサインオン", "ワンタイムパスワード", "アクセス制御"],
    explanation: "シングルサインオンは一回の認証で複数サービスを利用できる仕組み。認証回数を減らすもので、認証要素を増やす多要素認証とは別の考え方である。"
  },
  {
    id: "add-20260802-security-by-design",
    batchId: "addition-2026-08-02-ch13-15",
    category: "暗号・認証・セキュリティ対策",
    question: "システムの企画・設計段階から安全性を要件へ組み込み、開発と運用の全体で対策する考え方はどれか。",
    answer: "セキュリティバイデザイン",
    choices: ["プライバシーバイデザイン", "フェールセーフ", "セキュリティバイデザイン", "フールプルーフ"],
    explanation: "セキュリティバイデザインは、後付けではなく企画・設計の初期段階から安全性を作り込む考え方。"
  },
  {
    id: "add-20260802-secure-boot",
    batchId: "addition-2026-08-02-ch13-15",
    category: "暗号・認証・セキュリティ対策",
    question: "コンピュータ起動時に読み込むソフトウェアの署名を検証し、信頼できないプログラムの実行を防ぐ仕組みはどれか。",
    answer: "セキュアブート",
    choices: ["BIOS更新", "オートラン", "TPM", "セキュアブート"],
    explanation: "セキュアブートは起動時のソフトウェアが正しく署名されているかを確認し、不正なブートローダなどの実行を防ぐ。"
  },
  {
    id: "add-20260802-blockchain",
    batchId: "addition-2026-08-02-ch13-15",
    category: "暗号・認証・セキュリティ対策",
    question: "取引記録をまとめたブロックを暗号技術で鎖のようにつなぎ、多数の参加者で共有して改ざんを難しくする仕組みはどれか。",
    answer: "ブロックチェーン",
    choices: ["データウェアハウス", "分散処理", "公開鍵基盤", "ブロックチェーン"],
    explanation: "ブロックチェーンは、記録のまとまりを前の記録と暗号学的に結び付け、分散して共有する台帳技術。変更の検出と耐改ざん性を高める。"
  },
  {
    id: "add-20260802-clear-screen",
    batchId: "addition-2026-08-02-ch13-15",
    category: "暗号・認証・セキュリティ対策",
    question: "離席時に画面をロックし、機密情報を表示したままにしないよう徹底する物理的・人的な対策はどれか。",
    answer: "クリアスクリーン",
    choices: ["クリアデスク", "スクリーンセーバー", "覗き見防止フィルタ", "クリアスクリーン"],
    explanation: "クリアスクリーンは離席時に画面をロックし、表示情報を他人に見られないようにする。クリアデスクは机上へ機密資料を放置しない対策である。"
  },
  {
    id: "add-20260802-anti-passback",
    batchId: "addition-2026-08-02-ch13-15",
    category: "暗号・認証・セキュリティ対策",
    question: "入室記録のある人でなければ退室できないなど、入退室の順序を照合して一枚のICカードの使い回しを防ぐ仕組みはどれか。",
    answer: "アンチパスバック",
    choices: ["インターロック", "共連れ防止", "アンチパスバック", "シングルサインオン"],
    explanation: "アンチパスバックは入室と退室の履歴を対応させ、同じ認証媒体を複数人が使い回す不正を防ぐ。二つの扉を同時に開けないインターロックとは異なる。"
  }
];
