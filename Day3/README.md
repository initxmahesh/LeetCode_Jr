# ⌨️ Backspace String Compare

---

## 🧩 Problem Statement

Given two strings `s` and `t`, return `true` if they are equal when both are typed into empty text editors.

The character `'#'` means a **backspace**.  
> If a backspace is used on an empty string, it stays empty.

---

## 📥 Input

- Two strings `s` and `t` of length between **1 and 200**
- Only lowercase English letters and `'#'` characters

---

## 📤 Output

- Return `true` if both strings are **equal** after simulating typing, otherwise `false`

---

## ✅ Example 1

```text
Input:  s = "ab#c", t = "ad#c"
Output: true

Explanation:
s → "ab#c" → "a" → "ac"  
t → "ad#c" → "a" → "ac"
