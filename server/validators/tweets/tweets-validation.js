'user strict';
const commonResponse = require('../../utils/commonResponse');
const tweetsSchema = require('./tweets-schema');
const constants = require('../../utils/constants');
const { ServerStatusCode } = constants;
const { apiErrorRes } = commonResponse;

const errorMessage = (value, res, next) => {
    if (value.error) {
        console.log(value.error, '+++++++++++');
        apiErrorRes(
            res,
            value.error.details[0].message.replace(/[^a-zA-Z ]/g, ""),
            ServerStatusCode.UNPROCESSABLE,
            true
        );
    } else {
        next();
    }
};

module.exports = {
    postTweet: async (req, res, next) => {
        const value = await tweetsSchema.postTweet.validate(req.body);
        errorMessage(value, res, next);
    },
    editTweet: async (req, res, next) => {
        const value = await tweetsSchema.editTweet.validate(req.body);
        errorMessage(value, res, next);
    },
};
