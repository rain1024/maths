const { calculateShadedArea, getSolution } = require('./solution.js');

function test(testName, actual, expected, description) {
    const status = actual === expected ? '✓' : '✗';
    console.log(`${status} ${testName}: ${description}`);
    console.log(`   Result: ${actual}, Expected: ${expected}`);
    return actual === expected;
}

console.log('=== BÀI TOÁN HÌNH HỌC - TESTS ===\n');
console.log('Running tests...\n');

let passed = 0;
let failed = 0;

// Test calculateShadedArea
console.log('--- Testing calculateShadedArea ---');
const result = calculateShadedArea();

if (test('Square Area', result.squareArea, 25, 'Diện tích 1 ô vuông')) passed++; else failed++;
if (test('Side Length', result.sideLength, 5, 'Cạnh ô vuông')) passed++; else failed++;
if (test('Shaded Squares', result.shadedSquares, 3, 'Số ô vuông tô đậm')) passed++; else failed++;
if (test('Shaded Area', result.shadedArea, 75, 'Diện tích phần tô đậm')) passed++; else failed++;
if (test('Grid Size', result.gridSize, 3, 'Kích thước lưới')) passed++; else failed++;
if (test('Total Grid Area', result.totalGridArea, 225, 'Tổng diện tích lưới')) passed++; else failed++;

// Test getSolution
console.log('\n--- Testing getSolution ---');
const solution = getSolution();

const hasExplanation = solution.explanation && Array.isArray(solution.explanation);
if (test('Has Explanation', hasExplanation, true, 'Có phần giải thích')) passed++; else failed++;

if (hasExplanation) {
    const hasFourSteps = solution.explanation.length === 4;
    if (test('Explanation Steps', hasFourSteps, true, 'Có 4 bước giải thích')) passed++; else failed++;

    if (hasFourSteps) {
        const step1 = solution.explanation[0];
        const step2 = solution.explanation[1];
        const step3 = solution.explanation[2];
        const step4 = solution.explanation[3];

        if (test('Step 1 Title', step1.step === 1 && !!step1.title, true, 'Bước 1 có tiêu đề')) passed++; else failed++;
        if (test('Step 2 Title', step2.step === 2 && !!step2.title, true, 'Bước 2 có tiêu đề')) passed++; else failed++;
        if (test('Step 3 Title', step3.step === 3 && !!step3.title, true, 'Bước 3 có tiêu đề')) passed++; else failed++;
        if (test('Step 4 Title', step4.step === 4 && !!step4.title, true, 'Bước 4 có tiêu đề')) passed++; else failed++;
    } else {
        failed += 4;
    }
} else {
    failed += 5;
}

// Verify final answer
console.log('\n--- Kiểm tra kết quả cuối cùng ---');
console.log(`Diện tích 1 ô vuông: ${solution.squareArea}cm²`);
console.log(`Cạnh ô vuông: ${solution.sideLength}cm`);
console.log(`Lưới: ${solution.gridSize}×${solution.gridSize} ô vuông`);
console.log(`Số ô tô đậm: ${solution.shadedSquares} ô`);
console.log(`\nĐIỆN TÍCH PHẦN TÔ ĐẬM: ${solution.shadedArea}cm²`);

console.log('\n--- Các bước giải ---');
solution.explanation.forEach(step => {
    console.log(`\nBước ${step.step}: ${step.title}`);
    console.log(`  ${step.description}`);
    console.log(`  ${step.calculation}`);
});

console.log(`\n${'='.repeat(50)}`);
console.log(`Kết quả: ${passed} passed, ${failed} failed`);

if (failed === 0) {
    console.log('✓ TẤT CẢ TESTS PASSED!');
} else {
    console.log(`✗ CÓ ${failed} TESTS FAILED!`);
    process.exit(1);
}
