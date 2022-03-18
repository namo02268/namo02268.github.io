# ゲームエンジン開発：物理エンジン編
## Colliderと物理演算の実装
簡単なSphere ColliderとPlane Colliderによる衝突判定と物理演算を実装してみました。GUIからは、以下のパラメータを調整することができます。
- Velocity：速度
- Force：物体にかかる力
- Mass：質量
- Restitution：反発係数
- Dynamic Friction：動摩擦係数
- Static Friction：静止摩擦係数
- Is Gravity：重力の影響を受けるか
- Is Kinematic：物理演算の影響を受けるか

```@raw html
<img src="../images/Physics.png" width="500">
```

<br />

## Youtubeデモ動画
大量の球体を出現させるデモ動画です。Core i5-6300U + Intel HD Graphics 520のノートPCで録画しながら動かしていますが、今のところ処理速度は問題なさそうです。

```@raw html
<iframe style="width:560px;height:315px" src="https://www.youtube.com/embed/IUYqTApizuk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```
次は、凸形状の立体の衝突判定を行うために、[GJKアルゴリズム](https://en.wikipedia.org/wiki/Gilbert–Johnson–Keerthi_distance_algorithm)を実装しようと考えています。
