# POUND CAKE

パーティー「POUND CAKE」の告知サイト（https://p.ound.info）。Astro の静的サイトです。

## 開発

Node.js 22.23.4 以上が必要です（`.nvmrc` 参照）。

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に出力
```

## 新しい回を追加する

1. フライヤー画像を `src/assets/flyers/` に置く（GIF / JPG / PNG。表示時に自動で WebP に変換されます）
2. `src/content/events/` に連番の Markdown（例: `05.md`）を作る

```md
---
title: "POUND CAKE #05"
place: seido_mart
placelink: https://www.instagram.com/seido_mart/
partylink: https://www.instagram.com/p/XXXXXXXX/
time: 2025/6/1 SUN 18:00 START!!
dj: DJ 40 / kin
flyer: ../../assets/flyers/05.jpg
---

（本文は任意。SoundCloud の埋め込みなども書けます）
```

トップページには、番号がいちばん大きい回が表示されます。

## デプロイ

`master` にプッシュすると、GitHub Actions（`.github/workflows/astro.yml`）でビルドされ、GitHub Pages に公開されます。
