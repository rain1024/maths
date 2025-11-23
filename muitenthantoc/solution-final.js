/**
 * CÁCH GIẢI CUỐI CÙNG CHO LỚP 4
 * Sử dụng các điểm trên lưới để tính diện tích
 *
 * Các điểm:
 * P1: (0,0)   P4: (15,0)
 * P17: (15,15)  P18: (20,15)  P20: (15,20)
 */

console.log('=== BÀI TOÁN: TÍNH DIỆN TÍCH PHẦN TÔ ĐẬM ===\n');
console.log('Phần tô đậm: P20 → P17 → P18 → P1 → P20\n');

console.log('=== CÁCH GIẢI: CHIA THÀNH 2 TAM GIÁC ===\n');
console.log('Kẻ đường phụ P1-P17\n');

// ===============================
// TAM GIÁC 1: P1-P17-P20
// ===============================

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('PHẦN 1: TAM GIÁC P1-P17-P20');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

console.log('Cách tính: Hình thang P1-P4-P20-P17 - Tam giác P1-P4-P17\n');

// Hình thang P1-P4-P20-P17
// P1: (0,0)  P4: (15,0)  P20: (15,20)  P17: (15,15)
// Hai đáy NGANG: từ P1 đến P4 và từ P17 đến P20

console.log('Bước 1a: Hình thang P1-P4-P20-P17');
console.log('   P1: (0, 0)');
console.log('   P4: (15, 0)');
console.log('   P20: (15, 20)');
console.log('   P17: (15, 15)');

// Đáy 1: từ P1(0,0) đến P4(15,0) = 15cm (nằm ngang ở y=0)
// Đáy 2: từ P17(15,15) đến P20(15,20) = 5cm (thẳng đứng ở x=15)
// KHÔNG! Hai đáy này KHÔNG song song!

// Hãy xem lại: Hình thang có 2 đáy song song
// Nếu nhìn theo chiều ĐỨNG:
// - Đáy bên trái: P1(0,0) đến A(0,20) = 20cm
// - Đáy bên phải: P17(15,15) đến P20(15,20) = 5cm
// - Chiều cao (khoảng cách giữa 2 đáy): 15cm

const trap1_base1 = 20; // P1 đến A(0,20)
const trap1_base2 = 5;  // P17 đến P20
const trap1_height = 15; // khoảng cách ngang
const trap1_area = 0.5 * (trap1_base1 + trap1_base2) * trap1_height;

console.log('   → Hình thang với 2 đáy THẲNG ĐỨNG:');
console.log(`   Đáy 1 (bên trái): P1 đến A(0,20) = ${trap1_base1}cm`);
console.log(`   Đáy 2 (bên phải): P17 đến P20 = ${trap1_base2}cm`);
console.log(`   Chiều cao (khoảng cách ngang): ${trap1_height}cm`);
console.log(`   Diện tích = ½ × (${trap1_base1} + ${trap1_base2}) × ${trap1_height} = ${trap1_area}cm²\n`);

// Tam giác P1-A-P20 (phần NGOÀI hình thang)
const tri1_outside_base = 20;
const tri1_outside_height = 15;
const tri1_outside_area = 0.5 * tri1_outside_base * tri1_outside_height;

console.log('Bước 1b: Tam giác P1-A-P20 (bên NGOÀI)');
console.log('   P1: (0, 0)');
console.log('   A: (0, 20)');
console.log('   P20: (15, 20)');
console.log('   Tam giác VUÔNG tại A');
console.log(`   Cạnh góc vuông: ${tri1_outside_base}cm và ${tri1_outside_height}cm`);
console.log(`   Diện tích = ½ × ${tri1_outside_base} × ${tri1_outside_height} = ${tri1_outside_area}cm²\n`);

const triangle1_area = trap1_area - tri1_outside_area;

console.log('Bước 1c: Diện tích tam giác P1-P17-P20');
console.log(`   = Hình thang - Tam giác ngoài`);
console.log(`   = ${trap1_area} - ${tri1_outside_area}`);
console.log(`   = ${triangle1_area}cm²\n`);

// ===============================
// TAM GIÁC 2: P1-P17-P18
// ===============================

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('PHẦN 2: TAM GIÁC P1-P17-P18');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

console.log('Cách tính: Hình thang P1-B-P18-P17 - Tam giác P1-B-P18\n');

// Hình thang với 2 đáy NGANG
// Đáy dưới: P1(0,0) đến B(20,0) = 20cm
// Đáy trên: P17(15,15) đến P18(20,15) = 5cm
// Chiều cao: 15cm

const trap2_base1 = 20;
const trap2_base2 = 5;
const trap2_height = 15;
const trap2_area = 0.5 * (trap2_base1 + trap2_base2) * trap2_height;

console.log('Bước 2a: Hình thang P1-B-P18-P17');
console.log('   P1: (0, 0)');
console.log('   B: (20, 0)');
console.log('   P18: (20, 15)');
console.log('   P17: (15, 15)');
console.log(`   Đáy dưới: P1 đến B = ${trap2_base1}cm`);
console.log(`   Đáy trên: P17 đến P18 = ${trap2_base2}cm`);
console.log(`   Chiều cao: ${trap2_height}cm`);
console.log(`   Diện tích = ½ × (${trap2_base1} + ${trap2_base2}) × ${trap2_height} = ${trap2_area}cm²\n`);

// Tam giác P1-B-P18 (phần NGOÀI)
const tri2_outside_area = 0.5 * 20 * 15;

console.log('Bước 2b: Tam giác P1-B-P18 (bên NGOÀI)');
console.log('   P1: (0, 0)');
console.log('   B: (20, 0)');
console.log('   P18: (20, 15)');
console.log('   Tam giác VUÔNG tại B');
console.log(`   Cạnh góc vuông: 20cm và 15cm`);
console.log(`   Diện tích = ½ × 20 × 15 = ${tri2_outside_area}cm²\n`);

const triangle2_area = trap2_area - tri2_outside_area;

console.log('Bước 2c: Diện tích tam giác P1-P17-P18');
console.log(`   = Hình thang - Tam giác ngoài`);
console.log(`   = ${trap2_area} - ${tri2_outside_area}`);
console.log(`   = ${triangle2_area}cm²\n`);

// ===============================
// KẾT QUẢ CUỐI CÙNG
// ===============================

const totalArea = triangle1_area + triangle2_area;

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('KẾT QUẢ CUỐI CÙNG');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

console.log('Diện tích phần tô đậm:');
console.log(`   = Tam giác P1-P17-P20 + Tam giác P1-P17-P18`);
console.log(`   = ${triangle1_area} + ${triangle2_area}`);
console.log(`   = ${totalArea}cm²\n`);

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`✓✓✓ ĐÁP ÁN: ${totalArea}cm² ✓✓✓`);
console.log(`(Tương đương ${totalArea / 25} ô vuông)`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

module.exports = {
    totalArea,
    triangle1_area,
    triangle2_area
};
