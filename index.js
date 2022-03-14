require("dotenv").config()
require("./mongo")

const Transaccion = require(".models/transacciones")

const { response } = require("express");
const { application } = require("express");
const { request } = require("express");
const express = require("express");
const res = require("express/lib/response");
const { json } = require("express/lib/response");

const app = express();

app.use(express.json())

let transacciones = [
    {
        "id": 1,
        "cuentaDeOrigen" : 5595345899897125,
        "monto": 100,
        "cuentaDeDestino": 4546857418565565,
        "fecha" : 	"Dec 26 2006 12:38:54:840AM"
    },
    {
        "id": 2,
        "cuentaDeOrigen" : 5595345899897125,
        "monto": 100,
        "cuentaDeDestino": 4546857418565565,
        "fecha" : 	"Dec 27 2006 12:38:54:840AM"
    },
     {
        "id": 3,
        "cuentaDeOrigen" : 5595345899897125,
        "monto": 200,
        "cuentaDeDestino": 4546857418565565,
        "fecha" : 	"Dec 28 2006 12:38:54:840AM"
    },
    {
        "id": 4,
        "cuentaDeOrigen" : 5595345899897125,
        "monto": 300,
        "cuentaDeDestino": 4546857418565565,
        "fecha" : 	"Dec 29 2006 12:38:54:840AM"
    },
    {
        "id": 5,
        "cuentaDeOrigen" : 5595345899897125,
        "monto": 400,
        "cuentaDeDestino": 4546857418565565,
        "fecha" : 	"Dec 30 2006 12:38:54:840AM"
    }
    ]
    

app.get('/', (request,response)=>
{
    response.send("<h1>Bienvenido<h1>");
});
app.get('/api/transacciones', (request, response)=>{

    response.json(transacciones);
    
    
    
})
 
app.get('/api/transacciones/:id', (request, response) => {
    const id= Number (request.params.id)
  
    const transaccion = transacciones.find(transaccion => transaccion.id===id)
    if (transaccion)
    {
        response.json(transaccion)
    } else {
        response.status(404).end()
    }
})

app.post('/api/transacciones', (request, response)=>{
    console.log(request)
    const transferencia = request.body

    const ids= transacciones.map(transaccion => transaccion.id)
    const MaxId =  Math.max(...ids )
    const nuevaTransferencia = {
        id : MaxId+1,
        cuentaDeOrigen: transferencia.cuentaDeOrigen,
        monto : transferencia.monto,
        cuentaDeDestino: transferencia.cuentaDeDestino,
        fecha:new Date().toISOString()
    }
    console.log(nuevaTransferencia)
    transacciones= [... transacciones, nuevaTransferencia]

    response.json(nuevaTransferencia)
})

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server running on port:${PORT}`);

})