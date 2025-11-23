/**
 * CÁCH GIẢI ĐÚNG CHO LỚP 4
 * Kẻ đường phụ P1-P17 để chia thành các hình đơn giản
 */

console.log('=== BÀI TOÁN: TÍNH DIỆN TÍCH PHẦN TÔ ĐẬM ===\n');
console.log('Đa giác: P20-P17-P18-P1');
console.log('P1: (0,0), P17: (15,15), P18: (20,15), P20: (15,20)\n');

console.log('=== CÁCH GIẢI: KẺ ĐƯỜNG PHỤ P1-P17 ===\n');

// PHẦN 1: Tam giác P1-P17-P20
console.log('PHẦN 1: TAM GIÁC P1-P17-P20\n');

console.log('Cách tính: Hình thang - Tam giác');

// Hình thang: có 2 đáy song song là đường thẳng đứng
// Đáy 1: từ P1(0,0) đến (0,20) = 20cm
// Đáy 2: từ P17(15,15) đến P20(15,20) = 5cm
// Chiều cao: khoảng cách ngang = 15cm

const trapezoidBase1 = 20; // cm
const trapezoidBase2 = 5;  // cm
const trapezoidHeight = 15; // cm
const trapezoidArea = 0.5 * (trapezoidBase1 + trapezoidBase2) * trapezoidHeight;

console.log('Bước 1a: Tính diện tích hình thang');
console.log('   4 đỉnh: P1(0,0), A(0,20), P20(15,20), P17(15,15)');
console.log(`   Đáy lớn = ${trapezoidBase1}cm (từ P1 đến A)`);
console.log(`   Đáy nhỏ = ${trapezoidBase2}cm (từ P17 đến P20)`);
console.log(`   Chiều cao = ${trapezoidHeight}cm`);
console.log(`   Diện tích = ½ × (${trapezoidBase1} + ${trapezoidBase2}) × ${trapezoidHeight} = ${trapezoidArea}cm²\n`);

// Tam giác: P1-A-P20 (tam giác NGOÀI)
// 3 đỉnh: P1(0,0), A(0,20), P20(15,20)
const triangleBase = 20;  // từ P1 đến A
const triangleHeight = 15; // từ A đến P20
const triangleArea = 0.5 * triangleBase * triangleHeight;

console.log('Bước 1b: Tính diện tích tam giác P1-A-P20 (phần NGOÀI)');
console.log('   3 đỉnh: P1(0,0), A(0,20), P20(15,20)');
console.log('   Đây là tam giác VUÔNG tại A');
console.log(`   Cạnh góc vuông: ${triangleBase}cm và ${triangleHeight}cm`);
console.log(`   Diện tích = ½ × ${triangleBase} × ${triangleHeight} = ${triangleArea}cm²\n`);

const triangle1Area = trapezoidArea - triangleArea;
console.log(`Bước 1c: Diện tích tam giác P1-P17-P20`);
console.log(`   = Hình thang - Tam giác P1-A-P20`);
console.log(`   = ${trapezoidArea} - ${triangleArea}`);
console.log(`   = ${triangle1Area}cm²\n`);

// PHẦN 2: Tam giác P1-P17-P18
console.log('PHẦN 2: TAM GIÁC P1-P17-P18\n');

console.log('Cách tính: Hình thang - Tam giác');

// Hình thang: P1-B-P18-P17
// B là điểm (0,15)
// Đáy 1: từ P1(0,0) đến B(0,15) = 15cm
// Đáy 2: từ P17(15,15) đến P18(20,15) = 5cm
// Chiều cao: 15cm (nếu tính từ trục y=0 đến y=15)
// KHÔNG! Đáy song song phải nằm ngang hoặc dọc

// Cách khác: Hình thang với đáy ngang
// Đáy 1 (dưới): từ P1(0,0) đến C(20,0) = 20cm
// Đáy 2 (trên): từ P17(15,15) đến P18(20,15) = 5cm
// Chiều cao: 15cm

const trapezoid2Base1 = 20;
const trapezoid2Base2 = 5;
const trapezoid2Height = 15;
const trapezoid2Area = 0.5 * (trapezoid2Base1 + trapezoid2Base2) * trapezoid2Height;

console.log('Bước 2a: Tính diện tích hình thang');
console.log('   4 đỉnh: P1(0,0), C(20,0), P18(20,15), P17(15,15)');
console.log(`   Đáy dưới = ${trapezoid2Base1}cm`);
console.log(`   Đáy trên = ${trapezoid2Base2}cm`);
console.log(`   Chiều cao = ${trapezoid2Height}cm`);
console.log(`   Diện tích = ½ × (${trapezoid2Base1} + ${trapezoid2Base2}) × ${trapezoid2Height} = ${trapezoid2Area}cm²\n`);

// Tam giác: P1-C-P18 (phần NGOÀI)
const triangle2OutsideArea = 0.5 * 20 * 15;

console.log('Bước 2b: Tính diện tích tam giác P1-C-P18 (phần NGOÀI)');
console.log('   3 đỉnh: P1(0,0), C(20,0), P18(20,15)');
console.log('   Tam giác VUÔNG tại C');
console.log(`   Cạnh góc vuông: 20cm và 15cm`);
console.log(`   Diện tích = ½ × 20 × 15 = ${triangle2OutsideArea}cm²\n`);

const triangle2Area = trapezoid2Area - triangle2OutsideArea;
console.log(`Bước 2c: Diện tích tam giác P1-P17-P18`);
console.log(`   = Hình thang - Tam giác P1-C-P18`);
console.log(`   = ${trapezoid2Area} - ${triangle2OutsideArea}`);
console.log(`   = ${triangle2Area}cm²\n`);

// TỔNG DIỆN TÍCH PHẦN TÔ ĐẬM
const totalShadedArea = triangle1Area + triangle2Area;

console.log('=== KẾT QUẢ CUỐI CÙNG ===\n');
console.log(`Diện tích phần tô đậm = Tam giác 1 + Tam giác 2`);
console.log(`   = ${triangle1Area} + ${triangle2Area}`);
console.log(`   = ${totalShadedArea}cm²\n`);

console.log(`✓✓✓ ĐÁP ÁN: ${totalShadedArea}cm² ✓✓✓`);
console.log(`(Tương đương ${totalShadedArea / 25} ô vuông)`);

module.exports = { totalShadedArea };
