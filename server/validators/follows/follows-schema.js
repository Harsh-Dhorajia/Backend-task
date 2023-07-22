'user strict';
const joi = require('joi');
const schema = {
    follow: joi.object({
        user_id: joi.number().required(),
    }),
    unfollow: joi.object({
        message: joi.string().required(),
    }),
};

module.exports = schema;
