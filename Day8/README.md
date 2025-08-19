# 🛤️ Simplify Path — LeetCode 71 (Medium)

## 📖 Problem Statement  
Given an **absolute Unix-style file path** (always starting with `/`), convert it into its **simplified canonical form**.  

### Rules of a Unix-style path:
- `.` → current directory (ignore it).  
- `..` → parent directory (go one level up if possible).  
- Multiple slashes `//` → treated as a single `/`.  
- Any sequence like `...` or `....` → treated as **valid folder names** (not special).  

### Requirements for the canonical path:
1. Must start with a single `/`.  
2. Directories separated by **exactly one slash `/`**.  
3. No trailing slash unless it's the root `/`.  
4. No `.` or `..` tokens remaining.  

---

## 🧩 Examples

### Example 1
**Input:** `path = "/home/"`  
**Output:** `"/home"`  

### Example 2
**Input:** `path = "/home//foo/"`  
**Output:** `"/home/foo"`  

### Example 3
**Input:** `path = "/home/user/Documents/../Pictures"`  
**Output:** `"/home/user/Pictures"`  

### Example 4  
**Input:** `path = "/../"`  
**Output:** `"/"`  

### Example 5  
**Input:** `path = "/.../a/../b/c/../d/./"`  
**Output:** `"/.../b/d"`  

---

## ⚙️ Constraints
- `1 <= path.length <= 3000`  
- Path contains only English letters, digits, `.`, `/`, or `_`.  
- Path is always **valid** and absolute (starts with `/`).  
