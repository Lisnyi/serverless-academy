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

export { forecastMessage };
