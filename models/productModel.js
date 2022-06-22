let proteinData = require('../data/proteinPowderData.json');
const { writeDataToFile } = require('../utils');

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

let updateProduct = (id) =>{
    return new Promise((resolve, reject) => {
        resolve(1)
    });
}

module.exports = {
    findAll,
    findById,
    addNewProduct,
    updateProduct
};