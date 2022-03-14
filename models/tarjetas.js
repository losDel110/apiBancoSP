const { default: mongoose } = require('mongoose')
const { Schema, model } = require('mongoose')
require('mongoose')

const tarjetaSchema = new Schema({
  numeroDeCuenta: Number,
  pin: Number,
  saldo: Number,
  fecha: Date,
  transacciones: [{
    type: this.schema.Types.ObjetId,
    ref: 'transacciones'
  }]
})

const Tarjeta = model('Tarjeta', tarjetaSchema)

module.exports = Tarjeta
