import { OutgoingHttpHeaders } from 'http';
import OAuth from 'oauth';
import { ForecastWeather } from './forecast';
import { TodayWeather } from './today';
import emoji from 'node-emoji';

const ora = require('ora');

// Request to yahoo weather api and display data
export function WeatherRequest(location: string, today: boolean, unit: string): any {
    const spinner = ora(`Loading weather ${emoji.get('☀️')}`).start();
    const header: OutgoingHttpHeaders = {
        "X-Yahoo-App-Id": "ciXphbG0"
    }
    location = changeAccent(location)
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
                if (unit === '°C') {
                    dataJson.forecasts.map((item: any, i: number) => {
                        item.low = Math.floor((item.low - 32) * 5/9);
                        item.high = Math.floor((item.high - 32) * 5/9);
                    })
                }
                if (dataJson.statusCode === undefined) {
                    spinner.stop();
                    if (today == true) {
                        TodayWeather(dataJson, unit)
                        process.exit(0)
                    }
                    else {
                        ForecastWeather(dataJson, unit);
                        process.exit(0)
                    }
                } else {
                    spinner.stop();
                    console.log(errorMessage(dataJson.statusCode))
                    process.exit(0)
                }
                spinner.stop();
            }
        }
    )
}

function errorMessage(status: number): string {
    switch (status) {
        case 400:
            return (`Bad location value or location not find in data base ${emoji.get('error')} example location <paris,fr>`)
        default:
            return (`Bad location value ${emoji.get('error')}`)
    }
}

function changeAccent(str: string): string {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}
