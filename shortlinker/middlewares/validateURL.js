import { httpError } from "../helpers/index.js";

const validateURL = (req, res, next) => {
  try {
    const { url } = req.query;
    const link = new URL(url);

    if (link.protocol === "http:" || link.protocol === "https:") {
      next();
    } else {
      throw httpError(400, "Invalid URL");
    }
  } catch (e) {
    next(e);
  }
};

export { validateURL };
