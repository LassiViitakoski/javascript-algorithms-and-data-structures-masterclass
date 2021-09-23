# Analyzing Performance of Arrays and Objects


### When to use objects?

- When you don't need order
- When you need fast access / insertion and removal

### Big O of Objects

- Insertion - O(1)
- Removal - O(1)
- Searching - O(n)
- Access - O(1)

* When you don't need ordering, objects are an excellent choice!

### Big O of Object Methods

- Object.keys - O(n)
- Object.values - O(n)
- Object.entries - O(n)
- hasOwnProperty - O(1)

### When To Use Arrays?

- When you need order
- When you need fast access / insertion and removal (sort of...)

### Big O of Arrays

- Insertion - It depends...
- Removal - It depends...
- Searching - O(n)
- Access - O(1)

### Big O of Array Methods

- push - O(1)
- pop - O(1)
- shift - O(n)
- unshift - O(n)
- concat - O(n)
- slice - O(n)
- splice - O(n)
- sort - O(n * log n)
- forEach/map/filter/reduce/etc - O(n)