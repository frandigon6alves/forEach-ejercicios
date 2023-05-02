/**
 * Cambia la línea 8 para acumular la suma de cada elemento del array
 */

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach((number) => {
    sum += number;
});
console.log("Total: ", sum); // Output: 15