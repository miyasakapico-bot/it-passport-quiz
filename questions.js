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
  }
];
