import { client } from "../../db/index.js";

import { httpError } from "../../helpers/index.js";

const updateUserAccessToken = async (token, id) => {
  const query = `UPDATE users SET "access_token" = $1 WHERE id = $2 RETURNING *`;

  const user = await client.query(query, [token, id]);

  if (user.rows.length === 0) {
    throw httpError(404, "Not found");
  }

  return user.rows[0];
};

const updateUserRefreshToken = async (token, id) => {
  const query = `UPDATE users SET "refresh_token" = $1 WHERE id = $2 RETURNING *`;

  const user = await client.query(query, [token, id]);

  if (user.rows.length === 0) {
    throw httpError(404, "Not found");
  }

  return user.rows[0];
};

export { updateUserAccessToken, updateUserRefreshToken };
