# 🧠 Valid Parentheses Problem

## 📝 Problem Statement

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['`, and `']'`, determine if the input string is **valid**.

---

### ✅ A string is valid if:

1. **Open brackets** are closed by the **same type** of brackets.
2. **Open brackets** are closed in the **correct order**.
3. Every **closing bracket** has a corresponding **open bracket**.

---

## 💡 Examples

| Input        | Output |
|--------------|--------|
| `"()"`       | `true` |
| `"()[]{}"`   | `true` |
| `"(]"`       | `false` |
| `"([])"`     | `true` |
| `"([)]"`     | `false` |

---

## 📌 Constraints

- `1 <= s.length <= 10⁴`
- `s` consists only of the characters: `'('`, `')'`, `'{'`, `'}'`, `'['`, `']'`

---