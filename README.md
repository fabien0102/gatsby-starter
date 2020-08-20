# space-apps-kushimoto.github.io

このリポジトリは Space Apps Kushimoto の公式サイトのリポジトリです。

https://space-apps-kushimoto.github.io/

## ブログの書き方

1. GitHub 上でこのリポジトリをフォーク。

2. フォークしたリポジトリ上で、`/_posts/`ディレクトリに移動。

   - 例：`https://github.com/[your-name]/space-apps-kushimoto.github.io/tree/master/_posts`

3. [Create New File] をクリック

   - <img width="500" alt="スクリーンショット 2019-07-30 13 36 34" src="https://user-images.githubusercontent.com/8760841/62172910-f59d1e00-b36e-11e9-96c5-5281461ccf9f.png">

4. 記事を書く。

5. プルリクエストを送る。

### 投稿形式

- ファイル名を`YYYY-MM-DD-name-of-post.md`の形式で保存。
- 最初の行に下の形式でメタデータを追加。
  - https://github.com/ndrewtl/airspace-jekyll/blame/master/_posts/2016-05-20-welcome-to-jekyll.md#L1-L7
- マークダウン形式で記述。

## 開発者向け

## 始め方

Code Sand Box で開く。
<a href="https://codesandbox.io/s/github/fabien0102/gatsby-starter" class="css-1q3a7e1"><span class="css-epvm6">CodeSandbox&nbsp;<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyMyAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmb2N1c2FibGU9ImZhbHNlIj4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjUgMTEuNjE3djExLjE3YS44OTcuODk3IDAgMDAuNDk3LS4xNDJsOC45NDQtNS4xMTFjLjM1NC0uMjAyLjQ5OC0uNTE2LjQ5OC0uOTIzVjYuMjQ3YS44Ny44NyAwIDAwLS4xNDMtLjQ5N2wtOS41MSA1LjM3M2EuNTY4LjU2OCAwIDAwLS4yODYuNDk0em00Ljk3IDYuNDE0YzAgLjI4NC0uMTA3LjQyNi0uMzU2LjU2OGwtMi45ODEgMS43MDNjLS4yMTMuMTQyLS40OTcuMDcyLS40OTctLjIxMnYtNy41OTZjMC0uMjAzLjE3OS0uNDY3LjM1NS0uNTY4bDYuODE1LTMuOTA0Yy4xODktLjExLjM1NC4wNjUuMzU0LjI4NHY0LjA0NmMwIC4yMS0uMDk4LjM5OC0uMjg0LjQ5N2wtMy4wNTIgMS42MzNjLS4xODUuMDk4LS4zNTUuMjg3LS4zNTUuNDk2djMuMDUzeiIgZmlsbD0iIzk5OSIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMS41NjIgMTYuNjExVjYuMjQ3YzAtLjQwOC4yMTQtLjc5Mi41NjctLjk5NEwxMC43OS4zNTVjLjE4OC0uMDk5LjQ5OC0uMTQyLjcxLS4xNDIuMjE0IDAgLjU0Mi4wNTMuNzEuMTQybDguNTkgNC44OThjLjE3LjEuNDAxLjMzMi40OTcuNDk3bC05LjUxMiA1LjM5NWEuNTcyLjU3MiAwIDAwLS4yODQuNDk3djExLjE0NWExLjE0IDEuMTQgMCAwMS0uNTY4LS4xNDJMMi4yIDE3LjYwNWMtLjM1My0uMjAyLS42MzgtLjU4Ni0uNjM4LS45OTR6bTEuMjc3LTguMzA2djQuMDQ3YzAgLjI4NC4wNzEuNDI2LjM1NS41NjhsMi45ODIgMS43MDNhLjU4NS41ODUgMCAwMS4zNTUuNTY4djIuODRjMCAuMjg0LjA3LjQyNi4zNTUuNTY4bDIuOTgxIDEuNzAzYy4yODQuMTQyLjQ5Ny4wNzEuNDk3LS4yMTN2LTcuNTk1YS41ODUuNTg1IDAgMDAtLjM1NS0uNTY4TDMuMzM2IDguMDkzYy0uMjEzLS4xNDItLjQ5Ny0uMDcxLS40OTcuMjEyem0xMS42NDItNC44MjdMMTEuODU1IDQuOTdhLjY0NS42NDUgMCAwMS0uNzEgMEw4LjUxOCAzLjQ4YS41ODguNTg4IDAgMDAtLjU2OCAwTDQuNjg1IDUuMzIzYy0uMjg0LjE0Mi0uMjg0LjQyNiAwIC41NjhsNi41MyAzLjc2MmMuMTc2LjEuMzk0LjEuNTY5IDBsNi41My0zLjc2MmMuMjE0LS4xNDIuMjg1LS40MjYgMC0uNTY4TDE1LjA1IDMuNDc4YS41ODguNTg4IDAgMDAtLjU2OCAweiIgZmlsbD0iI0YyRjJGMiIvPgo8L3N2Zz4K" alt="" class="css-1rn0cej"></span></a>

### 修正方法

#### 内容

`src/pages/` フォルダ内にあるファイルを編集。

#### CSS

`src/css/custom.css` の末尾に追記していく。

#### 画像

`static/` フォルダ内に画像をアップロード。`<img src="./your-image.png">` で表示。

## 参考

https://github.com/ndrewtl/airspace-jekyll
