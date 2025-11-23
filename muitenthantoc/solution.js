/**
 * Bài toán: Tính diện tích phần tô đậm
 * Đa giác P20-P17-P18-P1
 *
 * CÁCH GIẢI CHO HỌC SINH LỚP 4
 * Kẻ đường phụ P1-P17, chia thành 2 tam giác
 * Mỗi tam giác tính bằng: Hình thang - Tam giác bên ngoài
 */

function calculateShadedArea() {
    const squareArea = 25; // cm²
    const sideLength = 5;   // cm

    // TAM GIÁC 1: P1-P17-P20
    // Hình thang P1-A-P20-P17: ½ × (20 + 5) × 15 = 187.5
    const trapezoid1 = 0.5 * (20 + 5) * 15;
    // Tam giác P1-A-P20: ½ × 20 × 15 = 150
    const triangleOutside1 = 0.5 * 20 * 15;
    // Tam giác P1-P17-P20 = 187.5 - 150 = 37.5
    const triangle1 = trapezoid1 - triangleOutside1;

    // TAM GIÁC 2: P1-P17-P18
    // Hình thang P1-B-P18-P17: ½ × (20 + 5) × 15 = 187.5
    const trapezoid2 = 0.5 * (20 + 5) * 15;
    // Tam giác P1-B-P18: ½ × 20 × 15 = 150
    const triangleOutside2 = 0.5 * 20 * 15;
    // Tam giác P1-P17-P18 = 187.5 - 150 = 37.5
    const triangle2 = trapezoid2 - triangleOutside2;

    // Tổng diện tích
    const shadedArea = triangle1 + triangle2; // 75 cm²

    return {
        squareArea,
        sideLength,
        shadedArea,
        shadedSquares: shadedArea / squareArea, // 3 ô vuông
        gridSize: 3,
        totalGridArea: 9 * squareArea,
        calculations: {
            triangle1: {
                trapezoid: trapezoid1,
                outsideTriangle: triangleOutside1,
                result: triangle1
            },
            triangle2: {
                trapezoid: trapezoid2,
                outsideTriangle: triangleOutside2,
                result: triangle2
            }
        }
    };
}

function getSolution() {
    const result = calculateShadedArea();
    return {
        ...result,
        explanation: [
            {
                step: 1,
                title: "Kẻ đường phụ P1-P17",
                description: "Chia phần tô đậm thành 2 tam giác: P1-P17-P20 và P1-P17-P18",
                calculation: "Mỗi tam giác tính bằng: Hình thang - Tam giác bên ngoài"
            },
            {
                step: 2,
                title: "Tính tam giác P1-P17-P20",
                description: "Hình thang P1-A-P20-P17 (đáy 20cm và 5cm, cao 15cm) trừ đi tam giác P1-A-P20",
                calculation: `½×(20+5)×15 - ½×20×15 = ${result.calculations.triangle1.trapezoid} - ${result.calculations.triangle1.outsideTriangle} = ${result.calculations.triangle1.result}cm²`
            },
            {
                step: 3,
                title: "Tính tam giác P1-P17-P18",
                description: "Hình thang P1-B-P18-P17 (đáy 20cm và 5cm, cao 15cm) trừ đi tam giác P1-B-P18",
                calculation: `½×(20+5)×15 - ½×20×15 = ${result.calculations.triangle2.trapezoid} - ${result.calculations.triangle2.outsideTriangle} = ${result.calculations.triangle2.result}cm²`
            },
            {
                step: 4,
                title: "Tổng diện tích phần tô đậm",
                description: `Cộng 2 tam giác lại`,
                calculation: `${result.calculations.triangle1.result} + ${result.calculations.triangle2.result} = ${result.shadedArea}cm²`
            }
        ]
    };
}

// For Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculateShadedArea, getSolution };
}

// Example usage
if (require.main === module) {
    const solution = getSolution();
    console.log('=== BÀI TOÁN HÌNH HỌC ===\n');
    console.log(`Diện tích 1 ô vuông: ${solution.squareArea}cm²`);
    console.log(`Cạnh ô vuông: ${solution.sideLength}cm`);
    console.log(`\nDIỆN TÍCH PHẦN TÔ ĐẬM: ${solution.shadedArea}cm²`);
    console.log(`(Tương đương ${solution.shadedSquares} ô vuông)\n`);

    console.log('=== GIẢI THÍCH ===\n');
    solution.explanation.forEach(step => {
        console.log(`Bước ${step.step}: ${step.title}`);
        console.log(`  ${step.description}`);
        console.log(`  ${step.calculation}\n`);
    });
}
