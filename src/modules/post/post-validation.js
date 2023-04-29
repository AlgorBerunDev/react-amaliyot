import { object, string, number, boolean } from "yup";
import validationErrorsFormatter from "../../utils/validation-errors-formatter";

const postSchema = object({
  title: string().required().min(3),
  content: string().required().min(3),
  published: boolean().required(),
  authorId: number().required().positive().integer(),
});

export const postCreateValidation = post => {
  return new Promise((resolve, reject) => {
    postSchema
      .validate(post, { abortEarly: false })
      .then(valid => resolve(valid))
      .catch(function (error) {
        reject(validationErrorsFormatter(error));
      });
  });
};
