// Suppose we want to write a function that calculates the
// sum of all numbers from 1 up to (and including) some number n

// Slower version
function addUpToSlower(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

const t1 = performance.now();
addUpTo(1000000000);
const t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
// Time Elapsed: 0.732300000011921 seconds

// Faster version
function addUpToFaster(n) {
  return (n * (n + 1)) / 2;
}

const time1 = performance.now();
addUpToFaster(1000000000);
const time2 = performance.now();

console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds`);
// Time Elapsed: 0 seconds
