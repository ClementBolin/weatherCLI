import { TodayWeather } from '../today';
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
    ]
}

global.console.log = jest.fn();

describe("test TodayWeather function with good value in °C", () => {
    TodayWeather(FakeDataJson, "°C")
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth()).padStart(2, '0');
    const yy = String(today.getFullYear());
    const date = dd + '/' + mm + '/' + yy;

    it('should console today weather', () => {
        expect(global.console.log).toHaveBeenCalledWith(
`weather of the day (${date}) ${emoji.get('earth_africa')}:
    min temperature: 13°C
    max temperature: 17°C
    descib of the day: Scattered Thunderstorms ${emoji.get('thunder_cloud_and_rain')}`)

    })
})
