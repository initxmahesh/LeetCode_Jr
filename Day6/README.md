# ➕ Two Sum II - Input Array Is Sorted

---

## 🧩 Problem Statement

You are given a **1-indexed array** `numbers` that is **sorted in non-decreasing order**.

Find **two numbers** such that they add up to a specific `target` number.

Return their **1-based indices** as an array `[index1, index2]`, such that:

- `numbers[index1 - 1] + numbers[index2 - 1] == target`
- `1 <= index1 < index2 <= numbers.length`

You **must** use **constant extra space**, and **each input has exactly one solution**.  
> ❗ You **cannot** use the same element twice.

---

## 📥 Input

- `numbers`: Sorted array of integers
- `target`: Integer target sum
- Constraints:
  - `2 <= numbers.length <= 30,000`
  - `-1000 <= numbers[i], target <= 1000`
  - Exactly one solution exists

---

## 📤 Output

- Return `[index1, index2]` where `index1 < index2` and `numbers[index1 - 1] + numbers[index2 - 1] == target`

---

## ✅ Examples

```text
Input:  numbers = [2, 7, 11, 15], target = 9
Output: [1, 2]

Explanation:
2 + 7 = 9 → indices = [1, 2]

---

Input:  numbers = [2, 3, 4], target = 6
Output: [1, 3]

Explanation:
2 + 4 = 6 → indices = [1, 3]

---

Input:  numbers = [-1, 0], target = -1
Output: [1, 2]

Explanation:
-1 + 0 = -1 → indices = [1, 2]
