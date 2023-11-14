import { httpError } from "./index.js";

const getIntegerIp = (ip) => {
  const brokenIp = ip.split(".").map(Number);

  if (
    brokenIp.length !== 4 ||
    brokenIp.some((octet) => Number(octet) < 0 || Number(octet) > 255)
  ) {
    throw httpError(400, "IP address is not valid");
  }

  return brokenIp.reduce((previousValue, number, index) => {
    return previousValue + number * Math.pow(256, 3 - index);
  }, 0);
};

export { getIntegerIp };
