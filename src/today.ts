export function TodayWeather(dataJson: any) {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth()).padStart(2, '0');
    const yy = String(today.getFullYear());
    const date = dd + '/' + mm + '/' + yy;

    console.log(
`weather of the day (${date}):
    min temperature: ${dataJson.forecasts[0].low}
    max temperature: ${dataJson.forecasts[0].high}
    descib of the day: ${dataJson.forecasts[0].text}`);
}
