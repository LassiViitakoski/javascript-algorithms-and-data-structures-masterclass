# Frequency Counter / Multiple Pointers - areThereDuplicates

- Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the argument passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern
- Restrictions:
  - Time: O(n)
  - Space: O(n)
- Bonus
  - Time: O(n log n)
  - Space: O(1)
  - Input / Output:
```javascript
areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates('a', 'b', 'c', 'a'); // true
```

- My own solution with frequency counter pattern
```javascript
function areThereDuplicates(...args) {
  let frequencyCounter = {};

  for (let val of args) {
    if (frequencyCounter[val]) return true;

    frequencyCounter[val] = true;
  }

  return false;
}
```

- My own solution with pointers
```javascript
function areThereDuplicates(...args) {
  args.sort();

  let left = 0;
  let next = 1;

  while (next < args.length) {
    if (args[left] === args[next]) {
      return true;
    }

    left++;
    next++;
  }

  return false;
}
```

- One line solution by using set
```javascript
function areThereDuplicates(...args) {
  return new Set(arguments).size !== arguments.length;
}
```