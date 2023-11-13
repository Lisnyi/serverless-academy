const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { body } = req;
    const error = schema(body);
    if (error) {
      next(error);
    }
    next();
  };

  return func;
};

export { validateBody };
