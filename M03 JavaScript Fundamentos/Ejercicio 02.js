/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   string = console.log("HOLA MUNDO")
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   console.log (x+y)
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   console.log (x-y)
}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   console.log (x/y)
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   console.log (x*y)
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   console.log (x%y)
}

devolverString();
suma(4,3);
resta(1,1);
divide(2,2);
multiplica(6,6);
obtenerResto(1,2);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
