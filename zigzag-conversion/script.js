
const input = document.querySelector('.input');
const rows = document.querySelector('.rows');
const output = document.querySelector('.output');

const convert = (string, rows) => {
    if (rows === 1) return string;

    const twoDimensional = [];
    for (let i = 0; i < rows; i++) {
        twoDimensional.push([]);
    }

    let cIndex = 0;
    const cols = rows - 1;
    for (let col = 0; col < cols && cIndex < string.length; col++) {
        for (let row = 0; row < rows && cIndex < string.length; row++) {
            if (col === 0) {
                twoDimensional[row].push(string[cIndex]);
                cIndex++;
            }
            else if ((row + col) === cols) {
                twoDimensional[row].push(string[cIndex]);
                cIndex++;
            }
            else {
                twoDimensional[row].push(null);
            }
        }
        if ((col + 1) === cols) {
            col = -1;
        }
    }

    const output = [];
    twoDimensional.forEach((oneDimensional) => {
        output.push(oneDimensional.filter(c => c).join(''));
    });

    return output.join('');
};

document.querySelector('.convert').addEventListener('click', (e) => {
    output.textContent = convert(input.value, +rows.value);
});