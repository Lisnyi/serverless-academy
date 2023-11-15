import { client } from "../db/index.js";
import { checkOriginURL } from "./index.js";
import { httpError } from "../helpers/index.js";

const addOriginURL = async (url) => {
  const query = `
    INSERT INTO links (originurl)
    VALUES ($1)
    RETURNING *;
    `;

  const findedLink = await checkOriginURL(url);

  if (findedLink) {
    return findedLink;
  }

  const newURL = await client.query(query, [url]);

  if (newURL.rows.length === 0) {
    throw httpError(400, "Bad request");
  }

  return newURL.rows[0];
};

export { addOriginURL };
