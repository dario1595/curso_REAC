/*const Rectangulo = class R // Expresion de clase
{

}*/
//Clases declaradas con class no tienen hoisting
/*class Rectangulo // Declaracion de clase
{

}

function Cuadrado()
{
    
}*/
//Hoisting: esto es cuando tomamos variables definidas con var y funciones
// definidas con function, y las lleva al comienzo del archivo
//console.log(Cuadrado,Rectangulo);

//const r = new Rectangulo();

class Chancho
{
    propiedad = 'mi propiedad'
    #hambre 
    constructor(estado = 'feliz', hambre = false) // se ejecuta siempre que instanciemos una nueva instancia con new
    // Se le agrega por defecto feliz en caso de no pasarle nada
    {
        this.estado = estado
        this.#hambre = hambre
    }
    hablar()
    {
        console.log(`Soy un chanchito ${this.estado} ${this.#hambre ? 'Con mucha hambre!'
    : 'Satisfecho'}`);
    }

    static comer()
    {
        console.log('Estoy Comiendo')
    }
}
Chancho.comer()// metodo estatico
const r = new Chancho('Feliz');
r.hablar()
const r1 = new Chancho('Triste');
//r1.hablar()
const r2 = new Chancho();
//r2.hablar()