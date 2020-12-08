const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: false
        },
        color: {
            type: String,
            required: true
        }
    }
);
module.exports = mongoose.model('car', carSchema, 'cars'); // 3 parametri nume model, numele schemei, si collectionul din DB mongoose/