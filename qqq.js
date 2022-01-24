// Write a function that takes a number testVariable and returns a string that is its equivalent hexadecimal number.

// **Input**#

// A variable testVariable containing the decimal number.

// **Output#**

// String variable that contains the equivalent hexadecimal number of the input number.

// Sample Input#

// 11

// Sample Output#

// "1011"

function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        console.log(
            `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
        );
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    console.log(`Binary: ${bin}`);
}

// take input
let number = prompt('Enter a decimal number: ');

convertToBinary(number);