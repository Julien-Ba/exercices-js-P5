export default printNumbers;

function printNumbers(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        str += i;
    }
    return str;
}
