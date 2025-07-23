## Baseball Game

## 🧩 Problem Statement

You are keeping scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

You are given a list of strings `operations`, where `operations[i]` is the *i-th* operation you must apply to the record and is one of the following:

- An **integer `x`**: Record a new score of `x`.
- `"+"` : Record a new score that is the **sum of the previous two scores**.
- `"D"` : Record a new score that is **double the previous score**.
- `"C"` : Invalidate the **previous score**, removing it from the record.

Return the **sum of all the scores** on the record after applying all the operations.

> 🧠 All operations are valid, and intermediate results fit in a 32-bit integer.

---

## 📥 Input

- `operations.length` from **1 to 1000**
- Each `operations[i]` is either:
  - `"C"`, `"D"`, `"+"`, or
  - A string representing an **integer** in the range [-30,000, 30,000]

---

## 📤 Output

- Return the **total sum** of the record after performing all operations.

---

## ✅ Example 1

```text
Input:  ops = ["5", "2", "C", "D", "+"]
Output: 30

Explanation:
"5"   → record = [5]  
"2"   → record = [5, 2]  
"C"   → remove 2 → record = [5]  
"D"   → double 5 = 10 → record = [5, 10]  
"+"   → 5 + 10 = 15 → record = [5, 10, 15]  
Total = 5 + 10 + 15 = 30
