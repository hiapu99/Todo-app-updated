const mongoose = require('mongoose');

const DataBase = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log("Mongoose is successFully connected sir");
    } catch (error) {
        console.log("Mongoose is not connected sir");
    }
}
module.exports=DataBase