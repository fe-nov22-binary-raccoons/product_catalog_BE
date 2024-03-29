/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { validate, Joi } from 'express-validation';

const loginValidation = {
  body: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
      .regex(/[a-zA-Z0-9]{3,30}/)
      .required()
  })
};

export const validateAuth = () => {
  return validate(loginValidation, {}, {});
};
