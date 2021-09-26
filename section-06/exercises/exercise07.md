# Sliding Window - findLongestSubstring

- Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters
- Time Complexity: O(n)
- Input / Output

```javascript
findLongestSubstring(''); // 0
findLongestSubstring('rithmschool'); // 7
findLongestSubstring('thisisawesome'); // 6
findLongestSubstring('thecatinthehat'); // 7
findLongestSubstring('bbbbbb'); // 1
findLongestSubstring('longestsubstring'); // 8
findLongestSubstring('thisisshowwedoit'); // 6
```

- Solution

```javascript
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
```