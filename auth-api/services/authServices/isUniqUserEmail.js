import { client } from "../../db/index.js";
import { httpError } from "../../helpers/index.js";

const isUniqUserEmail = async (email) => {
  const query = `SELECT * FROM users WHERE email = $1`;

  const user = await client.query(query, [email]);

  if (user.rows.length !== 0) {
    throw httpError(409, "Email in use");
  }

  return user.rows[0];
};

export { isUniqUserEmail };
