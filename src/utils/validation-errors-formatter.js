const validationErrorsFormatter = function (error) {
  const errors = {};

  error.inner.forEach(e => {
    errors[e.path] = e.message;
  });

  return errors;
};

export default validationErrorsFormatter;
