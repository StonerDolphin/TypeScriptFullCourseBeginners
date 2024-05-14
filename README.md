# Type Script Full Course Beginners

TypeScript is a leanguaje that is a superset of JavaScript, which means that it is a language that is built on top of JavaScript, and it adds new features to JavaScript.

TypeScript is a statically typed language, which means that you can define the type of a variable, and the type of a variable cannot be changed.

TypeScript is a compiled language, which means that you have to compile the TypeScript code to JavaScript code before you can run it.

TypeScript is a language that is developed by Microsoft.

## Types in TypeScript

En typescript tenemos los siguientes tipos de datos:
```
number, string, boolean, null, undefined, object, array, tuple, enum, any, void, never, unknown
```
TypeScript tiene lo siguiente:
```
let a = 4 // => a es number
```
En este ejemplo, tenemos a la variable `a` que primero la declaramos con `let`
y luego la inicializamos con el valor de `4`. En este caso, TypeScript infiere que la variable `a` es de tipo `number`,
pero si queremos especificar el tipo de la variable `a` podemos hacerlo de la siguiente manera:
```
let a: number = 4
```
En este caso, estamos especificando que la variable `a` es de tipo `number`.
```
let a = 4
let a = 'Hola' // Error
```
En este caso, TypeScript nos dará un error porque estamos tratando de cambiar el tipo de la variable `a`
que, ya ha sido definida como un `number`.

Esto es lo que se conoce como tipado estático. TypeScript es un lenguaje de tipado estático, **lo que significa que una
vez que se ha definido el tipo de una variable, no se puede cambiar**.

Tambien en typescript podemos definir el tipo de una variable de la siguiente manera:
```
let a: number
a = 4
```
En este caso, estamos definiendo la variable `a` como un `number`, pero no la estamos inicializando.
Esto es útil cuando queremos definir una variable, pero no queremos inicializarla en ese momento.

También podemos definir el tipo de una variable de la siguiente manera:
```
let a: number | string
a = 4
a = 'Hola'
```
En este caso, estamos definiendo la variable `a` como un `number` o un `string`. Esto significa que la variable `a` 
puede ser un `number`o una `string`.

Tomemos el siguiente caso:
```
const suma = (a, b) => {
    return a + b
}
```
En este caso, estamos definiendo una función `suma` que toma dos argumentos `a` y `b` y devuelve la suma de `a` y `b`.
Pero, ¿qué pasa si `a` y `b` no son números? ¿Qué pasa si `a` es un número y `b` es una cadena? ¿Qué pasa si `a` y `b` 
son cadenas? En este caso, TypeScript nos permite definir el tipo de los argumentos de la función de la siguiente 
manera:
```
const suma = (a: number, b: number) => {
    return a + b
}
```
En este caso, estamos definiendo la función `suma` que toma dos argumentos `a` y `b` que son de tipo `number`. Esto significa que
la función `suma` solo aceptará argumentos de tipo `number`.

También podemos definir el tipo de retorno de una función de la siguiente manera:
```
const suma = (a: number, b: number): number => {
    return a + b
}
```
En este caso, estamos definiendo la función `suma` que toma dos argumentos `a` y `b` que son de tipo `number`
y devuelve un valor de tipo `number`.

También podemos hacer la función `suma` más genérica de la siguiente manera:
```
const suma = <T>(a: T, b: T): T => {
    return a + b
}
```
En este caso, estamos definiendo la función `suma` que toma dos argumentos `a` y `b` de tipo `T` y devuelve un valor de tipo `T`.
Esto significa que la función `suma` puede tomar argumentos de cualquier tipo y devolver un valor de cualquier tipo.


