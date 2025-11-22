const solve = require('./solution.js');

function test(n, k, expected, description) {
  const result = solve(n, k);
  const status = result === expected ? '✓' : '✗';
  console.log(`${status} ${description}: solve(${n}, ${k}) = ${result} (expected ${expected})`);
  return result === expected;
}

console.log('Running tests...\n');

let passed = 0;
let failed = 0;

// Test case from problem
if (test(15, 10, 100, 'Original problem')) passed++; else failed++;

// Edge cases
if (test(10, 10, 55, 'k equals n (1+2+...+9 + 1 = 45+1+9 = 55)')) passed++; else failed++;
if (test(20, 5, 75, 'Smaller k value (1+2+3+4 + 16*4 + 1 = 10+64+1 = 75)')) passed++; else failed++;
if (test(5, 3, 10, 'Small values')) passed++; else failed++;
if (test(10, 2, 11, 'k = 2')) passed++; else failed++;

// Verify manually for n=15, k=10:
// Numbers 1-9: sum = 1+2+3+4+5+6+7+8+9 = 45
// Numbers 10-15 (6 numbers): 6 * 9 = 54
// Total: 45 + 54 + 1 = 100 ✓

console.log(`\nResults: ${passed} passed, ${failed} failed`);
