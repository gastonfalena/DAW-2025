/* Strings

a)Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
texto en mayúscula (utilizar toUpperCase).

*/

var text5;
text5 = "esternocleidomastoideo";
console.log(text5.toUpperCase());

/*

b)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los primeros 5 caracteres guardando el resultado en una nueva
variable (utilizar substring).

*/

var text6,text7;
text6 = "Tenemos que hablar";
text7 = text6.substring(0,5)
console.log(text7);

/*

c)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con la primera letra en mayúscula y las demás en minúscula. Guardar el
resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
el operador +).

*/

var text8,text9;
text8 = "tenemos que hablar";
text9= text8.substring(0,1).toUpperCase() + text8.substring(1).toLowerCase();
console.log(text9);

/*

e)Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
variable (utilizar indexOf).

*/
var text10,position;
text10 = "tenemos que hablar";
position = text10.indexOf(" ");
console.log("El primer espacio aparece en la posición: ",position);

/*

f)Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
generar un nuevo string que tenga la primera letra de ambas palabras en
mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
toUpperCase, toLowerCase y el operador +).

*/

var text11,text12,position2;
text11 = "trabajador entusitasta";
position2=text11.indexOf(" ")
text12 = text11.substring(0,1).toUpperCase() + text11.substring(1,position2).toLowerCase()+text11.substring(position2+2,position+3).toUpperCase()+text11.substring(position2+2,text11.length).toLowerCase()
console.log(text12);

