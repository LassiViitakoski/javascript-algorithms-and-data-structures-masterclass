# Is Palindrome

- Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

- My Solution

```javascript
function isPalindrome(string) {
  const { length } = string;
  const lastIndex = length - 1;

  if (length < 2) return true;
  if (!(string[0] === string[lastIndex])) return false;

  return isPalindrome(string.slice(1, lastIndex));
}
```