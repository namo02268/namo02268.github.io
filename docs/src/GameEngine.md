# ゲームエンジン開発
[ECS (Entity Component System)](https://en.wikipedia.org/wiki/Entity_component_system) ライクな自作のゲームエンジン開発に挑戦しています。

## 開発環境
使用言語やライブラリは以下の通りです。
- C++ 14
- [OpenGL](https://www.opengl.org//)
  - [GLFW](https://www.glfw.org)
  - [GLAD](https://github.com/Dav1dde/glad)
  - [GLM](https://github.com/g-truc/glm)
- [Dear ImGui](https://github.com/ocornut/imgui)
- [Assimp](https://github.com/assimp/assimp)

## Scenenの作成とSystemの追加

## Entityの作成とComponentの追加
作成したEntityをキーにしてSceneから任意のコンポーネントを追加できます。
```C++
  auto entity = scene.createEntity();
  scene.addComponent<TransformComponent>(entity);
  scene.addComponent<MaterialComponent>(entity);
```

## Event Handler
各システムは


## 参考文献
[古典的ゲームループからECSアーキテクチャまで](https://zenn.dev/rita0222/articles/c22a8367e31b4d5f4eeb)

[Nomad Game Engine](https://savas.ca/nomad)

[Effective Event Handling in C++](https://www.gamedev.net/articles/programming/general-and-gameplay-programming/effective-event-handling-in-c-r2459/)
