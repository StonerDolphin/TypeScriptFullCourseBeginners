"use strict";
let stringArray = ['one', 'two', 'three'];
let guitars = ['Fender', 'Gibson', 'Ibanez', 5150];
let mixedData = ['EVH', true, 1991];
stringArray[0] = '1';
stringArray.push('four');
guitars[0] = 1984;
guitars.unshift();
// stringArray = guitars ---> error: Type (string | number)[] is not assignable to type string[]
// Type string | number is not assignable to type string
// Type number is not assignable to type string
guitars = stringArray;
mixedData = guitars;
// guitars = mixedData ---> error: Type (string | number | boolean)[] is not assignable to type (string | number)[]
// Type string | number | boolean is not assignable to type string | number
let test = [];
let bands = [];
bands.push('Van Halen');
// tuple
let mytuple = ['Dave', 42, true];
let mixed = ['Van Halen', 5150, true];
mixed = mytuple;
// mytuple = mixed --->  Error: Type (string | number | boolean)[] is not assignable to type [string, number, boolean]
// Target requires 3 element(s) but source may have fewer.
// Object
let myObject;
myObject = [];
console.log(typeof myObject);
