import { OutgoingHttpHeaders } from 'http';
import OAuth from 'oauth';
import { ForecastWeather } from './forecast';
import { TodayWeather } from './today';

const ora = require('ora');

export function WeatherRequest(location: string, today: boolean): any {
    const spinner = ora('Loading weather ☀️⛈').start();
    const header: OutgoingHttpHeaders = {
        "X-Yahoo-App-Id": "ciXphbG0"
    }
    var request = new OAuth.OAuth(
        "",
        "",
        "dj0yJmk9SmcyTW5jSHBOamVhJmQ9WVdrOVkybFljR2hpUnpBbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWFj",
        '688fad1ac1799c16ceaf9be75c2c53736475eed2',
        "1.0",
        "",
        'HMAC-SHA1',
        0,
        header
    );
    request.get(
        `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${location}&format=json`,
        "",
        "",
        function (err, data, result) {
            if (err)
                console.log(err);
            else {
                let dataJson = JSON.parse(String(data));
                dataJson.forecasts.map((item: any, i: number) => {
                    item.low = Math.floor((item.low - 32) * 5/9);
                    item.high = Math.floor((item.high - 32) * 5/9);
                })
                spinner.stop();
                if (today == true)
                    TodayWeather(dataJson)
                else 
                    ForecastWeather(dataJson);
            }
        }
    )
}
