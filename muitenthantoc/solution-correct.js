/**
 * CÁCH GIẢI ĐÚNG CHO HỌC SINH LỚP 4
 * Sử dụng hình chữ nhật bù trừ với các tam giác và hình chữ nhật
 */

console.log('=== BÀI TOÁN: TÍNH DIỆN TÍCH PHẦN TÔ ĐẬM ===\n');
console.log('Đa giác: P20-P17-P18-P1');
console.log('P1: (0,0), P17: (15,15), P18: (20,15), P20: (15,20)\n');

console.log('=== CÁCH GIẢI: HÌNH CHỮ NHẬT BÙ TRỪ ===\n');

// Hình chữ nhật bao quanh
console.log('Bước 1: Vẽ hình chữ nhật bao quanh');
console.log('   4 đỉnh: (0,0), (20,0), (20,20), (0,20)');
console.log('   Kích thước: 20cm × 20cm');
const rectArea = 20 * 20;
console.log(`   Diện tích: ${rectArea} cm²\n`);

console.log('Bước 2: Tính diện tích các hình BÊN NGOÀI phần tô đậm\n');

// Tam giác 1: góc dưới trái
console.log('① Tam giác vuông (góc dưới trái)');
console.log('   3 đỉnh: (0,0), (15,0), (0,15)');
console.log('   Cạnh góc vuông: 15cm và 15cm');
const tri1 = 0.5 * 15 * 15;
console.log(`   Diện tích = ½ × 15 × 15 = ${tri1} cm²\n`);

// Hình chữ nhật 2: phía trên trái
console.log('② Hình chữ nhật (phía trên trái)');
console.log('   4 đỉnh: (0,15), (15,15), (15,20), (0,20)');
console.log('   Kích thước: 15cm × 5cm');
const rect2 = 15 * 5;
console.log(`   Diện tích = 15 × 5 = ${rect2} cm²\n`);

// Tam giác 3: góc trên phải
console.log('③ Tam giác vuông (góc trên phải)');
console.log('   3 đỉnh: (15,20), (20,20), (20,15)');
console.log('   Cạnh góc vuông: 5cm và 5cm');
const tri3 = 0.5 * 5 * 5;
console.log(`   Diện tích = ½ × 5 × 5 = ${tri3} cm²\n`);

// Hình thang 4: bên phải
console.log('④ Hình thang (bên phải)');
console.log('   4 đỉnh: (15,0), (20,0), (20,15), (15,15)');
console.log('   Hai đáy song song: 15cm và 5cm');
console.log('   Chiều cao: 5cm');
console.log('   KHÔNG! Đây không phải hình thang!');
console.log('   Hãy chia thành 2 tam giác...\n');

// Tam giác 4a: phần dưới
console.log('④a Tam giác vuông (góc dưới phải - dưới)');
console.log('   3 đỉnh: (15,0), (20,0), (15,15)');
console.log('   Cạnh góc vuông: 5cm và 15cm');
const tri4a = 0.5 * 5 * 15;
console.log(`   Diện tích = ½ × 5 × 15 = ${tri4a} cm²\n`);

// Tam giác 4b: phần trên
console.log('④b Tam giác (góc dưới phải - trên)');
console.log('   3 đỉnh: (20,0), (20,15), (15,15)');
console.log('   Cạnh góc vuông: 5cm và 15cm');
const tri4b = 0.5 * 5 * 15;
console.log(`   Diện tích = ½ × 5 × 15 = ${tri4b} cm²\n`);

console.log('Khoan! Tam giác 4a và 4b CHỒNG LẤP!');
console.log('Thật ra (15,0)-(20,0)-(20,15)-(15,15) là hình CHỮ NHẬT!');
const rect4 = 5 * 15;
console.log(`Hình chữ nhật: 5 × 15 = ${rect4} cm²\n`);

// Tổng diện tích bên ngoài
const totalOutside = tri1 + rect2 + tri3 + rect4;
console.log(`Bước 3: Tổng diện tích BÊN NGOÀI`);
console.log(`   = ${tri1} + ${rect2} + ${tri3} + ${rect4}`);
console.log(`   = ${totalOutside} cm²\n`);

// Diện tích phần tô đậm
const shadedArea = rectArea - totalOutside;
console.log(`Bước 4: Diện tích phần tô đậm`);
console.log(`   = Hình chữ nhật - Phần bên ngoài`);
console.log(`   = ${rectArea} - ${totalOutside}`);
console.log(`   = ${shadedArea} cm²\n`);

console.log(`✓✓✓ ĐÁP ÁN: ${shadedArea} cm² ✓✓✓`);
console.log(`(Tương đương ${shadedArea / 25} ô vuông)`);

module.exports = { shadedArea };
