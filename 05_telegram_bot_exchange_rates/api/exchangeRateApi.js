import axios from "axios";
import {
  getRateFromMonoBank,
  getRateFromPrivatBank,
  getAverageRate,
} from "../utils.js";
import { addToCache, getFromCache } from "../cache.js";

const monoBankURL = "https://api.monobank.ua/bank/currency";
const privatBankURL = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

async function getMonoBankCurrency() {
  try {
    const response = await axios.get(monoBankURL);
    addToCache("mono", response.data);
    return response.data;
  } catch (error) {
    return getFromCache("mono");
  }
}

async function getPrivatBankCurrency() {
  try {
    const response = await axios.get(privatBankURL);
    addToCache("privat", response.data);
    return response.data;
  } catch (error) {
    return getFromCache("privat");
  }
}

async function getDollarRate() {
  try {
    const monoBankCurrency = await getMonoBankCurrency();
    const privatBankCurrency = await getPrivatBankCurrency();
    const monoBankDollarRate = getRateFromMonoBank("USD", monoBankCurrency);
    const privatBankDollarRate = getRateFromPrivatBank(
      "USD",
      privatBankCurrency
    );
    return getAverageRate(monoBankDollarRate, privatBankDollarRate);
  } catch (error) {
    console.error(error);
  }
}

async function getEuroRate() {
  try {
    const monoBankCurrency = await getMonoBankCurrency();
    const privatBankCurrency = await getPrivatBankCurrency();
    const monoBankEuroRate = getRateFromMonoBank("EUR", monoBankCurrency);
    const privatBankEuroRate = getRateFromPrivatBank("EUR", privatBankCurrency);
    return getAverageRate(monoBankEuroRate, privatBankEuroRate);
  } catch (error) {
    console.error(error);
  }
}

export { getDollarRate, getEuroRate };
