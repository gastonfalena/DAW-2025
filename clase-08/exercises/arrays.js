/* Arrays

a)Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por
consola los meses 5 y 11 (utilizar console.log).

*/

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
             "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses[5]);
console.log(meses[11]);

/* 

b)Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

*/
var mesesOrd = meses.slice().sort(); //creamos una copia para no modiciar el orignal.
mesesOrd.sort();
console.log(mesesOrd);

/* 

c)Agregar un elemento al principio y al final del array (utilizar unshift y push).

*/

meses.unshift("0");
meses.push("13");
console.log(meses);

/* 

d)Quitar un elemento del principio y del final del array (utilizar shift y pop).

*/
meses.shift();
meses.pop();
console.log(meses);


/* 

e)Invertir el orden del array (utilizar reverse).

*/

mesesOrd.reverse();
console.log(mesesOrd);

/* 

f)Unir todos los elementos del array en un único string donde cada mes este
separado por un guión - (utilizar join).

*/

console.log(meses.join("-"));

/* 

g)Crear una copia del array de meses que contenga desde Mayo hasta Noviembre
(utilizar slice).

*/

var mayoANoviembre = meses.slice(4,11);
console.log(mayoANoviembre);

