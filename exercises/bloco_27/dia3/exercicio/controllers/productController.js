const express = require('express');
const productModel = require('../models/productModel');

const router = express.Router();

router.get('/list-products', async(req, res, next) => {
  const products = await productModel.getAll();

  res.send(products);
});

router.get('/get-by-id/:id', async(req, res, next) => {
  const product = await productModel.getById(req.params.id);

  res.send(product);
});

router.post('/add-product', async(req, res, next) => {
  const { name, brand } = req.body;
  const newProduct = await productModel.addProduct(name, brand);
  res.send(newProduct);
});

router.delete('delete-product/:id', async(req, res) => {
  const products = await productModel.exclude(req.params.id);

  res.send(products);
});

router.put('/update-product/:id', async(req, res) => {
  const { name, brand } = req.body;

  const products = await productModel.update(req.params.id, name, brand);

  res.send(products);
});

module.exports = router;