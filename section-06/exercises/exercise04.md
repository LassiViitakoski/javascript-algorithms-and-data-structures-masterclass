# Multiple pointers - isSubsequence

- Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing
- Your solution MUST have AT LEAST the following complexities
  - Time Complexity: O(n + m)
  - Space Complexity: O(1)
- Input / Output

```javascript
  isSubsequence('hello', 'hello world') // true
  isSubsequence('sing', 'string') // true
  isSubsequence('abc', 'abracadabra') // true
  isSubsequence('abc', 'acb') // false (order matters)
```

- My Solution

```javascript
  function isSubsequence(first, second) {
    let firstPointer = 0;
    let secondPointer = 0;

    while (secondPointer < second.length) {
      if (first[firstPointer] === second[secondPointer]) firstPointer++;
      if (firstPointer === first.length) return true;

      secondPointer++;
    }

    return false;
  }
```