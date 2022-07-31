const rest = (...argunmentos) => 
{
    console.log(argunmentos);
}

rest (1,2,3);
// Cuando usamos el rest dentro de una funcion, todos los argumentos pasan a ser un arreglo
// Si sepramaos un argumento en la funcion (a, ...argunmentos) se armaran todos en un array salvo el indicad
// El res tiene que ser el ultimo paramatro indicado

const obj = 
{
    a:1, b:2, c:3, d:4
}

//const {a, b, ...restob} = obj
//console.log(a, b, restob);

// Distractory en arreglos

const arr = [1,2,3,4,5]

const [a, b, ...r] = arr

console.log(a, b, r);

const useStatus = () => ['valor', () => {} ]

const [valor, setValor] = useStatus();

console.log(valor, setValor);

