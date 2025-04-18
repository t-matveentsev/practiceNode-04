import Joi from "joi";
import { typeList } from "../constants/movies.js";

export const movieAddSchema = Joi.object({
  title: Joi.string().required().messages({
    "any.required": "There must be a movie title.",
    "string.base": "Movie title must be a string",
  }),
  director: Joi.string().required(),
  favorite: Joi.boolean(),
  type: Joi.string().valid(...typeList),
});

export const movieUpdateSchema = Joi.object({
  title: Joi.string(),
  director: Joi.string(),
  favorite: Joi.boolean(),
  type: Joi.string().valid(...typeList),
});
