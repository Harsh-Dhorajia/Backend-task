"user strict";
const commonResponse = require("../../utils/commonResponse");
const followSchema = require("./follows-schema");
const constants = require("../../utils/constants");
const { ServerStatusCode } = constants;
const { apiErrorRes } = commonResponse;

const errorMessage = (value, res, next) => {
  if (value.error) {
    console.log(value.error, "+++++++++++");
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
  unfollow: async (req, res, next) => {
    const value = await followSchema.unfollow.validate(req.body);
    errorMessage(value, res, next);
  },
  follow: async (req, res, next) => {
    const value = await followSchema.follow.validate(req.body);
    errorMessage(value, res, next);
  },
};
