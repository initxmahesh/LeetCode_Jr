# Goat Latin

---

## 🧩 Problem Statement

You are given a string `sentence` consisting of words separated by spaces.  
Each word contains only **uppercase or lowercase English letters**.

Your task is to convert the sentence to **Goat Latin**, following these rules:

---

## 🐐 Goat Latin Rules

1. If a word **starts with a vowel** (`a`, `e`, `i`, `o`, or `u`), append `"ma"` to the end.  
   🔹 Example: `"apple"` → `"applema"`

2. If a word **starts with a consonant**, move the **first letter to the end**, then add `"ma"`.  
   🔹 Example: `"goat"` → `"oatgma"`

3. Then add **one or more 'a'** to the end of each word, depending on its position in the sentence (starting from 1).  
   🔹 First word → +`a`, second → +`aa`, third → +`aaa`, etc.

Return the final sentence formed after applying the above rules.

---

## 📥 Input

- `sentence`: A string consisting of space-separated words.
- Constraints:
  - `1 <= sentence.length <= 150`
  - Only English letters and spaces.
  - No leading or trailing spaces.

---

## 📤 Output

- Return a string representing the **Goat Latin** transformation.

---

## ✅ Examples

```text
Input:  sentence = "I speak Goat Latin"
Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
