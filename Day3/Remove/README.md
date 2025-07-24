# 🔁 1047. Remove All Adjacent Duplicates In String

---

## 🧩 Problem Statement

You are given a string `s` consisting of **lowercase English letters**.

A **duplicate removal** consists of choosing two **adjacent and equal letters** and removing them.

We repeat this process until no more duplicate removals can be made.

Return the **final string** after all such operations.  
It is guaranteed that the answer is **unique**.

---

## 📥 Input

- A string `s` with:  
  `1 <= s.length <= 10⁵`  
  `s` consists of only lowercase English letters (`a-z`)

---

## 📤 Output

- Return the resulting string after all adjacent duplicate removals.

---

## ✅ Examples

### Example 1

```text
Input:  s = "abbaca"
Output: "ca"

Explanation:
"abbaca" → remove "bb" → "aaca" → remove "aa" → "ca"
