import { findLinkById } from "../services/index.js";

const redirectShortLink = async (req, res) => {
  const id = req.params.id;
  const url = await findLinkById(id);

  res.redirect(url);
};

export { redirectShortLink };
