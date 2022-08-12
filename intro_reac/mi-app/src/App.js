import Button from "./Button"; 
const arr = 
[
    'Chanchito feliz',
    'Chanchito triste',
    'Chanchito emocionado',
]
const App = () => 
{
    const miVariable = false
    if(miVariable)
    {
        return <p>Mi miVariable dio True</p>
    }
    return(
        <div>
            <h1>Hola mundo</h1>
            {arr.map(el => <p key = {el}>{el}</p>)}
            <Button onClick = {(e) => console.log('Clickeado',e)}> 
                Enviar
            </Button>
        </div>
    )
}// e = evento 

export default App;