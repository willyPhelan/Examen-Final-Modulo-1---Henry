/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
// ---- Recursión ----
// EJERCICIO 9
// Implementar la función restArray: a partir de un array en el cual cada posición puede ser un único
// número u otro array anidado de números, determinar la suma de todos los números contenidos en el array.
// El array será recibido por parámetro.
// Ejemplo:
//    const array = [3, [7, [5,6]], [9,6], 4];
//    countArray(array); --> Debería devolver 40 y al resultado lo restas por la cantidad de arrays, sin contar al padre.
// Ejemplo:
//      40-3 = 37
// Pista: utilizar el método Array.isArray() para determinar si algun elemento de array es un array anidado
// [Para más información del método: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/isArray]

var restArray = function(array){
    // Tu código acá
    var contador = 0;
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        contador = contador + restArray(array[i]) - 1;
      } else {
        contador = contador + array[i];
      }
    }
    return contador;

}
   

// No modifiques nada debajo de esta linea //

module.exports = restArray