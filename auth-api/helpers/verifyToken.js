import jwt from "jsonwebtoken";

const { JWT_SECRET_KEY } = process.env;

const verifyToken = (token) => {
  const { id } = jwt.verify(token, JWT_SECRET_KEY);
  return id;
};

export { verifyToken };
