import { isEmail, isPassword } from "../validation/index.js";
import { httpError } from "../helpers/index.js";

const registrationSchema = ({ email, password }) => {
  if (!isEmail(email)) {
    return httpError(400, "Email is not valid");
  }

  if (!isPassword(password)) {
    return httpError(
      400,
      "Password is not valid. Minimum 8 characters, maximum 32 characters, at least one letter and one number."
    );
  }
};

export { registrationSchema };
