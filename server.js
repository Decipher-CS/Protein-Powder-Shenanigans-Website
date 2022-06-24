const http = require('http')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5500;
const {getProducts, getProduct, showHomePage, addNewProduct, updateProduct, deleteProduct} = require('./controllers/productController')

app
.get('/products', (req, res)=>{
    getProducts(req, res);
})
.get('/products/:id', (req, res)=>{
    getProduct(req, res, req.params.id);
})
.post('/products/:id', (req, res) =>{
    addNewProduct(req, res, req.params.id);
})
.post('/products', (req, res)=> {
    addNewProduct(req, res);
})
.put('products/:id', (req, res) => {
    updateProduct(req,res, req.params.id);
})
.delete('/products/:id', (req, res) =>{
    deleteProduct(req, res, req.params.id)
})
.all('/', (req, res) => {
    res.send('404')
})
.listen(PORT, _ => console.log('Running on port ::', PORT));

