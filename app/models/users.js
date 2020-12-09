'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: false

        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        details: {
            age: { type: Number },
            role: { type: String }
        }
        // isActive: {
        //     type: Boolean
        // }
    }
);
module.exports = mongoose.model('user', userSchema, 'users'); // 3 parametri nume model, numele schemei, si collectionul din DB mongoose/