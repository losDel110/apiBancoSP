require( "./mongo")
const Tarjeta = require("./models/tarjetas")

const tarjeta1 = new Tarjeta({
    numeroDeCuenta : 4546857418565565, 
    pin : 4345,
    saldo: 40555,
    transacciones:[]
})
tarjeta1.save()
.then(response => {
    console.log(response)
})
.catch(err=>{
    console.log(err)
})


const tarjeta2 = new Tarjeta({
    numeroDeCuenta : 5595345899897125, 
    pin : 1595,
    saldo: 3566,
    transacciones:[]
})
tarjeta2.save()
.then(response => {
    console.log(response)
})
.catch(err=>{
    console.log(err)
})


const tarjeta3 = new Tarjeta({
    numeroDeCuenta : 4858669658871578, 
    pin : 1234,
    saldo: 23,
    transacciones:[]
})
tarjeta3.save()
.then(response => {
    console.log(response)
})
.catch(err=>{
    console.log(err)
})

const tarjeta4 = new Tarjeta({
    numeroDeCuenta :5854665625871547, 
    pin : 4345,
    saldo: 300,
    transacciones:[]
})
tarjeta4.save()
.then(response => {
    console.log(response)
})
.catch(err=>{
    console.log(err)
})


const tarjeta5 = new Tarjeta({
    numeroDeCuenta : 4546989623571478, 
    pin : 0023,
    saldo: 35621,
    transacciones:[]
})
tarjeta5.save()
.then(response => {
    console.log(response)
})
.catch(err=>{
    console.log(err)
})