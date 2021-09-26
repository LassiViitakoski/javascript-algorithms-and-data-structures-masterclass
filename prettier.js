function findLongestSubstring(string) {
  let longest = 0;
  let start = 0;
  let used = {};

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (used[char]) {
      start = Math.max(start, used[char]);
    }

    longest = Math.max(longest, i - start + 1);
    used[char] = i + 1;
  }

  console.log(used);

  return longest;
}
