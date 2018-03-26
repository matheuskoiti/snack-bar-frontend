var service = require('../public/javascripts/service');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'SnackBar' });
});

/* Order a snack page */
router.get('/order', function(req, res) {
  service.getSnacks(function (dataSnacks) {
    service.getIngredients(function (dataIngredients) {
      res.render('order', { title: 'Fazer pedido' , snacks: dataSnacks, ingredients: dataIngredients});
    })
  })
});

/* Get final value */
router.post('/order/value', function(req, res) {
  var quantidade = req.body.quantidade; 
  var lanche = req.body.lanche; 

  service.getValue(lanche, quantidade, function (dataValue) {
    res.render('result', { title: 'Confirme sua compra', finalValue: dataValue });
  })
});


/* Order a custom snack page */
router.get('/custom', function(req, res) {
  service.getIngredients(function (dataIngredients) {
    res.render('custom', { title: 'Monte seu lanche' , ingredients: dataIngredients});
  })
});

/* Get final value */
router.post('/custom/value', function(req, res) {
  var quantidade = req.body.quantidade; 
  var ingrediente = req.body.ingrediente; 

  service.getCustomValue(ingrediente, quantidade, function (dataValue) {
    res.render('result', { title: 'Confirme sua compra', finalValue: dataValue });
  })
})

module.exports = router;
