import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
    MONGODB: Joi.required().default(3005),
    PORT: Joi.number(),
    DEFAULT_LIMIT: Joi.number().default(6),
})