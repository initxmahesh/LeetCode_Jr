var majorityElement = function (nums) {
  let map = {};
  for (let ele of nums) {
    map[ele] = (map[ele] || 0) + 1;
  }
  for (let key of Object.keys(map)) {
    if (map[key] > nums.length / 2) return Number(key);
  }
};
