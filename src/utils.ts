import fs from 'fs';
import os from 'os';

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

export function help(type: string) {
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
