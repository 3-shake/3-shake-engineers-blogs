# 3-shake Engineers' Blogs

Fork of https://github.com/catnose99/team-blog-hub

published at: https://blog.3-shake.com/

## Introduction
3-shake Engineers’Blogs では3-shakeに所属するエンジニアのブログ記事をまとめています。
- 基本的に有志で更新対応を行っています
- 機能や見た目の変更のPR、要望はいつでもお待ちしております
- 初めて参加する方は[Onboarding](https://github.com/3-shake/3-shake-engineers-blogs#onboarding)を参照してください
- Engineers' Blogsへの掲載を止めたい、退職することが決まった等の際は [以下を参照](https://github.com/3-shake/3-shake-engineers-blogs#offboarding)してください

## Onboarding
### Development

```bash
# install Volta
$ curl https://get.volta.sh | bash

$ yarn install
$ yarn build
$ yarn dev
```

- サイトの基本設定は`site.config.ts`で行います。
- メンバーのプロフィールやRSSの登録は`members.ts`で行います。
- 配色を変更するには`src/styles/variables.scss`を書き換えます。
- ロゴなどの画像を変更するには`public`内のファイルを置き換えます。

※ PRを出す際、デフォルトではリポジトリの向き先がfork元となっているため、`3-shake/3-shake-engineers-blogs`のリポジトリ向けになっているか確認してください

### 動作確認環境

Node.js v22


## Offboarding
現状、気付いた人がオフボーディングをしているためなるべくご協力いただけますと幸いです 🙏

- Engineers' Blogsへの掲載を止めたい日や最終出勤日までに`members.ts`, `public/avatar配下に追加した自分の画像`の削除が含まれたPRを作成してください
- 本人の対応が難しい場合、チームメンバーなどが対応or報告していただけますと大変助かります

## License

MIT
