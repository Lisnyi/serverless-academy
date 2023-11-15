import { addOriginURL, addShortURL } from "../services/index.js";
import { generateShortURL } from "../helpers/index.js";

const generateShortLink = async (req, res) => {
  const { url } = req.query;

  const dbLink = await addOriginURL(url);
  const shortLink = generateShortURL(dbLink.id);
  const { shorturl: shortURL } = await addShortURL(dbLink.id, shortLink);

  res.json({
    shortURL,
  });
};

export { generateShortLink };
