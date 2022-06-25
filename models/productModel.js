let proteinData = require('../data/proteinPowderData.json');
const { writeDataToFile } = require('../utils');

const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://privileged4010:2qXa0jKOZw8Z6vRM@gymconsumableproductdat.uowijxx.mongodb.net/?retryWrites=true&w=majority'

async function connect(){
    const client = new MongoClient(uri)
    try{
        let status = await client.connect()
        const db = client.db('gymConsumableProductData')
        console.log(db)

    } catch(err){
        console.log(err)

    } finally{
        await client.close()
    }
}
connect()

let findAll = () => {
    return new Promise((resolve, reject) => {
        resolve(proteinData);
    });
};

let findById = (id) => {
    return new Promise((resolve, reject) => {
        product = proteinData.find( p => p.id == id);
        resolve(product);
    });
        // .reject(() => console.log(reject))

};

let addNewProduct = (product) => {
    return new Promise((resolve, reject) => {
        newData = {id : Number(proteinData.at(-1).id) + 1, ...product};
        proteinData.push(newData);
        writeDataToFile('./data/proteinPowderData.json', proteinData);
        resolve(201);

        if (proteinData.at(-1) == newData){
            resolve(201);
        } else{
            reject(409);
        };
    });
};


let deleteProduct = (id) =>{
    return new Promise((resolve, reject) => {
        product = proteinData.find((item) => item.id == id);
        productIndex = proteinData.indexOf(product);
        proteinData.pop(productIndex);
        writeDataToFile('./data/proteinPowderData.json', proteinData);

        resolve(1)
    });
}

let updateProduct = (id, body) =>{
    return new Promise((resolve, reject) => {
        product = proteinData.find((item) => item.id == id);
        productIndex = proteinData.indexOf(product);
        proteinData.pop(productIndex);
        proteinData.push(body)
        console.log(proteinData)
        writeDataToFile('./data/proteinPowderData.json', proteinData);

        resolve(1)
    });
}

module.exports = {
    findAll,
    findById,
    addNewProduct,
    updateProduct,
    deleteProduct
};