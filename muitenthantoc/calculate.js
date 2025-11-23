/**
 * Tính diện tích chính xác của đa giác P20 → P17 → P18 → P1 → P20
 */

// Tọa độ các điểm (đơn vị: cm)
// Lưu ý: Trong SVG, trục Y hướng xuống, nhưng để tính diện tích ta cần chuyển về hệ tọa độ thông thường

// Chuyển đổi từ SVG coordinates sang hệ tọa độ Descartes
// SVG: (0,0) ở góc trên-trái, Y tăng xuống dưới
// Descartes: (0,0) ở góc dưới-trái, Y tăng lên trên

// Gốc tọa độ SVG: (100, 500) tương ứng với (0, 0) trong Descartes
// Mỗi 100px = 5cm

function svgToCartesian(svgX, svgY) {
    // SVG origin at (100, 500)
    // Scale: 100px = 5cm → 1px = 0.05cm
    const originX = 100;
    const originY = 500;
    const scale = 0.05;

    const x = (svgX - originX) * scale;
    const y = (originY - svgY) * scale;

    return { x, y };
}

// Tọa độ SVG
const points = [
    { name: 'P20', svgX: 400, svgY: 100 },
    { name: 'P17', svgX: 400, svgY: 200 },
    { name: 'P18', svgX: 500, svgY: 200 },
    { name: 'P1',  svgX: 100, svgY: 500 }
];

// Chuyển đổi sang tọa độ Descartes
const cartesianPoints = points.map(p => ({
    name: p.name,
    ...svgToCartesian(p.svgX, p.svgY)
}));

console.log('=== TỌA ĐỘ CÁC ĐIỂM ===\n');
cartesianPoints.forEach(p => {
    console.log(`${p.name}: (${p.x}, ${p.y})`);
});

// Tính diện tích bằng công thức Shoelace (Shoelace formula)
function calculatePolygonArea(points) {
    let area = 0;
    const n = points.length;

    for (let i = 0; i < n; i++) {
        const j = (i + 1) % n;
        area += points[i].x * points[j].y;
        area -= points[j].x * points[i].y;
    }

    return Math.abs(area) / 2;
}

const area = calculatePolygonArea(cartesianPoints);

console.log('\n=== TÍNH DIỆN TÍCH ===\n');
console.log('Công thức Shoelace:');
console.log('Area = ½ |Σ(x_i × y_{i+1} - x_{i+1} × y_i)|');
console.log();

// Chi tiết từng bước
console.log('Chi tiết tính toán:');
let sum1 = 0;
let sum2 = 0;
for (let i = 0; i < cartesianPoints.length; i++) {
    const j = (i + 1) % cartesianPoints.length;
    const term1 = cartesianPoints[i].x * cartesianPoints[j].y;
    const term2 = cartesianPoints[j].x * cartesianPoints[i].y;
    console.log(`${cartesianPoints[i].name} × ${cartesianPoints[j].name}: ${cartesianPoints[i].x} × ${cartesianPoints[j].y} - ${cartesianPoints[j].x} × ${cartesianPoints[i].y} = ${term1} - ${term2} = ${term1 - term2}`);
    sum1 += term1;
    sum2 += term2;
}

console.log(`\nTổng: ${sum1} - ${sum2} = ${sum1 - sum2}`);
console.log(`Diện tích = |${sum1 - sum2}| / 2 = ${Math.abs(sum1 - sum2) / 2}`);

console.log('\n=== KẾT QUẢ ===\n');
console.log(`DIỆN TÍCH PHẦN TÔ ĐẬM = ${area} cm²`);

// Kiểm tra bằng cách tính theo đơn vị ô vuông
const squareArea = 25; // cm² (5cm × 5cm)
const equivalentSquares = area / squareArea;
console.log(`\nTương đương: ${equivalentSquares} ô vuông`);
console.log(`(Mỗi ô vuông = 25 cm²)`);

// Export
module.exports = { calculatePolygonArea, area, equivalentSquares };
