var simplifyPath = function (path) {
  const stack = [];
  for (let char of path.split("/")) {
    if (char == "" || char == ".") {
      continue;
    }
    if (char == "..") {
      if (stack.length) {
        stack.pop();
      }
    } else {
      stack.push(char);
    }
  }
  return "/" + stack.join("/");
};






