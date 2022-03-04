# bot開発
[GAS (Google Apps Script)](https://developers.google.com/apps-script)、[Twitter API](https://developer.twitter.com/en/products/twitter-api)、[IFTTT](https://ifttt.com/explore) を組み合わせて、3Dモデリングのお題出題botを作りました。2019年8月19日から運営を始め、現在1600人ほどフォロワーがいます。後述するお題生成以外は全て自動化しています。

```@raw html
<blockquote class="twitter-tweet" data-theme="dark"><p lang="ja" dir="ltr">本日のお題は「ビー玉」です。<br>投稿の際は <a href="https://twitter.com/hashtag/%E6%B7%B1%E5%A4%9C%E3%81%AE%E3%83%A2%E3%83%87%E3%83%AA%E3%83%B3%E3%82%B060%E5%88%86%E4%B8%80%E6%9C%AC%E5%8B%9D%E8%B2%A0?src=hash&amp;ref_src=twsrc%5Etfw">#深夜のモデリング60分一本勝負</a> のハッシュタグをつけていただけると幸いです。</p>&mdash; 深夜の真剣モデリング60分一本勝負 (@1hourmodelling) <a href="https://twitter.com/1hourmodelling/status/1498279130105847808?ref_src=twsrc%5Etfw">February 28, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
```
---
## ツイートの自動化
GAS のトリガーと Twitter API を使って、毎日以下のツイートを自動でツイートしています。
- 21:50 お題発表ツイート
- 22:00 モデリング開始ツイート
- 23:00 モデリング終了ツイート

---
## 作品リツイートの自動化
ハッシュタグ 「#深夜のモデリング60分一本勝負」 に投稿された作品を30分置きに自動リツイートしています。
- IFTTT でツイートの検索
- Googleスプレッドシートに該当ツイートを追加
- 追加されたツイートを Twitter API を使ってリツイート

```@raw html
<img src="../images/IFTTT.png" width="500">
```

---
## 過去のお題
過去に出題したお題を簡単に確認できるように、毎日のお題を GAS を使ってスプレッドシートに追加しています。リツイート数をカウントすることで、投稿作品数の統計も取っています。
```@raw html
<img src="../images/Spreadsheet1.png" width="200">
```
[スプレッドシートへのリンク](https://docs.google.com/spreadsheets/d/1NRrCvgxyiuwi9mW1L9cQJYGB6EVApk6SDPn9noAILa4/edit#gid=0)

---
## お題の生成
