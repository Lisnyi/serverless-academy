import { client } from "../../db/index.js";
import { httpError } from "../../helpers/index.js";

const findUserByEmail = async (email) => {
  const query = `SELECT * FROM users WHERE email = $1`;

  const user = await client.query(query, [email]);

  if (user.rows.length === 0) {
    throw httpError(404, "Email or password is wrong");
  }

  return user.rows[0];
};

export { findUserByEmail };
