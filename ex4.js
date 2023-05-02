// Recorre el array con un forEach y suma el número de carácteres de todos los nombres

const names = ["John", "Sarah", "Mike"];
let suma = 0;

names.forEach(name => {
    suma += name.length;
  });

console.log("Suma: ", suma); // Output: 13