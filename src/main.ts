import minimist from 'minimist';
import { WeatherRequest } from './weatherRequest';

function help() {
    console.log(`
    weather [command] <option>

    today ............... show weather for today
    forecast ............ show 10 day weather forecast
    version ............. show package version
    help ................ show help menu for a command
    `)
}

function main() {
    const args = minimist(process.argv.slice(2));

    if (args.version || args.v) {
        console.log("version 1.0.0");
        return
    }
    if (args.help || args.h) {
        help();
        return
    }
    if (args.t || args.today) {
        WeatherRequest("Paris,fr", true);
        return;
    } else if (args.f || args.forecast) {
        WeatherRequest("Paris,fr", false)
    } else {
        help();
        return;
    }
}

main();