// Funciones que se declaran con la palabra recervada function
function Fn() // Esta se pueden utilizar como clases
// Estas funciones tienen un contexto de this. this en este caso es la funcion. podriamos crear una nueva propiedad
// Cuando se crea una nueva instancia con new, se crea un obejto literal, el cual devuelve las propiedades del mismo,
// se ignora el return y se devuelve un this.prop
{
    this.prop = 'propiedad'
    return 'Chanchito feliz';
}

Fn.prototype.lala = function FuncionDePrototipo(){};
const r = new Fn();
console.log(r.__proto__);

// fat arrow function
// Esta nos pueden ser llamada con la palabra new
// No tienen contexto de this
// Tienen un return implicito(no tiene que tener los parentecis de llaves)
const fatFn = () => 
{
    this.prop = 'propiedad'
    console.log(this);
    return 'chanchito feliz'
}

const r1 = fatFn()
console.log(r1);