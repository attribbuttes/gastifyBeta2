var express = require('express');
var router = express.Router();
const { Consumo } = require('../db/models');

const controller = {
    index: async (req, res) => {
        try {
          const consumos = await Consumo.findAll();
    
    
          res.render('gastos', { consumos }/*{ pagos,sumaPagos, pagosMesPasado:pagosMesPasado,sumaPagosMesPasado }*/); // Pasar los montos a la vista
        } catch (error) {
          console.error(error);
          res.status(500).send('Error al obtener los consumos');
        }
      },
}


module.exports=controller;