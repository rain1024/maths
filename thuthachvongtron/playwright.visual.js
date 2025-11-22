const { chromium } = require('playwright');
const path = require('path');

async function runVisualTests() {
  console.log('Starting visual Playwright tests...\n');

  // Launch browser in headed mode (visible)
  const browser = await chromium.launch({
    headless: false,
    slowMo: 500 // Slow down actions by 500ms so you can see them
  });

  const page = await browser.newPage();

  // Load the HTML file
  const filePath = 'file://' + path.resolve(__dirname, 'index.html');
  await page.goto(filePath);

  console.log('✓ Page loaded - you should see the browser window');

  // Test 1: Default values (n=15, k=10)
  console.log('\n[Test 1] Checking default values (n=15, k=10)...');
  await page.waitForTimeout(1000);
  const defaultAnswer = await page.locator('#answer').textContent();
  console.log('  Answer:', defaultAnswer);

  // Test 2: Change to n=10, k=10
  console.log('\n[Test 2] Changing to n=10, k=10...');
  await page.fill('#n', '10');
  await page.waitForTimeout(500);
  await page.fill('#k', '10');
  await page.waitForTimeout(500);

  console.log('  Clicking calculate button...');
  await page.click('button');
  await page.waitForTimeout(1500);

  const answer2 = await page.locator('#answer').textContent();
  console.log('  Answer:', answer2);

  // Test 3: Highlight drawn balls
  console.log('\n[Test 3] Highlighting drawn balls...');
  await page.evaluate(() => {
    const drawnBalls = document.querySelectorAll('.ball.drawn');
    drawnBalls.forEach((ball, index) => {
      setTimeout(() => {
        ball.style.transform = 'scale(1.2)';
        ball.style.transition = 'transform 0.2s';
      }, index * 20);
    });
  });
  await page.waitForTimeout(2000);

  // Test 4: Try different values
  console.log('\n[Test 4] Testing n=5, k=3...');
  await page.fill('#n', '5');
  await page.waitForTimeout(500);
  await page.fill('#k', '3');
  await page.waitForTimeout(500);
  await page.click('button');
  await page.waitForTimeout(1500);

  const answer3 = await page.locator('#answer').textContent();
  console.log('  Answer:', answer3);

  // Test 5: Try n=20, k=5
  console.log('\n[Test 5] Testing n=20, k=5...');
  await page.fill('#n', '20');
  await page.waitForTimeout(500);
  await page.fill('#k', '5');
  await page.waitForTimeout(500);
  await page.click('button');
  await page.waitForTimeout(1500);

  const answer4 = await page.locator('#answer').textContent();
  console.log('  Answer:', answer4);

  // Scroll to show full page
  console.log('\n[Test 6] Scrolling through the page...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
  await page.waitForTimeout(500);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1000);
  await page.evaluate(() => window.scrollTo(0, 0));

  console.log('\n✅ Visual tests completed!');
  console.log('   Browser will stay open for 5 more seconds...\n');

  await page.waitForTimeout(5000);
  await browser.close();

  console.log('   Browser closed.');
}

runVisualTests().catch(error => {
  console.error('❌ Test failed:', error);
  process.exit(1);
});
