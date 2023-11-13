import { client } from "../../db/index.js";
import { httpError } from "../../helpers/index.js";

const addUser = async (email, password) => {
  const query = `
    INSERT INTO users (email, password)
    VALUES ($1, $2)
    RETURNING *;
    `;

  const newUser = await client.query(query, [email, password]);

  if (newUser.rows.length === 0) {
    throw httpError(404, "Not found");
  }

  return newUser.rows[0];
};

export { addUser };
