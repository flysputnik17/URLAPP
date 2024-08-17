import Joi from "joi";
import { celebrate } from "celebrate";
import validator from "validator";

const validateUrl = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  } else {
    return helpers.error("string.url");
  }
};

module.exports.validateItemBody = celebrate({
  body: Joi.object().keys({
    title: Joi.string().required().message({
      "string.empty": "The title is missing",
    }),
    description: Joi.string().required().messages({
      "string.empty": 'The "description" is missing',
    }),
    urlToImage: Joi.string().required().messages({
      "string.empty": 'The "description" is urlToImage',
    }),
  }),
});
