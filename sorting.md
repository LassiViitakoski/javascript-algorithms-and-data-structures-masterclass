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

### Intro to "Crazier" Sorts

### Why Learn This?

- The sorting algorithms we've learner so far don't scale well
- Try out bubble sort on an array of 100000 elements, it will take quite some time!

### Faster Sorts

- There is a family of sorting algorithms that can improve time complexity from O(n<sup>2</sup>) to O(n log n)
- There's a tradeoff between efficiency and simplicity
- The mroe efficient algorithms are much less simple, and generally take longer to understand