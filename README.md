# 仮免一夜漬け ○×100問

仮免許の学科対策向けに、○×形式で100問を解ける静的サイトです。

## 構成

- `index.html` - 画面本体
- `styles.css` - デザイン
- `script.js` - 100問データ・採点・復習ロジック

## 機能

- 100問ランダム出題
- 問題ごとの正誤判定と短い解説
- 進捗バー
- 正解数表示
- 不正解だけ復習モード

## ローカルで試す

`index.html` をブラウザで開くだけで動きます。

## GitHub Pages で公開

1. GitHubにリポジトリ作成
2. このフォルダを push
3. GitHub の `Settings` → `Pages`
4. `Build and deployment` で `Deploy from a branch`
5. `Branch: main` / `/(root)` を選択して保存
6. 数十秒待つと公開URLが発行されます

例: `https://<your-name>.github.io/<repo-name>/`
