/**
 * Cách giải đơn giản cho lớp 4
 * Chia phần tô đậm P20-P17-P18-P1 thành các hình đơn giản
 */

// Tọa độ (đơn vị: cm)
const P1 = { x: 0, y: 0 };
const P17 = { x: 15, y: 15 };
const P18 = { x: 20, y: 15 };
const P20 = { x: 15, y: 20 };

console.log('=== CÁCH GIẢI CHO LỚP 4 ===\n');
console.log('Tọa độ các điểm:');
console.log(`P1: (${P1.x}, ${P1.y})`);
console.log(`P17: (${P17.x}, ${P17.y})`);
console.log(`P18: (${P18.x}, ${P18.y})`);
console.log(`P20: (${P20.x}, ${P20.y})`);

// Cách 1: Kẻ đường thẳng đứng từ P17 xuống trục x (tạo điểm Q)
const Q = { x: P17.x, y: 0 };

console.log('\n=== CÁCH 1: Kẻ đường thẳng đứng từ P17 xuống P1 ===\n');
console.log(`Điểm Q: (${Q.x}, ${Q.y})`);

// Hình 1: Tam giác vuông P1-Q-P17
const tri1_base = Q.x - P1.x; // 15 cm
const tri1_height = P17.y - P1.y; // 15 cm
const tri1_area = 0.5 * tri1_base * tri1_height;

console.log('\n1. Tam giác vuông P1-Q-P17:');
console.log(`   Cạnh ngang (đáy) = ${tri1_base} cm`);
console.log(`   Cạnh đứng (chiều cao) = ${tri1_height} cm`);
console.log(`   Diện tích = ½ × ${tri1_base} × ${tri1_height} = ${tri1_area} cm²`);

// Hình 2: Hình thang P17-Q-P18-R (R là điểm chiếu P18 xuống)
// KHÔNG! Cách này phức tạp...

// Thử cách khác: Kẻ đường ngang từ P17 sang phải
const R = { x: P18.x, y: P17.y };

console.log('\n=== CÁCH 2: Kẻ đường ngang từ P17 sang P18 ===\n');
console.log(`Điểm R: (${R.x}, ${R.y})`);

// Hình 2: Hình chữ nhật P17-R-P18-(P17)
// Đợi, P17 và R cùng y, P17 và P18 cũng cùng y!

console.log('P17 và P18 cùng y = 15 → Chúng nằm trên cùng một đường ngang!');

// Vậy có thể chia như sau:
// - Tam giác P1-P17-P18
// - Tam giác P17-P18-P20

console.log('\n=== CÁCH 3: Chia thành 2 hình ===\n');

// Kẻ đường chéo P1-P18
console.log('Kẻ đường chéo P1-P18 (đường màu xanh)');

// Hình 1: Tam giác P1-P17-P18
// Đây KHÔNG phải tam giác vuông!
// Cần dùng công thức Heron hoặc công thức tọa độ

// Để đơn giản cho lớp 4, hãy dùng hình chữ nhật bù trừ!

console.log('\n=== CÁCH ĐƠN GIẢN NHẤT: HÌNH CHỮ NHẬT BÙ TRỪ ===\n');

// Vẽ hình chữ nhật có 2 đỉnh đối diện: P1 và (20, 20)
const rect_width = 20;
const rect_height = 20;
const rect_area = rect_width * rect_height;

console.log(`Hình chữ nhật bao quanh: ${rect_width}cm × ${rect_height}cm = ${rect_area}cm²`);

// Tam giác A (góc trên trái): (0,15)-(0,20)-(15,20)
const triA_area = 0.5 * 15 * 5;
console.log(`\nTam giác A (góc trên trái): ½ × 15 × 5 = ${triA_area} cm²`);

// Tam giác B (góc trên phải): (15,20)-(20,20)-(20,15)
const triB_area = 0.5 * 5 * 5;
console.log(`Tam giác B (góc trên phải): ½ × 5 × 5 = ${triB_area} cm²`);

// Tam giác C (góc dưới phải): (15,0)-(20,0)-(20,15)
const triC_area = 0.5 * 5 * 15;
console.log(`Tam giác C (góc dưới phải): ½ × 5 × 15 = ${triC_area} cm²`);

// Hình thang D (bên trái): (0,0)-(0,15)-(15,15)-(15,0)
// Đây là hình CHỮ NHẬT!
const rectD_area = 15 * 15;
console.log(`Hình chữ nhật D (bên trái): 15 × 15 = ${rectD_area} cm²`);

// Tổng phần NGOÀI
const outside_total = triA_area + triB_area + triC_area + rectD_area;
console.log(`\nTổng diện tích NGOÀI phần tô đậm: ${triA_area} + ${triB_area} + ${triC_area} + ${rectD_area} = ${outside_total} cm²`);

// Diện tích phần tô đậm
const shaded_area = rect_area - outside_total;
console.log(`\nDiện tích phần tô đậm = ${rect_area} - ${outside_total} = ${shaded_area} cm²`);

console.log(`\n✓ KẾT QUẢ: ${shaded_area} cm²`);
