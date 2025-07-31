# 🍬 1431. Kids With the Greatest Number of Candies

---

## 🧩 Problem Statement

There are `n` kids with candies.  
You are given:

- An integer array `candies`, where `candies[i]` is the number of candies the i-th kid has.
- An integer `extraCandies`, the number of extra candies available.

---

## 🎯 Goal

Return a boolean array `result` of length `n` such that:

- `result[i] == true` if, **after giving all extraCandies to the i-th kid**, they have the **greatest number of candies** among all kids.
- Otherwise, `result[i] == false`.

> ✅ Multiple kids can have the same highest number of candies.

---

## 📥 Input

- `candies`: array of integers
- `extraCandies`: integer

**Constraints:**

- `2 <= candies.length <= 100`
- `1 <= candies[i] <= 100`
- `1 <= extraCandies <= 50`

---

## 📤 Output

- Boolean array of length `candies.length`

---

## ✅ Examples

```text
Input:  candies = [2,3,5,1,3], extraCandies = 3
Output: [true, true, true, false, true]

Explanation:
Kid 1: 2 + 3 = 5 → greatest ✅  
Kid 2: 3 + 3 = 6 → greatest ✅  
Kid 3: 5 + 3 = 8 → greatest ✅  
Kid 4: 1 + 3 = 4 → not greatest ❌  
Kid 5: 3 + 3 = 6 → greatest ✅

---

Input:  candies = [12,1,12], extraCandies = 10
Output: [true,false,true]

---

Input:  candies = [12,1,12], extraCandies = 10
Output: [true,false,true]
