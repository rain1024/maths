/**
 * Bài toán: Thử thách vòng tròn
 *
 * 20 người đứng thành vòng tròn (vị trí 1-20), đọc số tự nhiên theo chiều kim đồng hồ.
 * Người ở vị trí P sẽ đọc các số: P, P+20, P+40, P+60, ...
 *
 * Tìm vị trí của người đọc số N
 */

/**
 * Tìm vị trí của người đọc số target
 * @param {number} numPeople - Số người trong vòng tròn
 * @param {number} target - Số cần tìm
 * @returns {number} Vị trí của người đọc số target (1-indexed)
 */
function findPosition(numPeople, target) {
    // Người ở vị trí P đọc các số: P, P + numPeople, P + 2*numPeople, ...
    // Công thức: target = P + k * numPeople (với k >= 0)
    // => P = target mod numPeople

    const position = target % numPeople;

    // Nếu chia hết, vị trí là numPeople (vị trí cuối cùng)
    // Ví dụ: số 20, 40, 60,... được đọc bởi vị trí 20
    return position === 0 ? numPeople : position;
}

/**
 * Tính số lượt đã đọc khi đến số target
 * @param {number} numPeople - Số người trong vòng tròn
 * @param {number} target - Số đã đọc
 * @returns {number} Số lượt (rounds) đã hoàn thành
 */
function countRounds(numPeople, target) {
    return Math.floor((target - 1) / numPeople);
}

/**
 * Tìm tất cả các số mà người ở vị trí position đã đọc cho đến số target
 * @param {number} numPeople - Số người trong vòng tròn
 * @param {number} position - Vị trí người đọc (1-indexed)
 * @param {number} maxNumber - Số lớn nhất cần kiểm tra
 * @returns {number[]} Mảng các số đã đọc
 */
function getNumbersReadByPosition(numPeople, position, maxNumber) {
    const numbers = [];
    let current = position;

    while (current <= maxNumber) {
        numbers.push(current);
        current += numPeople;
    }

    return numbers;
}

// Ví dụ: Bài toán gốc
const NUM_PEOPLE = 20;
const TARGET_NUMBER = 2012;

const position = findPosition(NUM_PEOPLE, TARGET_NUMBER);
const rounds = countRounds(NUM_PEOPLE, TARGET_NUMBER);
const numbersRead = getNumbersReadByPosition(NUM_PEOPLE, position, TARGET_NUMBER);

console.log('=== GIẢI BÀI TOÁN VÒNG TRÒN ===\n');
console.log(`Số người trong vòng tròn: ${NUM_PEOPLE}`);
console.log(`Số cần tìm: ${TARGET_NUMBER}\n`);
console.log(`Đáp án: Người ở vị trí ${position} sẽ đọc số ${TARGET_NUMBER}`);
console.log(`Số vòng đã hoàn thành: ${rounds} vòng`);
console.log(`Các số mà người vị trí ${position} đã đọc: ${numbersRead.slice(0, 10).join(', ')}${numbersRead.length > 10 ? ', ...' : ''}`);
console.log(`Tổng số đã đọc: ${numbersRead.length} số`);

// Xuất hàm để sử dụng trong các file khác
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        findPosition,
        countRounds,
        getNumbersReadByPosition
    };
}
