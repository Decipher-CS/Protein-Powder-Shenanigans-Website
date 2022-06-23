const Product = require('../models/productModel');

async function getProducts(req, res) {
    try{
        const products = await Product.findAll();
        res.writeHead(200, {'Content-Type':'application/json'})
        res.end(JSON.stringify(products))
    } catch (error) {
        console.log('error faced', error)
    }
};

async function getProduct(req, res, id) {
    try{
        const product = await Product.findById(id);
        res.writeHead(200, {'Content-Type' : 'application/json'});
        res.end(JSON.stringify(product));
    }
    catch (error) {
        console.log(error);
    }
}

async function addNewProduct(req, res) {
    try{
        let body = ''
        req.on('data', chunk => {
            body += chunk.toString();
            console.log(body);
        });

        req.on('end', async _ => {
            const product = JSON.parse(body)
            const status = await Product.addNewProduct(product);
            res.writeHead(status)
            res.end('Done')
        });

    }
    catch (error){
        console.log(error)
    }
}

async function deleteProduct(req, res, id) {
    try{
        const status = await Product.deleteProduct(id);
        res.end('Done')
    } catch(err) {
        console.log(err)
    }
}

async function updateProduct(req, res, id) {
    try{
        body = ''
        req.on('data', chunk =>{
            body += chunk.toString()
        });

        req.on('end', async _ =>{
            
            const status = await Product.updateProduct(id, JSON.parse(body));
            res.end('Done')
        })
    } catch(err) {
        console.log(err)
    }
}

function showHomePage(req, res) {
    res.end('Home Page')
}

module.exports = {
    getProducts,
    getProduct,
    showHomePage,
    addNewProduct,
    updateProduct,
    deleteProduct
}