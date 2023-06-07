//Ejercicio 1
let array=[];
for (let i = 0; i < 10; i++) {
    array[i]=Math.floor(Math.random()*10);
}
console.log(array);
//Ejercicio 2
let ingreso=prompt("Ingrese cualquier cantidad de palabras separadas por comas:");
let ingresoArray=ingreso.split(",");
console.log(ingresoArray)
//Ejercicio 3
let arrayFijo=[10,40,30,20,15,5];
let arrayFijoSort=arrayFijo.sort(function(a, b) {
    return a - b;
  });
console.log(arrayFijoSort);
console.log(Math.max.apply(null,arrayFijoSort));
console.log(Math.min.apply(null,arrayFijoSort));