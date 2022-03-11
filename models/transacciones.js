const {Schema, model}= require("mongoose")

const transaccionSchema = new Schema({
    cuentaDeOrigen : Number,
    monto: Number,
    cuentaDeDestino: Number,
    fecha : Date
})

const Transaccion = model("Transaccion", transaccionSchema)

module.exports = Transaccion