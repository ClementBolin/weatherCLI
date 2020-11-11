import minimist from 'minimist';
import emoji from 'node-emoji';
import { GetEmojy, getLocation, help } from '../utils';

describe('test get emoji function', () => {
    test('test get emojy rain', () => {
        expect(GetEmojy("Rain")).toBe(emoji.get('rain_cloud'))
    })
    
    test('test partly cloudy emoji', () => {
        expect(GetEmojy("Partly Cloudy")).toBe(emoji.get('partly_sunny'));
    })
    
    test('test Scattered Thunderstorms emoji', () => {
        expect(GetEmojy('Scattered Thunderstorms')).toBe(emoji.get('thunder_cloud_and_rain'));
    })
    
    test('test Scattered Showers emoji', () => {
        expect(GetEmojy('Scattered Showers')).toBe(emoji.get('rain_cloud'))
    })
    
    test('test Mostly Cloudy emoji', () => {
        expect(GetEmojy('Mostly Cloudy')).toBe(emoji.get('partly_sunny'))
    })
    
    test('test Mostly Sunny emoji', () => {
        expect(GetEmojy('Mostly Sunny')).toBe(emoji.get('sun_small_cloud'))
    })
    
    test('test Breezy emoji', () => {
        expect(GetEmojy('Breezy')).toBe(emoji.get('dash'))
    })
    
    test('test Cloudy emoji', () => {
        expect(GetEmojy('Cloudy')).toBe(emoji.get('cloud'))
    })
    
    test('test Sunny emoji', () => {
        expect(GetEmojy('Sunny')).toBe(emoji.get('☀️'))
    })
    
    test('test with bad type', () => {
        expect(GetEmojy('bad type')).toBe('')
    })

    test('test Thunderstorms emoji', () => {
        expect(GetEmojy('Thunderstorms')).toBe(emoji.get('thunder'))
    })
})

global.console.log = jest.fn();

describe('test help function', () => {
    help("help")
    it('should return main help', () => {
        expect(global.console.log).toHaveBeenCalledWith(
`weather [command] <option>

    --today, -t \t\tshow weather for today
    --forecast, -f \t\tshow 10 day weather forecast
    --version, -v \t\tshow package version
    --location, -l \t\tweather at this location, if it is not present, takes the location noted in the ~/.weatherCLI_config
    --update, -u \t\tupdate location and measure in ~/..weatherCLI_config
    --help, -h \t\tshow help menu for a command`
            )
        })
    
    help("location")
    it('should return help for location flag', () => {
            expect(global.console.log).toHaveBeenCalledWith(
`weather [--location or -l] <value>

    value \t\tit's location value, <city,country> example <paris,fr>`
            )
        })
})

describe('test getLocation function', () => {
    test('location without error', () => {
        let args = {
            l: "paris,fr",
        }
        const res = getLocation(args)
        expect(res).toBe("paris,fr")
    })
    test('lcoation without error and location flag', () => {
        let args = {
            location: "paris,fr",
        }
        const res = getLocation(args);
        expect(res).toBe("paris,fr")
    })
})
