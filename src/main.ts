import minimist from 'minimist';
import { WeatherRequest } from './weatherRequest';

function help(type: string) {
    if (type == "help") {
        console.log(
`weather [command] <option>

    --today, -t \t\tshow weather for today
    --forecast, -f \t\tshow 10 day weather forecast
    --version, -v \t\tshow package version
    --location, -l \t\tweather at this location, if it is not present, takes the location noted in the ~/.weatherCLI_config
    --help, -h \t\tshow help menu for a command`)
    } else if (type == "location") {
        console.log(
`weather [--location or -l] <value>

    value \t\tit's location value, <city,country> example <paris,fr>`)
    }
}

function getLocation(args: any): string {
    let location = "";

    if (args.l)
        location = String(args.l) || String(args.location)
    else if (args.location)
        location = String(args.location)
    else
        location = "";

    // Check valid location
    if (location.includes(',') == false) {
        help("location");
        process.exit(0);
    }
    return location;
}

function main() {
    const args = minimist(process.argv.slice(2));
    const location = getLocation(args);

    if (location == "")
    if (args.version || args.v) {
        console.log("version 1.0.0");
        return
    }
    if (args.help || args.h) {
        help("help");
        return
    }
    if (args.t || args.today) {
        WeatherRequest(location, true);
        return;
    } else if (args.f || args.forecast) {
        WeatherRequest(location, false)
    } else {
        help("help");
        return;
    }
}

main();
