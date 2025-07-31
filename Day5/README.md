# Day5. Check If Two String Arrays are Equivalent

---

## 🧩 Problem Statement

You are given **two string arrays** `word1` and `word2`.

Return `true` if the two arrays **represent the same string**, and `false` otherwise.

> A string is represented by an array if **joining all its elements in order** forms that string.

---

## 📥 Input

- `word1`, `word2`: Arrays of strings
- Constraints:
  - `1 <= word1.length, word2.length <= 1000`
  - `1 <= word1[i].length, word2[i].length <= 1000`
  - `1 <= total characters in both arrays <= 10⁴`
  - All characters are lowercase English letters

---

## 📤 Output

- Boolean `true` or `false`

---

## Examples

```text
Input:  word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true

Explanation:
"ab" + "c" → "abc"
"a" + "bc" → "abc"
Both match ✅

---

Input:  word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false

Explanation:
"acb" ≠ "abc" ❌
