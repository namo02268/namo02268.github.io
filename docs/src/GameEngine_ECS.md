# ゲームエンジン開発：エンジンベース編
## ECSについて
[ECS (Entity Component System)](https://en.wikipedia.org/wiki/Entity_component_system)は、ゲーム開発においてよく使用されるアーキテクチャパターンの一つです。
```@raw html
<img src="../images/ECS.png" width="600">
```

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
Sceneに任意のSysemを追加します。
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
  void init() {
    for (auto& e : m_entityArray) {
    }
  }
  // 更新処理
  void update(float dt) {
    for (auto& e : m_entityArray) {
    }
  }
  // 描画処理
  void draw() {
    for (auto& e : m_entityArray) {
    }
  }
}
```

## Event Handler
Event Handlerは各System同士がやり取りするための手段です。送信側のクラス(ここではCollisionSystem)は、任意のタイミングでEvent Handlderに対し、イベントを送信します。一方、受信側のクラス(ここではRenderer)では、初期化時に呼び出したいメンバ関数をEventHandlerに登録しておきます。これによって、EventHandlerが送信側のイベントを受け取ったタイミングで、受信側のメンバ関数を適切に呼び出してくれます。

```C++
//-------------------コリジョンクラス-------------------//
class CollisionSystem : public System {
  void update(float dt) {
    if(Collision) {
      // イベントを送信
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

  // イベント受信時に呼び出したい関数
  void onCollisionEvent(CollisionEvent* collision) {
  }
};

```


## 参考文献
[古典的ゲームループからECSアーキテクチャまで](https://zenn.dev/rita0222/articles/c22a8367e31b4d5f4eeb)

[Nomad Game Engine](https://savas.ca/nomad)

[Effective Event Handling in C++](https://www.gamedev.net/articles/programming/general-and-gameplay-programming/effective-event-handling-in-c-r2459/)
