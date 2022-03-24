var documenterSearchIndex = {"docs":
[{"location":"bot/#Twitter-Bot","page":"Twitter Bot","title":"Twitter Bot","text":"","category":"section"},{"location":"bot/","page":"Twitter Bot","title":"Twitter Bot","text":"GAS (Google Apps Script)、Twitter API、IFTTT を組み合わせて、3Dモデリングのお題出題botを作りました。2019年8月19日から運営を始め、現在1700人ほどフォロワーがいます。後述するお題生成以外は全て自動化しています。","category":"page"},{"location":"bot/","page":"Twitter Bot","title":"Twitter Bot","text":"<blockquote class=\"twitter-tweet\" data-theme=\"dark\"><p lang=\"ja\" dir=\"ltr\">本日のお題は「ビー玉」です。<br>投稿の際は <a href=\"https://twitter.com/hashtag/%E6%B7%B1%E5%A4%9C%E3%81%AE%E3%83%A2%E3%83%87%E3%83%AA%E3%83%B3%E3%82%B060%E5%88%86%E4%B8%80%E6%9C%AC%E5%8B%9D%E8%B2%A0?src=hash&amp;ref_src=twsrc%5Etfw\">#深夜のモデリング60分一本勝負</a> のハッシュタグをつけていただけると幸いです。</p>&mdash; 深夜の真剣モデリング60分一本勝負 (@1hourmodelling) <a href=\"https://twitter.com/1hourmodelling/status/1498279130105847808?ref_src=twsrc%5Etfw\">February 28, 2022</a></blockquote> <script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>","category":"page"},{"location":"bot/#ツイートの自動化","page":"Twitter Bot","title":"ツイートの自動化","text":"","category":"section"},{"location":"bot/","page":"Twitter Bot","title":"Twitter Bot","text":"GAS のトリガーと Twitter API を使って、毎日以下のツイートを自動でツイートしています。","category":"page"},{"location":"bot/","page":"Twitter Bot","title":"Twitter Bot","text":"21:50 お題発表ツイート\n22:00 モデリング開始ツイート\n23:00 モデリング終了ツイート","category":"page"},{"location":"bot/#作品リツイートの自動化","page":"Twitter Bot","title":"作品リツイートの自動化","text":"","category":"section"},{"location":"bot/","page":"Twitter Bot","title":"Twitter Bot","text":"#深夜のモデリング60分一本勝負 に投稿された作品を30分置きに自動リツイートしています。処理の流れは以下のようになっています。","category":"page"},{"location":"bot/","page":"Twitter Bot","title":"Twitter Bot","text":"IFTTT でツイートの検索\nGoogleスプレッドシートに該当ツイートを追加\n追加されたツイートを Twitter API を使ってリツイート","category":"page"},{"location":"bot/","page":"Twitter Bot","title":"Twitter Bot","text":"<img src=\"../images/IFTTT.png\" width=\"500\">","category":"page"},{"location":"bot/#過去のお題","page":"Twitter Bot","title":"過去のお題","text":"","category":"section"},{"location":"bot/","page":"Twitter Bot","title":"Twitter Bot","text":"過去に出題したお題を簡単に確認できるように、毎日のお題を GAS を使ってスプレッドシートに追加しています。また、リツイート数をカウントすることで、投稿作品数の統計も取っています。","category":"page"},{"location":"bot/","page":"Twitter Bot","title":"Twitter Bot","text":"<img src=\"../images/Spreadsheet.png\" width=\"300\">","category":"page"},{"location":"bot/","page":"Twitter Bot","title":"Twitter Bot","text":"過去のお題用スプレッドシートへのリンク","category":"page"},{"location":"bot/#お題の生成","page":"Twitter Bot","title":"お題の生成","text":"","category":"section"},{"location":"bot/","page":"Twitter Bot","title":"Twitter Bot","text":"お題は募集形式を取っています。お題用スプレッドシートを作成し、全体公開にすることで、誰でも自由に入力出来るようになっています。お題は入力された中からランダムに選ばれるため、お題がツイートされるまでその日のお題は分かりません。","category":"page"},{"location":"bot/","page":"Twitter Bot","title":"Twitter Bot","text":"お題用スプレッドシートへのリンク","category":"page"},{"location":"bot/#追記","page":"Twitter Bot","title":"追記","text":"","category":"section"},{"location":"bot/","page":"Twitter Bot","title":"Twitter Bot","text":"Twitterにおける自動化に関するルールは以下のページに書いてあります。","category":"page"},{"location":"bot/","page":"Twitter Bot","title":"Twitter Bot","text":"ツイッターヘルプセンター 自動化ルール","category":"page"},{"location":"GameEngine_Physics/#ゲームエンジン開発：物理エンジン編","page":"ゲームエンジン開発：物理エンジン編","title":"ゲームエンジン開発：物理エンジン編","text":"","category":"section"},{"location":"GameEngine_Physics/#Colliderと物理演算の実装","page":"ゲームエンジン開発：物理エンジン編","title":"Colliderと物理演算の実装","text":"","category":"section"},{"location":"GameEngine_Physics/","page":"ゲームエンジン開発：物理エンジン編","title":"ゲームエンジン開発：物理エンジン編","text":"簡単なSphere ColliderとPlane Colliderによる衝突判定と物理演算を実装してみました。GUIからは、以下のパラメータを調整することができます。","category":"page"},{"location":"GameEngine_Physics/","page":"ゲームエンジン開発：物理エンジン編","title":"ゲームエンジン開発：物理エンジン編","text":"Velocity：速度\nForce：物体にかかる力\nMass：質量\nRestitution：反発係数\nDynamic Friction：動摩擦係数\nStatic Friction：静止摩擦係数\nIs Gravity：重力の影響を受けるか\nIs Kinematic：物理演算の影響を受けるか","category":"page"},{"location":"GameEngine_Physics/","page":"ゲームエンジン開発：物理エンジン編","title":"ゲームエンジン開発：物理エンジン編","text":"<img src=\"../images/Physics.png\" width=\"500\">","category":"page"},{"location":"GameEngine_Physics/#Youtubeデモ動画","page":"ゲームエンジン開発：物理エンジン編","title":"Youtubeデモ動画","text":"","category":"section"},{"location":"GameEngine_Physics/","page":"ゲームエンジン開発：物理エンジン編","title":"ゲームエンジン開発：物理エンジン編","text":"大量の球体を出現させるデモ動画です。Core i5-6300U + Intel HD Graphics 520のノートPCで録画しながら動かしていますが、今のところ処理速度は問題なさそうです。","category":"page"},{"location":"GameEngine_Physics/","page":"ゲームエンジン開発：物理エンジン編","title":"ゲームエンジン開発：物理エンジン編","text":"<iframe style=\"width:560px;height:315px\" src=\"https://www.youtube.com/embed/IUYqTApizuk\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>","category":"page"},{"location":"GameEngine_Physics/","page":"ゲームエンジン開発：物理エンジン編","title":"ゲームエンジン開発：物理エンジン編","text":"次は、凸形状の立体の衝突判定を行うために、GJKアルゴリズムを実装しようと考えています。","category":"page"},{"location":"WebSite/#Webサイト作成","page":"Webサイト作成","title":"Webサイト作成","text":"","category":"section"},{"location":"WebSite/","page":"Webサイト作成","title":"Webサイト作成","text":"本Webサイトは Julia のパッケージ Documenter.jl を使って作成しています。Documenter.jl とは、Julia 用のドキュメント生成ツールです。Markdown ファイルから本サイトのような HTMLベースのページを生成してくれます。LaTeXの表現形式にも対応しているため、簡単に数式混じりの文章を作成することができます。","category":"page"},{"location":"WebSite/","page":"Webサイト作成","title":"Webサイト作成","text":"<img src=\"../images/homepage.png\" width=\"500\">","category":"page"},{"location":"GameEngine_Overview/#ゲームエンジン開発：概要","page":"ゲームエンジン開発：概要","title":"ゲームエンジン開発：概要","text":"","category":"section"},{"location":"GameEngine_Overview/","page":"ゲームエンジン開発：概要","title":"ゲームエンジン開発：概要","text":"自作のゲームエンジン開発に挑戦しています。2023年の1月末から開発を始めました。ソースコードはGitHubにあります。","category":"page"},{"location":"GameEngine_Overview/#開発環境","page":"ゲームエンジン開発：概要","title":"開発環境","text":"","category":"section"},{"location":"GameEngine_Overview/","page":"ゲームエンジン開発：概要","title":"ゲームエンジン開発：概要","text":"使用言語やライブラリは以下の通りです。","category":"page"},{"location":"GameEngine_Overview/","page":"ゲームエンジン開発：概要","title":"ゲームエンジン開発：概要","text":"C++ 14\nOpenGL\nGLFW\nGLAD\nGLM\nDear ImGui\nAssimp","category":"page"},{"location":"GameEngine_Overview/#現在の進捗","page":"ゲームエンジン開発：概要","title":"現在の進捗","text":"","category":"section"},{"location":"GameEngine_Overview/","page":"ゲームエンジン開発：概要","title":"ゲームエンジン開発：概要","text":"エンジンのベース部分\n描画システム\n物理エンジン","category":"page"},{"location":"GameEngine_Overview/","page":"ゲームエンジン開発：概要","title":"ゲームエンジン開発：概要","text":"がそれぞれ完成（？）しています。まだまだ改善の余地はありますが、とりあえず人に見せられる程度には出来た気がします。それぞれのページで解説していますので、ぜひご覧ください。","category":"page"},{"location":"GameEngine_Overview/","page":"ゲームエンジン開発：概要","title":"ゲームエンジン開発：概要","text":"    Pages = [\r\n        \"GameEngine_ECS.md\",\r\n        \"GameEngine_PBR.md\",\r\n        \"GameEngine_Physics.md\",\r\n    ]\r\n    Depth = 2","category":"page"},{"location":"ArtGallery/#Art-Gallery","page":"Art Gallery","title":"Art Gallery","text":"","category":"section"},{"location":"ArtGallery/","page":"Art Gallery","title":"Art Gallery","text":"趣味で作った3Dアートの一部です。ソフトは主に Blender を使用しています。","category":"page"},{"location":"DeepLearning/#ディープラーニング","page":"ディープラーニング","title":"ディープラーニング","text":"","category":"section"},{"location":"DeepLearning/#画像分類","page":"ディープラーニング","title":"画像分類","text":"","category":"section"},{"location":"DeepLearning/#損失関数","page":"ディープラーニング","title":"損失関数","text":"","category":"section"},{"location":"DeepLearning/","page":"ディープラーニング","title":"ディープラーニング","text":"<img src=\"../images/ImageClassificationLoss.png\" width=\"500\">","category":"page"},{"location":"DeepLearning/#検出結果","page":"ディープラーニング","title":"検出結果","text":"","category":"section"},{"location":"DeepLearning/#物体検出","page":"ディープラーニング","title":"物体検出","text":"","category":"section"},{"location":"DeepLearning/","page":"ディープラーニング","title":"ディープラーニング","text":"Faster R-CNNによる「とまれ標識」の検出器を作ってみました。簡単な1クラス分類です。ライブラリはPyTorchを使用しました。","category":"page"},{"location":"DeepLearning/#損失関数-2","page":"ディープラーニング","title":"損失関数","text":"","category":"section"},{"location":"DeepLearning/","page":"ディープラーニング","title":"ディープラーニング","text":"<img src=\"../images/ObjectDetectionLoss.png\" width=\"500\">","category":"page"},{"location":"DeepLearning/#検出結果-2","page":"ディープラーニング","title":"検出結果","text":"","category":"section"},{"location":"DeepLearning/","page":"ディープラーニング","title":"ディープラーニング","text":"<img src=\"../images/ObjectDetection1.png\" width=\"500\">","category":"page"},{"location":"DeepLearning/","page":"ディープラーニング","title":"ディープラーニング","text":"<img src=\"../images/ObjectDetection2.png\" width=\"500\">","category":"page"},{"location":"DeepLearning/","page":"ディープラーニング","title":"ディープラーニング","text":"※このページの画像は全てPhotoAC様よりお借りしています。","category":"page"},{"location":"RoboCup/#ロボカップジュニア","page":"ロボカップジュニア","title":"ロボカップジュニア","text":"","category":"section"},{"location":"RoboCup/","page":"ロボカップジュニア","title":"ロボカップジュニア","text":"小学生～高校生の間、ロボカップジュニアのサッカーリーグに参加していました。自律型ロボットによる競技で、コントローラーを用いた操作などは禁止されているため、マイコンやプログラムの知識が必要です。ルールは、2台のロボットで構成される各チームが、相手のゴールにボールを入れて得点を競うというものです。","category":"page"},{"location":"RoboCup/#ロボットの構成","page":"ロボカップジュニア","title":"ロボットの構成","text":"","category":"section"},{"location":"RoboCup/","page":"ロボカップジュニア","title":"ロボカップジュニア","text":"下の画像は、高校生の時に出場した大会で提出したプレゼン資料です。","category":"page"},{"location":"RoboCup/","page":"ロボカップジュニア","title":"ロボカップジュニア","text":"<img src=\"../images/Robot.png\" width=\"800\">","category":"page"},{"location":"GameEngine_PBR/#ゲームエンジン開発：物理ベースレンダリング編","page":"ゲームエンジン開発：物理ベースレンダリング編","title":"ゲームエンジン開発：物理ベースレンダリング編","text":"","category":"section"},{"location":"GameEngine_PBR/","page":"ゲームエンジン開発：物理ベースレンダリング編","title":"ゲームエンジン開発：物理ベースレンダリング編","text":"ゲームエンジンでは、今のところ下記の手法によるレンダリングを実装しています。","category":"page"},{"location":"GameEngine_PBR/#物理ベースレンダリング","page":"ゲームエンジン開発：物理ベースレンダリング編","title":"物理ベースレンダリング","text":"","category":"section"},{"location":"GameEngine_PBR/","page":"ゲームエンジン開発：物理ベースレンダリング編","title":"ゲームエンジン開発：物理ベースレンダリング編","text":"物理ベースレンダリングとは物理法則に基づいた数式を使って、光の挙動をモデル化したレンダリング手法です。物理法則をベースとしているため、リアルな物体を描写できますが、その分計算量も多くなります。","category":"page"},{"location":"GameEngine_PBR/#IBL","page":"ゲームエンジン開発：物理ベースレンダリング編","title":"IBL","text":"","category":"section"},{"location":"GameEngine_PBR/","page":"ゲームエンジン開発：物理ベースレンダリング編","title":"ゲームエンジン開発：物理ベースレンダリング編","text":"物理ベースレンダリングしても必ずリアルな描写が得られるとは限りません。3DCGではライティング（光や照明の設定）も重要となってきます。IBL(Image-based Lighting)は、現実の風景画像を光源として使用する手法です。画像を用いることで現実世界に近いライティングを簡単に得ることができます。","category":"page"},{"location":"GameEngine_PBR/#Materialの設定","page":"ゲームエンジン開発：物理ベースレンダリング編","title":"Materialの設定","text":"","category":"section"},{"location":"GameEngine_PBR/","page":"ゲームエンジン開発：物理ベースレンダリング編","title":"ゲームエンジン開発：物理ベースレンダリング編","text":"物理ベースレンダリングでは基本的に以下のパラメータを調整してマテリアルを表現します。","category":"page"},{"location":"GameEngine_PBR/","page":"ゲームエンジン開発：物理ベースレンダリング編","title":"ゲームエンジン開発：物理ベースレンダリング編","text":"Albedo：物体の色\nMetallic：金属光沢\nRoughness：表面の粗さ","category":"page"},{"location":"GameEngine_PBR/","page":"ゲームエンジン開発：物理ベースレンダリング編","title":"ゲームエンジン開発：物理ベースレンダリング編","text":"これらのパラメータはGUIから調整することができます。","category":"page"},{"location":"GameEngine_PBR/","page":"ゲームエンジン開発：物理ベースレンダリング編","title":"ゲームエンジン開発：物理ベースレンダリング編","text":"<img src=\"../images/Physics.png\" width=\"500\">","category":"page"},{"location":"GameEngine_PBR/","page":"ゲームエンジン開発：物理ベースレンダリング編","title":"ゲームエンジン開発：物理ベースレンダリング編","text":"AO（アンビエントオクルージョン）は、テクスチャマテリアルの時に必要になるパラメータで、今回は使っていません。","category":"page"},{"location":"GameEngine_PBR/#Youtubeデモ動画","page":"ゲームエンジン開発：物理ベースレンダリング編","title":"Youtubeデモ動画","text":"","category":"section"},{"location":"GameEngine_PBR/","page":"ゲームエンジン開発：物理ベースレンダリング編","title":"ゲームエンジン開発：物理ベースレンダリング編","text":"<iframe style=\"width:560px;height:315px\" src=\"https://www.youtube.com/embed/KNrScQqfw7Q\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>","category":"page"},{"location":"GameEngine_PBR/#参考文献","page":"ゲームエンジン開発：物理ベースレンダリング編","title":"参考文献","text":"","category":"section"},{"location":"GameEngine_PBR/","page":"ゲームエンジン開発：物理ベースレンダリング編","title":"ゲームエンジン開発：物理ベースレンダリング編","text":"Real Shading in Unreal Engine 4","category":"page"},{"location":"GameEngine_PBR/","page":"ゲームエンジン開発：物理ベースレンダリング編","title":"ゲームエンジン開発：物理ベースレンダリング編","text":"Learn OpenGL PBR","category":"page"},{"location":"GameEngine_PBR/","page":"ゲームエンジン開発：物理ベースレンダリング編","title":"ゲームエンジン開発：物理ベースレンダリング編","text":"基礎からはじめる物理ベースレンダリング","category":"page"},{"location":"GameEngine_ECS/#ゲームエンジン開発：エンジンベース編","page":"ゲームエンジン開発：エンジンベース編","title":"ゲームエンジン開発：エンジンベース編","text":"","category":"section"},{"location":"GameEngine_ECS/#ECSについて","page":"ゲームエンジン開発：エンジンベース編","title":"ECSについて","text":"","category":"section"},{"location":"GameEngine_ECS/","page":"ゲームエンジン開発：エンジンベース編","title":"ゲームエンジン開発：エンジンベース編","text":"ゲームエンジンのベース部分にはECS (Entity Component System)を採用しています。ECSとは、ゲーム開発においてよく使用されるアーキテクチャパターンの一つで、Entity・Component・Systemの3要素から構成されます。","category":"page"},{"location":"GameEngine_ECS/","page":"ゲームエンジン開発：エンジンベース編","title":"ゲームエンジン開発：エンジンベース編","text":"Entity：プレイヤーや敵などのゲームオブジェクトを表現します。通常ユニークなIDのみで構成されます。","category":"page"},{"location":"GameEngine_ECS/","page":"ゲームエンジン開発：エンジンベース編","title":"ゲームエンジン開発：エンジンベース編","text":"Component：Entityの挙動や特性を表す生のデータです。","category":"page"},{"location":"GameEngine_ECS/","page":"ゲームエンジン開発：エンジンベース編","title":"ゲームエンジン開発：エンジンベース編","text":"System：各コンポーネントに対して実際の処理を施します。","category":"page"},{"location":"GameEngine_ECS/","page":"ゲームエンジン開発：エンジンベース編","title":"ゲームエンジン開発：エンジンベース編","text":"例を挙げると、プレイヤー（Entity）が、HP（Component）を保持していて、敵から攻撃を受けたのでダメージシステム（System）がプレイヤー（Entity）のHP（Component）を減らすといった具合です。","category":"page"},{"location":"GameEngine_ECS/","page":"ゲームエンジン開発：エンジンベース編","title":"ゲームエンジン開発：エンジンベース編","text":"ここからは実際に私がC++で作成したECSの説明になります。","category":"page"},{"location":"GameEngine_ECS/#Entityの作成とComponentの追加","page":"ゲームエンジン開発：エンジンベース編","title":"Entityの作成とComponentの追加","text":"","category":"section"},{"location":"GameEngine_ECS/","page":"ゲームエンジン開発：エンジンベース編","title":"ゲームエンジン開発：エンジンベース編","text":"作成したEntityをキーにしてSceneから任意のComponentを追加できます。","category":"page"},{"location":"GameEngine_ECS/","page":"ゲームエンジン開発：エンジンベース編","title":"ゲームエンジン開発：エンジンベース編","text":"// Entityの作成\r\nauto entity = scene.createEntity();\r\n// Componentの追加\r\nscene.addComponent<TransformComponent>(entity);\r\nscene.addComponent<MaterialComponent>(entity);","category":"page"},{"location":"GameEngine_ECS/#Systemの追加","page":"ゲームエンジン開発：エンジンベース編","title":"Systemの追加","text":"","category":"section"},{"location":"GameEngine_ECS/","page":"ゲームエンジン開発：エンジンベース編","title":"ゲームエンジン開発：エンジンベース編","text":"Sceneに任意のSysemを追加します。","category":"page"},{"location":"GameEngine_ECS/","page":"ゲームエンジン開発：エンジンベース編","title":"ゲームエンジン開発：エンジンベース編","text":"// レンダラーをSceneに追加\r\nauto renderer = std::make_unique<Renderer>();\r\nscene.addSystem(std::move(renderer));","category":"page"},{"location":"GameEngine_ECS/","page":"ゲームエンジン開発：エンジンベース編","title":"ゲームエンジン開発：エンジンベース編","text":"各Systemにはあらかじめ、注目したいComponentを設定しておくことができます。該当するComponentを全て所持するEntityは、自動でSystemのメンバに登録されます。","category":"page"},{"location":"GameEngine_ECS/","page":"ゲームエンジン開発：エンジンベース編","title":"ゲームエンジン開発：エンジンベース編","text":"//--------------------システムクラス--------------------//\r\nclass System{\r\n  // 必要コンポーネントのbit配列\r\n  std::bitset<MAX_COMPONENTS_FAMILY>  m_requiredComponent;\r\n};\r\n\r\n//-------------------レンダラークラス-------------------//\r\nclass Renderer : public System {\r\n  // コンストラクタ\r\n  Renderer() {\r\n    // Transform Componentを設定\r\n    auto family = getComponentTypeID<TransformComponent>();\r\n    m_requiredComponent[family] = true;\r\n    // Mesh Componentを設定\r\n    family = getComponentTypeID<MeshComponent>();\r\n    m_requiredComponent[family] = true;\r\n    // Material Componentを設定\r\n    family = getComponentTypeID<MaterialComponent>();\r\n    m_requiredComponent[family] = true;\r\n  }\r\n};","category":"page"},{"location":"GameEngine_ECS/","page":"ゲームエンジン開発：エンジンベース編","title":"ゲームエンジン開発：エンジンベース編","text":"あとはメンバのEntity配列に対して行いたい処理を記述するだけです。","category":"page"},{"location":"GameEngine_ECS/","page":"ゲームエンジン開発：エンジンベース編","title":"ゲームエンジン開発：エンジンベース編","text":"//-------------------レンダラークラス-------------------//\r\nclass Renderer : public System {\r\n  // 初期化処理\r\n  void init() {\r\n    for (auto& e : m_entityArray) {\r\n    }\r\n  }\r\n  // 更新処理\r\n  void update(float dt) {\r\n    for (auto& e : m_entityArray) {\r\n    }\r\n  }\r\n  // 描画処理\r\n  void draw() {\r\n    for (auto& e : m_entityArray) {\r\n    }\r\n  }\r\n}","category":"page"},{"location":"GameEngine_ECS/#Event-Handler","page":"ゲームエンジン開発：エンジンベース編","title":"Event Handler","text":"","category":"section"},{"location":"GameEngine_ECS/","page":"ゲームエンジン開発：エンジンベース編","title":"ゲームエンジン開発：エンジンベース編","text":"Event Handlerは各System同士がやり取りするための手段です。送信側のクラス(ここではCollisionSystem)は、任意のタイミングでEvent Handlderに対し、イベントを送信します。一方、受信側のクラス(ここではRenderer)では、初期化時に呼び出したいメンバ関数をEventHandlerに登録しておきます。これによって、EventHandlerが送信側のイベントを受け取ったタイミングで、受信側のメンバ関数を適切に呼び出してくれます。","category":"page"},{"location":"GameEngine_ECS/","page":"ゲームエンジン開発：エンジンベース編","title":"ゲームエンジン開発：エンジンベース編","text":"//-------------------コリジョンクラス-------------------//\r\nclass CollisionSystem : public System {\r\n  void update(float dt) {\r\n    if(Collision) {\r\n      // イベントを送信\r\n      CollisionEvent event;\r\n      m_eventHandler->publish(&event);\r\n    }\r\n  }\r\n}\r\n\r\n//-------------------レンダラークラス-------------------//\r\nclass Renderer : public System {\r\n  void init() {\r\n    // Event Handlerにメンバ関数を登録\r\n    m_eventHandler->subscribe(this, &Renderer::onCollisionEvent);\r\n  }\r\n\r\n  // イベント受信時に呼び出したい関数\r\n  void onCollisionEvent(CollisionEvent* collision) {\r\n  }\r\n};\r\n","category":"page"},{"location":"GameEngine_ECS/#参考文献","page":"ゲームエンジン開発：エンジンベース編","title":"参考文献","text":"","category":"section"},{"location":"GameEngine_ECS/","page":"ゲームエンジン開発：エンジンベース編","title":"ゲームエンジン開発：エンジンベース編","text":"古典的ゲームループからECSアーキテクチャまで","category":"page"},{"location":"GameEngine_ECS/","page":"ゲームエンジン開発：エンジンベース編","title":"ゲームエンジン開発：エンジンベース編","text":"Nomad Game Engine","category":"page"},{"location":"GameEngine_ECS/","page":"ゲームエンジン開発：エンジンベース編","title":"ゲームエンジン開発：エンジンベース編","text":"Effective Event Handling in C++","category":"page"},{"location":"#About-Me","page":"About Me","title":"About Me","text":"","category":"section"},{"location":"#中川-基-/-Moto-Nakagawa","page":"About Me","title":"中川 基 / Moto Nakagawa","text":"","category":"section"},{"location":"","page":"About Me","title":"About Me","text":"機械工学を専攻しています。趣味はものづくりで、プログラミングや3DCG、電子工作など様々なことに挑戦しています。最近はゲームエンジンの開発にハマっています。","category":"page"},{"location":"#所属","page":"About Me","title":"所属","text":"","category":"section"},{"location":"","page":"About Me","title":"About Me","text":"茨城大学 工学部 機械工学科 2017/04 ~ 2021/03\n茨城大学大学院 理工学研究科 機械システム専攻 2021/04 ~ 2023/03(修了予定)","category":"page"},{"location":"#研究","page":"About Me","title":"研究","text":"","category":"section"},{"location":"","page":"About Me","title":"About Me","text":"視覚障害者のための​リアルタイム触地図と​触力覚デバイスの開発","category":"page"},{"location":"#言語","page":"About Me","title":"言語","text":"","category":"section"},{"location":"","page":"About Me","title":"About Me","text":"C/C++ (ゲームエンジン開発、マイコン制御)\nPython (画像認識/物体検出/その他 算術計算・グラフ作成など)\nJavaScript (Bot開発)","category":"page"},{"location":"#各種リンク","page":"About Me","title":"各種リンク","text":"","category":"section"},{"location":"","page":"About Me","title":"About Me","text":"GitHub\nYoutube","category":"page"},{"location":"#制作物","page":"About Me","title":"制作物","text":"","category":"section"},{"location":"","page":"About Me","title":"About Me","text":"    Pages = [\r\n        \"GameEngine_Overview.md\",\r\n        \"GameEngine_ECS.md\",\r\n        \"GameEngine_PBR.md\",\r\n        \"GameEngine_Physics.md\",\r\n        \"RoboCup.md\",\r\n        \"DeepLearning.md\",\r\n        \"bot.md\",\r\n        \"WebSite.md\",\r\n        \"ArtGallery.md\",\r\n    ]\r\n    Depth = 2","category":"page"}]
}
