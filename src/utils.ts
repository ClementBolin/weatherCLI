import fs from 'fs';
import os from 'os';
import emoji from 'node-emoji';

// get location in .weatherCLI_config file
export function getLocation(args: any): string {
    let location = "";

    if (args.l)
        location = String(args.l) || String(args.location)
    else if (args.location)
        location = String(args.location)
    else
        location = JSON.parse(String(fs.readFileSync(os.homedir() + "/.weatherCLI_config"))).location;
    // Check valid location
    if (location.includes(',') == false) {
        help("location");
        process.exit(0);
    }
    return location;
}

// display help
export function help(type: string) {
    if (type == "help") {
        console.log(
`weather [command] <option>

    --today, -t \t\tshow weather for today
    --forecast, -f \t\tshow 10 day weather forecast
    --version, -v \t\tshow package version
    --location, -l \t\tweather at this location, if it is not present, takes the location noted in the ~/.weatherCLI_config
    --update, -u \t\tupdate location and measure in ~/..weatherCLI_config
    --help, -h \t\tshow help menu for a command`)
    } else if (type == "location") {
        console.log(
`weather [--location or -l] <value>

    value \t\tit's location value, <city,country> example <paris,fr>`)
    }
}

export function GetEmojy(type: string): string {
    switch (type) {
        case 'Partly Cloudy':
            return (emoji.get('partly_sunny'))
        case 'Scattered Thunderstorms':
            return (emoji.get('thunder_cloud_and_rain'));
        case 'Scattered Showers':
            return (emoji.get('rain_cloud'))
        case 'Rain':
            return (emoji.get('rain_cloud'))
        case 'Mostly Cloudy':
            return (emoji.get('partly_sunny'))
        case 'Mostly Sunny':
            return (emoji.get('sun_small_cloud'))
        case 'Breezy':
            return (emoji.get('dash'))
        case 'Cloudy':
            return (emoji.get('cloud'))
        case 'Rain And Snow':
            return (emoji.get('snow_cloud'))
        case 'Sunny':
            return (emoji.get('☀️'))
        case 'Thunderstorms':
            return (emoji.get('thunder'))
        default:
            return ('')
    }
}
