// Kiểm tra điểm có nằm trong đa giác không

function pointInPolygon(point, polygon) {
    let inside = false;
    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const xi = polygon[i].x, yi = polygon[i].y;
        const xj = polygon[j].x, yj = polygon[j].y;

        const intersect = ((yi > point.y) != (yj > point.y))
            && (point.x < (xj - xi) * (point.y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    return inside;
}

const polygon = [
    { x: 15, y: 20 }, // P20
    { x: 15, y: 15 }, // P17
    { x: 20, y: 15 }, // P18
    { x: 0, y: 0 }    // P1
];

console.log('Kiểm tra các điểm có nằm TRONG đa giác không:\n');

// Điểm giữa hình ①
let testPoint = { x: 7.5, y: 7.5 };
let isInside = pointInPolygon(testPoint, polygon);
console.log(`① Điểm (7.5, 7.5): ${isInside ? 'TRONG' : 'NGOÀI'} → ${!isInside ? 'Trừ đi ✓' : 'KHÔNG trừ ✗'}`);

// Điểm giữa hình ②
testPoint = { x: 7.5, y: 17.5 };
isInside = pointInPolygon(testPoint, polygon);
console.log(`② Điểm (7.5, 17.5): ${isInside ? 'TRONG' : 'NGOÀI'} → ${!isInside ? 'Trừ đi ✓' : 'KHÔNG trừ ✗'}`);

// Điểm giữa hình ③
testPoint = { x: 17.5, y: 17.5 };
isInside = pointInPolygon(testPoint, polygon);
console.log(`③ Điểm (17.5, 17.5): ${isInside ? 'TRONG' : 'NGOÀI'} → ${!isInside ? 'Trừ đi ✓' : 'KHÔNG trừ ✗'}`);

// Điểm giữa hình ④
testPoint = { x: 17.5, y: 7.5 };
isInside = pointInPolygon(testPoint, polygon);
console.log(`④ Điểm (17.5, 7.5): ${isInside ? 'TRONG' : 'NGOÀI'} → ${!isInside ? 'Trừ đi ✓' : 'KHÔNG trừ ✗'}`);

console.log('\n=== KẾT LUẬN ===');
if (isInside) {
    console.log('Hình ④ nằm TRONG phần tô đậm!');
    console.log('Không được trừ đi!');
    console.log('\nTính lại:');
    console.log('400 - 112.5 - 75 - 12.5 = 200 cm²');
    console.log('Vẫn sai!');
} else {
    console.log('Tất cả 4 hình đều nằm NGOÀI.');
}
