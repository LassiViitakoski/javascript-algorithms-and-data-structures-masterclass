# Introduction to sorting

### What is sorting?

- Sorting is the process of rearranging the items in a collection (e.g an array) so that the items are in some kind of order.
- Examples
  - Sorting numbers from smallest to largest
  - Sorting names alphabetically
  - Sorting movies based on release year
  - Sorting movies based on revenue

### Why do we need to learn this?

- Sorting is an incredible common task, so it's good to know how it works
- There are many different ways to sort things, and different techniques have their own advantages and disadvantages

### Built-In JavaScript Sorting

- It doesn't always work the way you expect.
- The comparator function looks at pairs of element (a and b), determines their sort order based on the return value
  - If it returns a negative number, a should come before b
  - If it returns a positive number, a should come after b