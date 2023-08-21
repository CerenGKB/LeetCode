
/*  This is a code piece for extracting digits from an integer for some questions where
it requires us to not convert the integer to string
*/


// For future Uses

function getDigits(num) {
    var digits = [];
    while (num >= 10) {
        digits.unshift(num % 10);
        num = Math.floor(num / 10);
    }
    digits.unshift(num);
    return digits;
}