# フォントの追加・変更

フォントは `next/font/google` を使ってビルド時にself-hostされます。外部リクエストが発生しないため、パフォーマンスに影響しません。

## フォントを追加する

`src/pages/_app.tsx` を編集します。

```tsx
import { Roboto, Open_Sans, Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${roboto.variable} ${openSans.variable} ${notoSansJP.variable} app-wrapper`}>
      ...
    </div>
  );
}
```

その後 `src/styles/_base.scss` の `.app-wrapper` の `font-family` にCSS変数を追加します。

```scss
.app-wrapper {
  font-family: var(--font-noto-sans-jp), var(--font-roboto), var(--font-open-sans), sans-serif;
}
```

## フォントを変更する

1. `src/pages/_app.tsx` の不要なフォントのimportと定数を削除する
2. `src/styles/_base.scss` の `.app-wrapper` の `font-family` から対応するCSS変数を削除する

## 参考

使用できるフォント名は [Google Fonts](https://fonts.google.com/) で確認できます。`next/font/google` でのフォント名はスペースをアンダースコアに置き換えた形式です（例: `Noto Sans JP` → `Noto_Sans_JP`）。
