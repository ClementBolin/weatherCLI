import minimist from 'minimist';
import { checkInstall, install } from './install';
import { getLocation, help } from './utils';
import { WeatherRequest } from './weatherRequest';

function main() {
    const args = minimist(process.argv.slice(2));

    if (checkInstall() == false) {
        install()
        return;
    }
    const location = getLocation(args);
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
