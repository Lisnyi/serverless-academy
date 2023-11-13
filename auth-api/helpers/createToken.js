import jwt from "jsonwebtoken";

const { JWT_SECRET_KEY, TOKEN_TTL } = process.env;

const createToken = (payload, expires = false) => {
  if (expires) {
    const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: TOKEN_TTL });
    return token;
  }

  const token = jwt.sign(payload, JWT_SECRET_KEY, {});
  return token;
};

export { createToken };
