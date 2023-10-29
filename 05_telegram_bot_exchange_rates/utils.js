function makeMarkup(date, temp, weather, clouds, wind) {
  return `date: ${date}\ntemp: ${temp}°C\nweather: ${weather}\nclouds: ${clouds}%\nwind: ${wind} km/h\n`;
}

function forecastMessage(list, interval = 3) {
  const message = [];
  let dayForecastList;

  if (interval === 3) {
    dayForecastList = list.slice(0, 9);
  }

  if (interval === 6) {
    dayForecastList = list.slice(0, 9).filter((item, index) => index % 2 === 0);
  }

  dayForecastList.map(({ dt_txt, main, weather, clouds, wind }) => {
    message.push(
      makeMarkup(
        dt_txt,
        main.temp,
        weather[0].description,
        clouds.all,
        wind.speed
      )
    );
  });
  return message.join("\n");
}

function getRateFromMonoBank(currency, response) {
  let currencyCode
  if (currency === 'USD') currencyCode = 840
  if (currency === 'EUR') currencyCode = 978
  const currencyObj = response.filter(
    ({ currencyCodeA, currencyCodeB }) => currencyCodeA === currencyCode && currencyCodeB === 980
  );
  return {
    buy: currencyObj[0].rateBuy,
    sale: currencyObj[0].rateSell,
  };
}

function getRateFromPrivatBank(currency, response) {
  const currencyObj = response.filter(
    ({ ccy, base_ccy }) => ccy === currency && base_ccy === "UAH"
  );
  return {
    buy: currencyObj[0].buy,
    sale: currencyObj[0].sale,
  };
}

function getAverage(a, b) {
  return (Number(a) + Number(b)) / 2;
}

function getAverageRate(first, second) {
  return {
    buy: getAverage(first.buy, second.buy),
    sale: getAverage(first.sale, second.sale),
  };
}

function exchangeRateMessage (currency, rate) {
  return `Currency: ${currency}\nbuy: ${rate.buy}\nsale: ${rate.sale}`
}

export { forecastMessage, getRateFromPrivatBank, getRateFromMonoBank, getAverageRate, exchangeRateMessage };
