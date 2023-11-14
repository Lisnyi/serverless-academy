import { getCountry } from "../helpers/index.js";

const findCountry = async (req, res) => {
  const ip = req.ip;

  const { countryCode, country } = await getCountry(ip);

  console.log(`${country} - ${ip}`);

  res.json({
    country,
    countryCode,
    ip,
  });
};

export { findCountry };
