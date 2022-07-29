const fn = (a, b, c) => console.log(a + b + c)

const arr = [1,2,3,4]

fn(arr[0],arr[1],arr[2]) // El spread nos ahorra toda la sintaxis

fn(...arr)// Cuando tenemos un arreglo podemos llamar al spread (...), donde mapeara cada elemento de la funcion
//

const arr1 = [5,6]

const arr2 = [...arr,...arr1];

console.log(arr2)

const obj1 = {a:1,b:2}
const obj2 = {a:5,b:'chanchito feliz'}

const obj3 = {...obj1}

console.log(obj3)