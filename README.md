---
title: "Static Blog Template 概要"
description: "Next.js 15 + Redux + MDX + Sass Modules + Biome を使った静的ブログテンプレートの紹介"
date: "2025-05-26"
tags: ["Next.js", "Redux", "MDX", "Sass", "Biome"]
---

# 📝 Static Blog Template

このテンプレートは、**Next.js 15.3.2 + Redux + MDX + Sass Modules + Biome** によって構築された静的ブログテンプレートです。

Turbopack による高速開発と、MDXを活用した柔軟な記事構造、Reduxによる状態管理、Biomeによる統一的なコード整形が特長です。

---

## 🚀 技術スタック

| 技術        | バージョン   | 説明                                |
|-------------|--------------|-------------------------------------|
| Next.js     | 15.3.2       | App Router + Turbopack 対応        |
| React       | 19.0.0       | 最新の React                       |
| Redux       | （RTK構成）  | グローバル状態管理                 |
| MDX         | 対応済        | Markdown + JSX で記事を作成可能    |
| Sass        | 1.89.0       | CSS Modules 対応                    |
| Biome       | 1.9.4        | Lint + Format + Check を統合       |
| TypeScript  | ^5           | 型安全な開発                        |

---

## 🗂 構成

```txt
src/
├── app/          # Next.js App Router 構成
├── components/   # UIコンポーネント
├── css/          # .module.scss スタイル
├── lib/          # Redux storeなどのロジック
├── posts/        # MDX記事フォルダ
└── types/        # TypeScript 型定義

pnpm dev         # 開発サーバー起動 (Turbopack使用)
pnpm build       # 本番ビルド
pnpm start       # 本番サーバー起動
pnpm format      # Biomeでコード整形
pnpm lint        # BiomeでLintチェック
pnpm check       # Biomeで型・構文チェック