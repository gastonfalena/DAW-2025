/* Variables y Operadores

a)Crear dos variables numéricas y utilizar el operador suma para guardar el valor
de la suma de ambos números en una 3er variable

*/

var sum1,sum2,result;
sum1 = 5;
sum2 = 6;
result = sum1+sum2;
console.log("El resultado es:",result)

/* 
b)Crear dos variables de tipo String y concatenarlas guardando el resultado en una
3er variable.
*/

var text1,text2,concat;
text1 = "Hola";
text2 = " soy Gaston";
concat = text1+text2;
console.log(concat);

/* 
c)Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de
letras del string) guardando el resultado de la suma en una 3er variable (utilizar
length).
*/
var text3,text4,result2;
text3 = "tengo 7";
text4 = "tengo  8";
result2 = text3.length+text4.length;
console.log("La suma del largo de las cadenas es:",result2);