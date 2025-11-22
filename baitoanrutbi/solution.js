function solve(n, k) {
  // In the box: 1 ball numbered 1, 2 balls numbered 2, ..., n balls numbered n
  // Find minimum balls to guarantee k balls with the same number

  let worstCase = 0;

  // Numbers 1 to (k-1) can never have k balls, so we draw all of them
  for (let i = 1; i < k; i++) {
    worstCase += i;
  }

  // Numbers k to n can have k or more balls
  // Worst case: draw (k-1) balls from each of these numbers
  let numbersWithEnoughBalls = n - k + 1;
  worstCase += numbersWithEnoughBalls * (k - 1);

  // Draw 1 more ball, it must come from a number >= k, giving us k balls with that number
  worstCase += 1;

  return worstCase;
}

// Export for testing
module.exports = solve;

// Example: n=15, k=10
if (require.main === module) {
  console.log(solve(15, 10)); // 100

  // Explanation:
  // Numbers 1-9: draw all = 1+2+3+4+5+6+7+8+9 = 45 balls
  // Numbers 10-15 (6 numbers): draw 9 from each = 6 * 9 = 54 balls
  // Total so far: 45 + 54 = 99 balls
  // Draw 1 more ball (must be from 10-15), giving us 10 balls with that number
  // Answer: 100 balls
}
