import { Component } from 'react'

class Button extends Component 
{
  state = {}
  constructor(props)
  {
    super(props) //  super hace referencia al componente del cual extendemos
    console.log('constuctor',props)
  }

  componentDidMount() //Para evalual algo del dom (para actualizar un estado despues de un render)
  {
    console.log('componentDidMount')
  }

  componentDidUpdate(prevProps, prevState)
  {
    console.log('componentDidUpdate',prevProps, prevState)
  }

  componentWillUnmont()
  {
    console.log('componentWillUnmont ',this.prevProps, this.prevState)
  }

  render()
  {
    console.log('renderizado button')
    return (
      <button> 
        Enviar 
      </button>
    )
  }
}

  

class App extends Component
{
  state = 
  {
    valor : 3
  }
  render()
  {
    console.log(this.state)
    return( // Retorna contenido JSX
      <div>
        <p>Hola mundo</p>
        {
          this.state.valor === 3
          ?  <Button chanchito = 'feliz' />
          : null
        }

        <button 
          className = {`${this.state.valor}`} 
          onClick = {() => this.setState({ valor : 2 })}>
            Enviado en APP
        </button>
      </div>
    )
  }

}
export default App;
