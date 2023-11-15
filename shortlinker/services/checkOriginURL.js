import { client } from "../db/index.js";

const checkOriginURL = async (url) => {
  const query = `SELECT * FROM links WHERE originurl = $1`;

  const link = await client.query(query, [url]);

  if (link.rows.length !== 0) {
    return link.rows[0];
  }
};

export { checkOriginURL };
