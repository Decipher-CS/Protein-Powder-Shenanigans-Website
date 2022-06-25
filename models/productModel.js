const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://privileged4010:2qXa0jKOZw8Z6vRM@gymconsumableproductdat.uowijxx.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri)
let db

client.connect()
.then(client => db = client.db('Products').collection('ProteinPowder'))
.catch(err => console.log(err))



let findAll = async () => {
    if (!db) return
    return await db.find().toArray()
};

let findById = async (id) => {
    if (!db) return 
    return await db.findOne({ id: id })
};

let addNewProduct = async () => {
    if (!db) console.log("Database not ready yet.")
    return await db.insertOne()
}

let deleteProduct = async (id) =>{
    if (!db) return
    return await db.deleteOne({ id: id })
}

let updateProduct = async (id, body) =>{
    if (!db) return
    return await db.updateOne({ id: id })
}

module.exports = {
    findAll,
    findById,
    addNewProduct,
    updateProduct,
    deleteProduct,
};