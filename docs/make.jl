using Documenter
makedocs(;
    sitename="Moto Nakagawa",
    pages = [
        "About Me"=>"index.md",
        "ゲームエンジン開発：概要"=>"GameEngine_Overview.md",
        "ゲームエンジン開発：エンジンベース編"=>"GameEngine_ECS.md",
        "ゲームエンジン開発：物理ベースレンダリング編"=>"GameEngine_PBR.md",
        "ゲームエンジン開発：物理エンジン編"=>"GameEngine_Physics.md",
        "bot開発"=>"bot.md",
        "ロボカップジュニア"=>"RoboCup.md",
        "機械学習"=>"MachineLearning.md",
        "Webサイト"=>"WebSite.md",
        "Art Gallery"=>"ArtGallery.md",
    ]
)
