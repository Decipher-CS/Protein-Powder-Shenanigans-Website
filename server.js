const http = require('http');
const PORT = process.env.PORT || 5500;
const {getProducts, getProduct, showHomePage, addNewProduct, updateProduct, deleteProduct} = require('./controllers/productController');


const server = http.createServer( (req, res) => {
    if (req.url == '/products' && req.method == 'GET'){
        getProducts(req, res);

    } else if (req.url === '/' && req.method == 'GET'){
        showHomePage(req, res);

    } else if (req.url.match(/\/products\/([0-9]+)/) && req.method == 'GET'){
        let id = req.url.split('/')[2];
        getProduct(req, res, id);

    } else if (req.url.match(/\/products\/([0-9]+)/) && req.method == 'DELETE'){
        id = req.url.split('/')[2]
        deleteProduct(req,res,id)

    } else if (req.url.match(/\/products\/([0-9]+)/) && req.method == 'PUT'){
        id = req.url.split('/')[2]
        updateProduct(req,res, id);
    
    } else if (req.url == '/products' && req.method == 'POST'){
        addNewProduct(req, res);

    }else{
        res.writeHead(404);
        res.write('Page not found.');
    };

})
server.listen(PORT, () => console.log(`Server Running on localhost:${PORT}/...`));

