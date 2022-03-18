# ゲームエンジン開発：物理ベースレンダリング編
ゲームエンジンでは、今のところ下記の手法によるレンダリングを実装しています。

<br />

## 物理ベースレンダリング
[物理ベースレンダリング](https://ja.wikipedia.org/wiki/物理ベースシェーディング)とは物理法則に基づいた数式を使って、光の挙動をモデル化したレンダリング手法です。物理法則をベースとしているため、リアルな物体を描写できますが、その分計算量も多くなります。

<br />

## IBL
物理ベースレンダリングしても必ずリアルな描写が得られるとは限りません。3DCGではライティング（光や照明の設定）も重要となってきます。[IBL(Image-based Lighting)](https://ja.wikipedia.org/wiki/イメージベースドライティング)は、現実の風景画像を光源として使用する手法です。画像を用いることで現実世界に近いライティングを簡単に得ることができます。

<br />

## Materialの設定
物理ベースレンダリングでは基本的に以下のパラメータを調整してマテリアルを表現します。
- Albedo：物体の色
- Metallic：金属光沢
- Roughness：表面の粗さ

これらのパラメータはGUIから調整することができます。

```@raw html
<img src="../images/Physics.png" width="500">
```

AO（アンビエントオクルージョン）は、テクスチャマテリアルの時に必要になるパラメータで、今回は使っていません。

<br />

## Youtubeデモ動画
```@raw html
<iframe style="width:560px;height:315px" src="https://www.youtube.com/embed/KNrScQqfw7Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

<br />

## 参考文献
[Real Shading in Unreal Engine 4](https://blog.selfshadow.com/publications/s2013-shading-course/karis/s2013_pbs_epic_notes_v2.pdf)

[Learn OpenGL PBR](https://learnopengl.com/PBR/Theory)

[基礎からはじめる物理ベースレンダリング](https://zenn.dev/mebiusbox/books/619c81d2fbeafd)
