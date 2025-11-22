const { findPosition, countRounds, getNumbersReadByPosition } = require('./solution.js');

function test(numPeople, target, expectedPosition, description) {
  const result = findPosition(numPeople, target);
  const status = result === expectedPosition ? '✓' : '✗';
  console.log(`${status} ${description}: findPosition(${numPeople}, ${target}) = ${result} (expected ${expectedPosition})`);
  return result === expectedPosition;
}

console.log('=== BÀI TOÁN VÒNG TRÒN - TESTS ===\n');
console.log('Running tests...\n');

let passed = 0;
let failed = 0;

// Test case chính từ đề bài
if (test(20, 2012, 12, 'Bài toán gốc (2012 mod 20 = 12)')) passed++; else failed++;

// Edge cases
if (test(20, 20, 20, 'Chia hết - vị trí cuối (20 mod 20 = 0 → 20)')) passed++; else failed++;
if (test(20, 40, 20, 'Chia hết - vị trí cuối (40 mod 20 = 0 → 20)')) passed++; else failed++;
if (test(20, 1, 1, 'Số đầu tiên (1 mod 20 = 1)')) passed++; else failed++;
if (test(20, 21, 1, 'Vòng thứ 2 - vị trí 1 (21 mod 20 = 1)')) passed++; else failed++;

// Các test cases khác
if (test(10, 15, 5, 'Vòng tròn 10 người, số 15 (15 mod 10 = 5)')) passed++; else failed++;
if (test(5, 17, 2, 'Vòng tròn 5 người, số 17 (17 mod 5 = 2)')) passed++; else failed++;
if (test(100, 2025, 25, 'Vòng tròn lớn (2025 mod 100 = 25)')) passed++; else failed++;

// Test countRounds
console.log('\n--- Testing countRounds ---');
let roundsTest1 = countRounds(20, 2012) === 100;
console.log(`${roundsTest1 ? '✓' : '✗'} countRounds(20, 2012) = ${countRounds(20, 2012)} (expected 100 vòng)`);
if (roundsTest1) passed++; else failed++;

let roundsTest2 = countRounds(20, 20) === 0;
console.log(`${roundsTest2 ? '✓' : '✗'} countRounds(20, 20) = ${countRounds(20, 20)} (expected 0 vòng)`);
if (roundsTest2) passed++; else failed++;

let roundsTest3 = countRounds(20, 21) === 1;
console.log(`${roundsTest3 ? '✓' : '✗'} countRounds(20, 21) = ${countRounds(20, 21)} (expected 1 vòng)`);
if (roundsTest3) passed++; else failed++;

// Test getNumbersReadByPosition
console.log('\n--- Testing getNumbersReadByPosition ---');
let numbers12 = getNumbersReadByPosition(20, 12, 2012);
let numbersTest1 = numbers12.length === 101 && numbers12[0] === 12 && numbers12[100] === 2012;
console.log(`${numbersTest1 ? '✓' : '✗'} Vị trí 12 đọc ${numbers12.length} số (từ ${numbers12[0]} đến ${numbers12[numbers12.length - 1]})`);
if (numbersTest1) passed++; else failed++;

let numbers1 = getNumbersReadByPosition(20, 1, 100);
let numbersTest2 = numbers1.length === 5 && numbers1[0] === 1 && numbers1[4] === 81;
console.log(`${numbersTest2 ? '✓' : '✗'} Vị trí 1 đọc các số: ${numbers1.join(', ')} (expected: 1, 21, 41, 61, 81)`);
if (numbersTest2) passed++; else failed++;

// Verify chi tiết cho bài toán gốc
console.log('\n--- Kiểm tra chi tiết cho bài toán gốc ---');
const position = findPosition(20, 2012);
const rounds = countRounds(20, 2012);
const numbersRead = getNumbersReadByPosition(20, position, 2012);

console.log(`Vị trí: ${position}`);
console.log(`Số vòng hoàn thành: ${rounds}`);
console.log(`Số lượng số đã đọc: ${numbersRead.length}`);
console.log(`Các số đầu tiên: ${numbersRead.slice(0, 5).join(', ')}...`);
console.log(`Các số cuối cùng: ...${numbersRead.slice(-5).join(', ')}`);
console.log(`Công thức kiểm tra: ${position} + ${rounds} × 20 = ${position + rounds * 20}`);

console.log(`\n${'='.repeat(50)}`);
console.log(`Kết quả: ${passed} passed, ${failed} failed`);

if (failed === 0) {
  console.log('✓ TẤT CẢ TESTS PASSED!');
} else {
  console.log(`✗ CÓ ${failed} TESTS FAILED!`);
  process.exit(1);
}
