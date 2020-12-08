'use strict'

const ENV = process.env.NODE_ENV || 'development';
const config = require(`./environment/${ENV}`);
console.log(ENV);
module.exports = config;
