import { ForecastWeather } from '../forecast';
import emoji from 'node-emoji';

const FakeDataJson = {
    forecasts: [
        {
            day: 'Sun',
            date: 1604790000,
            low: 13,
            high: 17,
            text: 'Scattered Thunderstorms',
            code: 47
        },
        {
            day: 'Sun',
            date: 1604790000,
            low: 13,
            high: 17,
            text: 'Scattered Thunderstorms',
            code: 47
        },
        {
            day: 'Sun',
            date: 1604790000,
            low: 13,
            high: 17,
            text: 'Scattered Thunderstorms',
            code: 47
        },
        {
            day: 'Sun',
            date: 1604790000,
            low: 13,
            high: 17,
            text: 'Scattered Thunderstorms',
            code: 47
        },
        {
            day: 'Sun',
            date: 1604790000,
            low: 13,
            high: 17,
            text: 'Scattered Thunderstorms',
            code: 47
        },
        {
            day: 'Sun',
            date: 1604790000,
            low: 13,
            high: 17,
            text: 'Scattered Thunderstorms',
            code: 47
        },
        {
            day: 'Sun',
            date: 1604790000,
            low: 13,
            high: 17,
            text: 'Scattered Thunderstorms',
            code: 47
        },
        {
            day: 'Sun',
            date: 1604790000,
            low: 13,
            high: 17,
            text: 'Scattered Thunderstorms',
            code: 47
        },
        {
            day: 'Sun',
            date: 1604790000,
            low: 13,
            high: 17,
            text: 'Scattered Thunderstorms',
            code: 47
        },
        {
            day: 'Sun',
            date: 1604790000,
            low: 13,
            high: 17,
            text: 'Scattered Thunderstorms',
            code: 47
        },
        {
            day: 'Sun',
            date: 1604790000,
            low: 13,
            high: 17,
            text: 'Scattered Thunderstorms',
            code: 47
        },
        {
            day: 'Sun',
            date: 1604790000,
            low: 13,
            high: 17,
            text: 'Scattered Thunderstorms',
            code: 47
        },
    ]   
}

global.console.log = jest.fn()

describe("test ForecastWeather function with good value in °C", () => {
    ForecastWeather(FakeDataJson, "°C")
    let res = `weather of the next 10 days ${emoji.get('earth_africa')}:\n`
    FakeDataJson.forecasts.map((item, i) => {
        const test = `
${item.day}
min temperature: ${item.low}°C
max temperature: ${item.high}°C
descib of the day: ${item.text} ${emoji.get('thunder_cloud_and_rain')}\n`
        if (i <= 10) {
            res = res + test
        }
    })
    console.log(res)
    it('should console forecast weather', () => {
        expect(global.console.log).toHaveBeenCalledWith(res)
    })
})

describe("test ForecastWeather function with good value in °C", () => {
    ForecastWeather(FakeDataJson, "°F")
    let res = `weather of the next 10 days ${emoji.get('earth_africa')}:\n`
    FakeDataJson.forecasts.map((item, i) => {
        const test = `
${item.day}
min temperature: ${item.low}°F
max temperature: ${item.high}°F
descib of the day: ${item.text} ${emoji.get('thunder_cloud_and_rain')}\n`
        if (i <= 10) {
            res = res + test
        }
    })
    console.log(res)
    it('should console forecast weather', () => {
        expect(global.console.log).toHaveBeenCalledWith(res)
    })
})
