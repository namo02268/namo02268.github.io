# ゲームエンジン開発：概要
自作のゲームエンジン開発に挑戦しています。2023年の1月末から開発を始めました。ソースコードは[GitHub](https://github.com/namo02268/Kikurage)にあります。


## 開発環境
使用言語やライブラリは以下の通りです。
- C++ 14
- [OpenGL](https://www.opengl.org//)
  - [GLFW](https://www.glfw.org)
  - [GLAD](https://github.com/Dav1dde/glad)
  - [GLM](https://github.com/g-truc/glm)
- [Dear ImGui](https://github.com/ocornut/imgui)
- [Assimp](https://github.com/assimp/assimp)


## 現在の進捗
- エンジンのベース部分
- 描画システム
- 物理エンジン

がそれぞれ完成（？）しています。まだまだ改善の余地はありますが、とりあえず人に見せられる程度には出来た気がします。それぞれのページで解説していますので、ぜひご覧ください。

```@contents
    Pages = [
        "GameEngine_ECS.md",
        "GameEngine_PBR.md",
        "GameEngine_Physics.md",
    ]
    Depth = 2
```
