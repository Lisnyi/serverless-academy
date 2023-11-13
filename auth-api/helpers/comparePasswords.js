import bcrypt from "bcrypt";
import { httpError } from "./httpError.js";

const comparePasswords = async (loginPassword, userPassword) => {
  const passwordCompare = await bcrypt.compare(loginPassword, userPassword);

  if (!passwordCompare) {
    throw httpError(404, "Email or password is wrong");
  }
};

export { comparePasswords };
