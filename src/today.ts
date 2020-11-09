import { GetEmojy } from './utils';
import emoji from 'node-emoji';

// Display today weather
export function TodayWeather(dataJson: any, unit: string) {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth()).padStart(2, '0');
    const yy = String(today.getFullYear());
    const date = dd + '/' + mm + '/' + yy;

    console.log(
`weather of the day (${date}) ${emoji.get('earth_africa')}:
    min temperature: ${dataJson.forecasts[0].low}${unit}
    max temperature: ${dataJson.forecasts[0].high}${unit}
    descib of the day: ${dataJson.forecasts[0].text} ${GetEmojy(dataJson.forecasts[0].text)}`);
}
