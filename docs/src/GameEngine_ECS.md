# ゲームエンジン開発：エンジンベース編
## ECSについて

## Entityの作成とComponentの追加
作成したEntityをキーにしてSceneから任意のComponentを追加できます。
```C++
// Entityの作成
auto entity = scene.createEntity();
// Componentの追加
scene.addComponent<TransformComponent>(entity);
scene.addComponent<MaterialComponent>(entity);
```

## Systemの追加
SceneにSystemを追加します。追加された
```C++
// レンダラーをSceneに追加
auto renderer = std::make_unique<Renderer>();
scene.addSystem(std::move(renderer));
```
各Systemにはあらかじめ、注目したいComponentを設定しておくことができます。該当するComponentを全て所持するEntityは、自動でSystemのメンバに登録されます。

```C++
//--------------------システムクラス--------------------//
class System{
  // 必要コンポーネントのbit配列
  std::bitset<MAX_COMPONENTS_FAMILY>  m_requiredComponent;
};

//-------------------レンダラークラス-------------------//
class Renderer : public System {
  // コンストラクタ
  Renderer() {
    // Transform Componentを設定
    auto family = getComponentTypeID<TransformComponent>();
    m_requiredComponent[family] = true; // 
    // Mesh Componentを設定
    family = getComponentTypeID<MeshComponent>();
    m_requiredComponent[family] = true;
    // Material Componentを設定
    family = getComponentTypeID<MaterialComponent>();
    m_requiredComponent[family] = true;
  }
};
```

あとはメンバのEntity配列に対して行いたい処理を記述するだけです。

```C++
//-------------------レンダラークラス-------------------//
class Renderer : public System {
  // 初期化処理
  void Renderer::init() {
    for (auto& e : m_entityArray) {
    }
  }
  // 更新処理
  void Renderer::update(float dt) {
    for (auto& e : m_entityArray) {
    }
  }
  // 描画処理
  void Renderer::draw() {
    for (auto& e : m_entityArray) {
    }
  }
}
```

## Event Handler
Event Handlerは各System同士がやり取りするための手段です。例えば、
```C++
//-------------------コリジョンクラス-------------------//
class CollisionSystem : public System {
  void update(float dt) {
    if(Collision) {
      // イベントを発行
      CollisionEvent event;
      m_eventHandler->publish(&event);
    }
  }
}

//-------------------レンダラークラス-------------------//
class Renderer : public System {
  void init() {
    // Event Handlerにメンバ関数を登録
    m_eventHandler->subscribe(this, &Renderer::onCollisionEvent);
  }

  // イベント受け取り時に呼び出したい関数
  void onCollisionEvent(CollisionEvent* collision) {
  }
};

```


## 参考文献
[古典的ゲームループからECSアーキテクチャまで](https://zenn.dev/rita0222/articles/c22a8367e31b4d5f4eeb)

[Nomad Game Engine](https://savas.ca/nomad)

[Effective Event Handling in C++](https://www.gamedev.net/articles/programming/general-and-gameplay-programming/effective-event-handling-in-c-r2459/)
