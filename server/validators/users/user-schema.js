'user strict';
const joi = require('joi');
const schema = {
    register: joi.object({
        userName: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().required()
    }),
};

module.exports = schema;
