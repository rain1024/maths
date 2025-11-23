// Kiểm tra lại bằng công thức Shoelace
const P1 = { x: 0, y: 0 };
const P17 = { x: 15, y: 15 };
const P18 = { x: 20, y: 15 };
const P20 = { x: 15, y: 20 };

// Công thức Shoelace
const points = [P20, P17, P18, P1];
let area = 0;
for (let i = 0; i < points.length; i++) {
    const j = (i + 1) % points.length;
    area += points[i].x * points[j].y;
    area -= points[j].x * points[i].y;
}
area = Math.abs(area) / 2;

console.log('Diện tích chính xác (Shoelace): ' + area + ' cm²');

// Kiểm tra các tam giác bên ngoài
console.log('\n=== KIỂM TRA HÌNH CHỮ NHẬT BÙ TRỪ ===');
console.log('Hình chữ nhật: (0,0)-(20,0)-(20,20)-(0,20)');
console.log('Diện tích: 20 × 20 = 400 cm²');

console.log('\nCác hình BÊN NGOÀI phần tô đậm:');

// Góc dưới trái: (0,0)-(15,0)-(15,15)
console.log('1. Tam giác dưới trái: (0,0)-(15,0)-(15,15)');
console.log('   ½ × 15 × 15 = 112.5 cm²');

// Góc trái giữa: (0,0)-(0,15)-(15,15)
console.log('2. Tam giác trái giữa: (0,0)-(0,15)-(15,15)');
console.log('   ½ × 15 × 15 = 112.5 cm²');

console.log('\nKhoan! 2 tam giác này CHỒNG LẤP tại tam giác (0,0)-(15,0)-(0,15)-(15,15)!');
console.log('Đây là hình VUÔNG 15×15, không phải 2 tam giác riêng biệt!');

console.log('\n=== CÁCH ĐÚNG ===');
console.log('Hình chữ nhật bao quanh: 20 × 20 = 400 cm²');
console.log('\nCác tam giác NGOÀI:');
console.log('1. Tam giác góc dưới-trái: (0,0)-(15,0)-(0,15) → ½×15×15 = 112.5 cm²');
console.log('2. Hình thang/Hình phức tạp phía trên-trái: (0,15)-(0,20)-(15,20)-(15,15)');
console.log('   Đây là hình CHỮ NHẬT: 15 × 5 = 75 cm²');
console.log('3. Tam giác góc trên-phải: (15,20)-(20,20)-(20,15) → ½×5×5 = 12.5 cm²');
console.log('4. Tam giác góc dưới-phải: (15,0)-(20,0)-(20,15) → ½×5×15 = 37.5 cm²');
console.log('5. Hình chữ nhật phía dưới-phải: (15,0)-(20,0)-(20,15)-(15,15)');
console.log('   Đây là TAM GIÁC, đã tính ở #4!');

console.log('\n Để tôi tính lại cẩn thận...');
