import { client } from "../../db/index.js";
import { httpError } from "../../helpers/index.js";

const findUserById = async (id) => {
  const query = `SELECT * FROM users WHERE id = $1`;

  const user = await client.query(query, [id]);

  if (user.rows.length === 0) {
    throw httpError(404, "User not found");
  }

  return user.rows[0];
};

export { findUserById };
