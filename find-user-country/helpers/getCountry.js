import { getDb } from "../db/index.js";
import { getIntegerIp } from "./index.js";

const getCountry = async (ip) => {
  const integerIp = getIntegerIp(ip);

  const db = await getDb();

  const [_, __, countryCode, country] = db
    .find((item) => {
      const [start, end] = item.replace(/"/g, "").split(",");
      return integerIp >= Number(start) && integerIp <= Number(end);
    })
    .replace(/"/g, "")
    .split(",");

  return { countryCode, country };
};

export { getCountry };
