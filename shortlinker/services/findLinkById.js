import { client } from "../db/index.js";
import { httpError } from "../helpers/index.js";

const findLinkById = async (id) => {
  try {
    const query = `SELECT originurl FROM links WHERE id = $1`;

    const link = await client.query(query, [id]);

    return link.rows[0].originurl;
  } catch (e) {
    throw httpError(404, "Not found");
  }
};

export { findLinkById };
