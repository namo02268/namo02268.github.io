# ゲームエンジン開発：物理ベースレンダリング編

リアルタイムのIBLを実装してみました。また、GUIからコンポーネントの追加/削除/編集なども出来ます。

## Material
GUIから以下のパラメータを調整することができます。
- Albedo：物体の色
- Metallic：金属光沢
- Roughness：表面の粗さ
- ao：アンビエントオクルージョン

```@raw html
<img src="../images/Physics.png" width="500">
```

アンビエントオクルージョンは、テクスチャベースのマテリアルの時に必要になるパラメータで、今のところは必要ありません。

## Youtubeデモ動画

```@raw html
<iframe style="width:560px;height:315px" src="https://www.youtube.com/embed/KNrScQqfw7Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

## 参考文献
[Real Shading in Unreal Engine 4](https://blog.selfshadow.com/publications/s2013-shading-course/karis/s2013_pbs_epic_notes_v2.pdf)

[Learn OpenGL PBR](https://learnopengl.com/PBR/Theory)

[基礎からはじめる物理ベースレンダリング](https://zenn.dev/mebiusbox/books/619c81d2fbeafd)
