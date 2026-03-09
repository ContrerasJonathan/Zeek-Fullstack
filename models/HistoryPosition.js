const mongoose = require('mongoose');

const historyPositionSchema = new mongoose.Schema({
    unidadId:               {type: String, required: true},
    fechaHoraUbicacion:     {type: Date},
    fechaHoraRecepcion:     {type: Date},
    latitud:                {type: Number},
    longitud:               {type: Number},
    altitud:                {type: Number},
    satelites:              {type: Number},
    ip:                     {type: String},
    puerto:                 {type: Number},
    velocidad:              {type: Number},
    protocolo:              {type: String, enum: ['TCP', 'UDP', 'API']},
    gpsMarca:               {type: String},
    tipoReporte:            {type: String, enum: ['GPS', 'Giro', 'Alerta']},
    evento:                 {type: String},
    eventoId:               {type: String},
    horometro:              {type: Number},
    odometro:               {type: Number},
    voltajeBateria:         {type: Number},
    porcBateriaInterna:     {type: Number},
    fix:                    {type: Boolean},
    tramaTiempoReal:        {type: Boolean},
    estadoGPRS:             {type: String, enum: ['Ok', 'Sin conexcion']},
    estadoIgnicion:         {type: String, enum: ['Encendido', 'Apagado']},
    estadoApagadoMotor:     {type: String, enum: ['Aplicado', 'No aplicado']},
    potencia:               {type: Number},
    nivelRecepcion:         {type: String, enum: ['Excelente', 'Muy bueno', 'Regular', 'Malo', 'Deficiente', 'Desconocido']},
    idRadioBase:            {type: String},
    estadoEntradas:         {type: String},
    estadoSalidas:          {type: String},
    numeroSecuencias:       {type: NUmber},
    orientacion:            {type: Number},
    mcc:                    {type: String},
    mnc:                    {type: String},
    carrier:                {type: String},

    //Tabla independientes
    combustible: [{
        tanque: {type: String, enum: ['Tanque 1', 'Tanque 2', 'Tanque 3', 'Tanque 4']},
        valor: {type: Number}
    }],
    temperatura: [{
        sensor: {type: String, enum: ['Temp 1', 'Temp 2', 'Temp 3', 'Temp 4']},
        valor: {type: Number}
    }],
    humedad: [{
        sensor: {type: String, enum: ['Hum 1', 'Hum 2', 'Hum 3', 'Hum 4']},
        valor: {type: Number}
    }]
}, {timestamps: true});

//Indice para acelerar busquedas por unidad y fecha
historyPositionSchema.index({unidadId: 1, fechaHoraUbicacion: -1});
module.exports = mongoose.model('HistoryPosition', historyPositionSchema);