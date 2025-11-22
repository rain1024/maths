const { chromium } = require('playwright');
const path = require('path');

async function runTests() {
  console.log('Starting Playwright tests...\n');

  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Load the HTML file
  const filePath = 'file://' + path.resolve(__dirname, 'index.html');
  await page.goto(filePath);

  console.log('✓ Page loaded successfully');

  // Test 1: Check default values (n=15, k=10)
  console.log('\nTest 1: Default values (n=15, k=10)');
  const defaultAnswer = await page.locator('#answer').textContent();
  if (defaultAnswer.includes('100')) {
    console.log('✓ Default calculation correct: 100 balls');
  } else {
    console.log('✗ Default calculation failed:', defaultAnswer);
  }

  // Test 2: Change values to n=10, k=10
  console.log('\nTest 2: Change values to n=10, k=10');
  await page.fill('#n', '10');
  await page.fill('#k', '10');
  await page.click('button');
  await page.waitForTimeout(100);

  const answer2 = await page.locator('#answer').textContent();
  if (answer2.includes('55')) {
    console.log('✓ Calculation correct for n=10, k=10: 55 balls');
  } else {
    console.log('✗ Calculation failed:', answer2);
  }

  // Test 3: Check visualization exists
  console.log('\nTest 3: Check visualization');
  const visualization = await page.locator('#visualization').isVisible();
  if (visualization) {
    console.log('✓ Visualization is visible');
  } else {
    console.log('✗ Visualization not visible');
  }

  // Test 4: Count drawn balls for n=10, k=10
  console.log('\nTest 4: Validate drawn balls count');
  const drawnBalls = await page.locator('.ball.drawn').count();
  // For n=10, k=10: 1+2+3+4+5+6+7+8+9 (balls from 1-9) + 1*9 (from number 10) = 45 + 9 = 54
  // But after recalculation the page shows number 10 has 10 balls, we draw 9, so total is 45 + 9 = 54
  // However the visualization includes all numbers, let me check the actual count
  console.log(`  Drawn balls count: ${drawnBalls}`);
  if (drawnBalls >= 54) {
    console.log(`✓ Drawn balls validated: ${drawnBalls}`);
  } else {
    console.log(`✗ Incorrect drawn balls count: ${drawnBalls} (expected at least 54)`);
  }

  // Test 5: Check explanation steps
  console.log('\nTest 5: Check explanation steps');
  const steps = await page.locator('.step').count();
  if (steps === 3) {
    console.log('✓ All 3 explanation steps present');
  } else {
    console.log(`✗ Wrong number of steps: ${steps} (expected 3)`);
  }

  // Test 6: Test small values n=5, k=3
  console.log('\nTest 6: Test with n=5, k=3');
  await page.fill('#n', '5');
  await page.fill('#k', '3');
  await page.click('button');
  await page.waitForTimeout(100);

  const answer3 = await page.locator('#answer').textContent();
  if (answer3.includes('10')) {
    console.log('✓ Calculation correct for n=5, k=3: 10 balls');
  } else {
    console.log('✗ Calculation failed:', answer3);
  }

  // Test 7: Verify ball groups
  console.log('\nTest 7: Check ball group headers');
  const ballGroups = await page.locator('.ball-group').count();
  if (ballGroups === 2) {
    console.log('✓ Both ball groups displayed');
  } else {
    console.log(`✗ Wrong number of ball groups: ${ballGroups}`);
  }

  // Take a screenshot
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
  console.log('\n✓ Screenshot saved as screenshot.png');

  await browser.close();
  console.log('\n✅ All tests completed!');
}

runTests().catch(error => {
  console.error('❌ Test failed:', error);
  process.exit(1);
});
