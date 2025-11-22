# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a mathematical problem solver repository focused on a combinatorics problem ("Bài toán rút bi" - Ball Drawing Problem). The problem calculates the minimum number of balls needed to guarantee getting k balls with the same number from a box containing 1 ball numbered 1, 2 balls numbered 2, up to n balls numbered n.

## Commands

### Testing
- `npm test` or `yarn test` - Run unit tests using Node.js ([test.js](baitoanrutbi/test.js))
- `npm run test:ui` or `yarn test:ui` - Run Playwright UI tests (headless mode)
- `npm run test:visual` or `yarn test:visual` - Run Playwright visual tests (headed mode with slow motion)

### Development
- `node baitoanrutbi/solution.js` - Run the solution with the example case (n=15, k=10)
- Open [index.html](baitoanrutbi/index.html) in a browser - Interactive visualization of the problem

## Architecture

### Core Logic ([solution.js](baitoanrutbi/solution.js))
The `solve(n, k)` function implements the mathematical solution:
1. **Phase 1**: Draw all balls from numbers 1 to k-1 (these can never have k balls)
   - Sum: 1 + 2 + ... + (k-1) = k*(k-1)/2
2. **Phase 2**: Draw k-1 balls from each number in range [k, n] (worst case)
   - Count: (n - k + 1) * (k - 1)
3. **Final ball**: One more ball guarantees k balls of the same number
   - Total: Phase1 + Phase2 + 1

### Testing Structure
- **[test.js](baitoanrutbi/test.js)**: Basic unit tests with edge cases (k=n, small values, k=2)
- **[playwright.test.js](baitoanrutbi/playwright.test.js)**: Automated UI tests validating:
  - Default values and calculations
  - Visualization rendering (ball groups, drawn balls count)
  - Explanation steps (expects exactly 3 steps)
  - Screenshot capture for visual regression
- **[playwright.visual.js](baitoanrutbi/playwright.visual.js)**: Interactive visual tests with:
  - Headed browser mode (headless: false)
  - 500ms slow motion for observation
  - Animated ball highlighting
  - Multiple test cases shown sequentially

### UI Components ([index.html](baitoanrutbi/index.html))
- Input controls for n and k parameters
- Real-time calculation and visualization
- Ball groups showing:
  - Numbers 1 to k-1 (exhausted completely)
  - Numbers k to n (partially drawn)
- Visual indicators: `.ball.drawn` for drawn balls, `.ball-group` containers
- Three-step explanation section (`.step` elements)

## Key Implementation Details

The algorithm uses the pigeonhole principle. The worst case occurs when:
- We exhaust all balls from numbers that cannot have k balls (1 to k-1)
- We draw exactly k-1 balls from every number that could have k balls (k to n)
- Drawing one more ball must come from a number ≥ k, guaranteeing the kth ball

Example (n=15, k=10):
- Numbers 1-9: 1+2+...+9 = 45 balls
- Numbers 10-15 (6 numbers): 6 × 9 = 54 balls
- Final ball: +1
- Total: 100 balls
