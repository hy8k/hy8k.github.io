---
layout: post
title: Binary Indexed Tree（BIT）の実装，使用例
date: 2023-05-23 12:09 +0900
category: cp
slug: cp-5
---

**Binary Indexed Tree（BIT）**，または**Fenwick Tree**は，長さ$N$の配列に関する要件

 - $O(\log{N})$で要素を一点変更できる
 - $O(\log{N})$で要素の区間和を取得できる

を満たすデータ構造である．

<br>

## 類似のデータ構造との比較

| データ構造   | 要素の一点変更 | 要素の区間和 |
| ------------ | -------------- | ------------ |
| 配列         | $O(1)$         | $O(N)$       |
| 累積和       | $O(N)$         | $O(1)$       |
| BIT          | $O(\log{N})$   | $O(\log{N})$ |
| Segment Tree | $O(\log{N})$   | $O(\log{N})$ |


<br>

## 実装

完全二分木として実装される（図を含めて後で詳しく書く）．

<br>

## 使用例

### 転倒数を求める

数列$A$についての**転倒数**とは，$A$の異なる2つの要素$a_i, a_j \ (i < j)$であって，$a_i > a_j$となるような整数組$(i,j)$の個数と定義される．$A$をバブルソートしたときの交換回数と定義することもできる．

（後で詳しく書く）

<br>

## 文献
 - [AtCoder Library](https://atcoder.github.io/ac-library/document_ja/fenwicktree.html)
 - 秋葉拓哉，岩田陽一，北川宜稔．『プログラミングコンテストチャレンジブック 第2版』．マイナビ出版，2012，pp. 160-162．
