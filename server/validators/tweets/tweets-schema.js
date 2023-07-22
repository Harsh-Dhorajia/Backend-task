'user strict';
const joi = require('joi');
const schema = {
    postTweet: joi.object({
        message: joi.string().required(),
    }),
    editTweet: joi.object({
        message: joi.string().required(),
    }),
};

module.exports = schema;
