import { client } from "../db/index.js";
import { httpError } from "../helpers/index.js";

const addShortURL = async (id, url) => {
  const query = `UPDATE links SET shorturl = $2 WHERE id = $1 RETURNING *`;

  const newURL = await client.query(query, [id, url]);

  if (newURL.rows.length === 0) {
    throw httpError(404, "Not found");
  }

  return newURL.rows[0];
};

export { addShortURL };
