const url = 'https://jsonplaceholder.typicode.com/users' // Para la prueba se toma una url desde json
// devueve un listado de usuarios
// Fetch recibe 2 argumentos, la primera que es mandatoria(no puede faltar), la 2 es un obj de configuracion y es opcional
//fetch(url).then((response) => response.json()) // Metodo de json te permite obtener data de la api
//.then(data => console.log(data))

// Envio mediante metodo de POST
/*fetch(url, {
    method: 'POST',
    headers: 
    {
        'Content-Type':'application/json', // Esto le indica al servidor que el contenido enviado es tipo json
        'Authorization': 'Bearer acadebieseexistiruntoquendeautorizacion'//Contiene una llave de autorizacion del usuario
    },
    body: JSON.stringify({ // trasforma el json a string
        name: 'Chanchito feliz',
        website: 'google.com',
    }) //Body contiene los dato que nosotros queremos enviar al servidor
})// El 2 es un objeto literal para configurar la peticion
// POST se utiliza para crear recursos dentro de una api rest
.then((response) => response.json())
.then(data => console.log(data))*/

const fn = async () => // La mayor parte del tiempo se utiliza async, salvo que sea funcional
{
   const response = await fetch(url, {
        method: 'POST',
        headers: 
        {
            'Content-Type':'application/json', 
            'Authorization': 'Bearer acadebieseexistiruntoquendeautorizacion'
        },
        body: JSON.stringify({ 
            name: 'Chanchito feliz',
            website: 'google.com',
        }) 
    })
    const data = await response.json()
    console.log(data)
    
}

fn();