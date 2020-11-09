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

test("test TodayWeather function with good value in °C", () => {
    let res = TodayWeather(FakeDataJson, "°C")
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth()).padStart(2, '0');
    const yy = String(today.getFullYear());
    const date = dd + '/' + mm + '/' + yy;

    expect(res).toBe(
`weather of the day (${date}) ${emoji.get('earth_africa')}:
    min temperature: 13°C
    max temperature: 17°C
    descib of the day: Scattered Thunderstorms ${emoji.get('thunder_cloud_and_rain')}`)

    res = TodayWeather(FakeDataJson, "°F");
    expect(res).toBe(
`weather of the day (${date}) ${emoji.get('earth_africa')}:
    min temperature: 13°F
    max temperature: 17°F
    descib of the day: Scattered Thunderstorms ${emoji.get('thunder_cloud_and_rain')}`)
})
