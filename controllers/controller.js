var express = require('express');
var router = express.Router();
const { Pago } = require('../db/models');

const controller = {
    index: async (req, res) => {
        try {
          const pagos = await Pago.findAll();
    
    
          res.render('pagos', { pagos }/*{ pagos,sumaPagos, pagosMesPasado:pagosMesPasado,sumaPagosMesPasado }*/); // Pasar los montos a la vista
        } catch (error) {
          console.error(error);
          res.status(500).send('Error al obtener los consumos');
        }
      },
}


module.exports=controller;