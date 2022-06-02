const { BinarySearchTree } = require("./DS");

/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

// ---- Arboles Binarios ----

// EJERCICIO 6

// Implementar la función searchMaxTwo que busque en nuestro arbol binario los dos valores maximos
// y los retorne en un array.
// Ejemplo:
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//    / \                 \
//       5                44
//
//  Debería retornarnos 44 y 31.
let array = [] // declaro array fuera de funcion porque sino la recursividad crearia todo el tiempo arrays
BinarySearchTree.prototype.searchMaxTwo = function () { 
  // tu código acá:
  
  if(this.right){  // si hay right...
    array.push(this.right.value)
    this.right.searchMaxTwo() // vuelvo a hacer lo mismo 
    }
    return [].concat(array[array.length-1],array[array.length-2]) // concateno los dos ultimos valores Osea los mayores
  };



// No modifiques nada debajo de esta linea //

module.exports = {
  BinarySearchTree,
};
