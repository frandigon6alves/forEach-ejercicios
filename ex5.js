/**
 * Cambia el parámetro del forEach en la últiam línea para que invoque, para cada elemento, la función multiplyByTwo
 */

const numbers = [1, 2, 3, 4, 5];
function multiplyByTwo(number) {
  console.log(number * 2);
}
numbers.forEach(multiplyByTwo); // Output: 2 4 6 8 10