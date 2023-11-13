import { verifyToken, httpError } from "../helpers/index.js";
import { findUserById } from "../services/authServices/index.js";

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(httpError(401, "Not authorized"));
  }
  try {
    const id = verifyToken(token);
    const user = await findUserById(id);
    if (!user) {
      next(httpError(401, "Not authorized"));
    }
    req.user = user;
    next();
  } catch {
    next(httpError(401, "Not authorized"));
  }
};

export { authenticate };
