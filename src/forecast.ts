export function ForecastWeather(dataJson: any, unit: string) {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth()).padStart(2, '0');
    const yy = String(today.getFullYear());
    const date = dd + '/' + mm + '/' + yy;

    console.log(
`weather of the next 10 days:`);
    dataJson.forecasts.map((item: any, i: number) => {
        if (i <= 10) {
            console.log(`
    min temperature: ${item.low}${unit}
    max temperature: ${item.high}${unit}
    descib of the day: ${item.text}`)
        }
    })
}
