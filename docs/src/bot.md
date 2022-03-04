# bot開発
GAS (Google Apps Script)、Twitter API、IFTTT を組み合わせて、3Dモデリングのお題出題botを作りました。2019年8月19日から運営を始め、現在1600人ほどフォロワーがいます。後述するお題生成以外は全て自動化しています。

```@raw html
<blockquote class="twitter-tweet" data-theme="dark"><p lang="ja" dir="ltr">本日のお題は「ビー玉」です。<br>投稿の際は <a href="https://twitter.com/hashtag/%E6%B7%B1%E5%A4%9C%E3%81%AE%E3%83%A2%E3%83%87%E3%83%AA%E3%83%B3%E3%82%B060%E5%88%86%E4%B8%80%E6%9C%AC%E5%8B%9D%E8%B2%A0?src=hash&amp;ref_src=twsrc%5Etfw">#深夜のモデリング60分一本勝負</a> のハッシュタグをつけていただけると幸いです。</p>&mdash; 深夜の真剣モデリング60分一本勝負 (@1hourmodelling) <a href="https://twitter.com/1hourmodelling/status/1498279130105847808?ref_src=twsrc%5Etfw">February 28, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
```
## ツイートの自動化
GAS のトリガーと Twitter API を使って以下の
- 21:50 お題発発表ツイート
- 22:00 モデリング開始ツイート
- 23:00 モデリング終了ツイート

## 作品のリツイート
ハッシュタグ「#深夜のモデリング60分一本勝負」に投稿された作品を
```@raw html
<img src="../images/IFTTT.png" width="500">
```

## スプレッドシートの利用


## お題の生成
