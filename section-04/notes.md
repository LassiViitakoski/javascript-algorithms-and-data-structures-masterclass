# Problem Solving Approach

### What is an Algoritm?

- A process or set of steps to accomplish a certain task.

### Why do I need to know this?

- Almost everything that you do in programming involves some kind of algorithm!
- It's the <u>foundation</u> for being a successful problem solver and developer
- Also... <u>INTERVIEWS</u>

### How do you Improve?

- Devise a plan for solving problems
- Master common problem solving patterns

### Problem Solving

- Understand the Problem
- Explore Concrete Examples
- Break it Down
- Solve / Simplify
- Look Back and Refactor

### Step 1: Understand The Problem

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
5. How should I label the important pieces of data that are a part of the problem?

### Step 2: Concrete Examples

- Start with Simple Examples
- Progress to More Complex Examples
- Explore Examples with Empty Inputs
- Explore Examples with Invalid Inputs

* Example
  - Write a function which takes in a string and returns counts of each character in the string.

```javascript
  charCount("aaaa"); // {a: 4}
  charCount("hello"); // {h: 1, e: 1, l: 2, o: 1}

  charCount("my $phone number is 182763"); // numbers?, $-signs?, whitespaces?
  charCount("Hello hi"); // uppercases?

  charCount("") // empty input?
```

### Step 3: Break It Down

- Explicitly write out the steps you need to take.
- Example continues...

```javascript
  function charCount(str) {
    // make object to return at end
    // loop over string, for each character...
        // if the char is a number/letter AND is a key in object, add one to count
        // if the char is a number/letter AND not in object, add it and set value to 1
        // if the char is something else (space, period, etc.) don't do anything
    // return object at the end      
  }
```

### Step 4: Solve / Simplify

- Solve the Problem
- If you can't... Solve a Simpler Problem!

* Simplify
  - Find the core difficulty in what you're trying to do
  - Temporarily ignore that difficulty
  - Write a simplified solution
  - Then incorporate that difficulty back in

- Example continues...
```javascript
  function charCount(str) {
    // make object to return at end
    let result = {};
    // loop over string, for each character...
    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase();
        
      // if the char is a number/letter AND is a key in object, add one to count
      if (result[char] > 0) {
        result[char]++;
      }
      // if the char is a number/letter AND not in object, add it and set value to 1
      else {
        result[char] = 1;
      }
      // if the char is something else (space, period, etc.) don't do anything
    }
    // return object at the end
    return result;
  }
```

### Step 5: Look Back and Refactor

- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?

```javascript
  function charCount(str) {
    let obj = {};

    for (let char of str) {
      if (isAlphaNumeric(char)) {
        char = char.toLowerCase();

        obj[char] = ++obj[char] || 1;
      }
    }
    
    return obj;
  }

  function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);

    if (
      !(code > 47 && code < 58) &&
      !(code > 64 && code < 91) &&
      !(code > 96 && code < 123)
    ) {
      return false;
    }

    return true;
  }
```