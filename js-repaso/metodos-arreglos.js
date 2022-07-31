const arr = [0, 1, 2, 3, 4]

// filter toma los valores de un arreglo y solo toma los valors true
// Devuelve el mismo arreglo o uno menor
const r = arr.filter(el => el>2)
//console.log(r);

const r1 = arr.filter((el,i) => 
{
   // console.log(i); // Nos muetra los elementos que itera el filter
    return el > 2
})
//console.log(r1);

// Map, toma todos los elemento de un arreglo, y les aplica una funcion

//const mapped = arr.map((el) => el*2)
//console.log(mapped);


//const mapped1 = arr.map((el) => `<h1>${el}</h1>`) // Transformamos los elementos, en elementos de html
//console.log(mapped1);


const users = 
[
    {id: 1, name: 'Chanchito feliz'},
    {id: 2, name: 'Chanchito triste'},
    {id: 3, name: 'Chanchito emocionado'},
    {id: 4, name: 'Felipe'},
]

//const mapped2 = users.map((user) => `<h1>${user.name}</h1>`)
//console.log(mapped2);

// Reduce toma todos los elementos del arreglo y devuelve lo que necesitemos
// Recibe un acumulador, el elemento que iteramos
// Al ultimo se le pasa el valor inicial del acumulador
//const r5 = arr.reduce((acc, el) => acc + el, 0) 
//const getMax = (a,b) => Math.max(a,b)
//const r5 = arr.reduce(getMax, 0) 
//const r5 = users.reduce((acc, el) => 
//`${acc === '' ? '' :`${acc}, ` } ${el.name}`, '') //Valida si el acumulador igual a 0(?), de ser asi le coloca un string vacio sino coloca lo que tiene


const r5 = users.reduce((acc, el) => 
{
    if(el.id < 2)
    {
        return acc
    }
    return acc.concat(el)
},[])

console.log(r5);

