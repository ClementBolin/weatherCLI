import os from 'os';
import fs from 'fs';
import minimist from 'minimist';
import { checkInstall, install } from './install';
import { getLocation, help } from './utils';
import { WeatherRequest } from './weatherRequest';

export default function main() {
    const args = minimist(process.argv.slice(2));
    
    if (checkInstall() == false) {
        install()
        return;
    }
    const unit = JSON.parse(String(fs.readFileSync(os.homedir() + "/.weatherCLI_config"))).measure;
    const location = getLocation(args);
    if (args.version || args.v) {
        console.log("version 1.0.0");
        return
    }
    if (args.help || args.h) {
        help("help");
        process.exit(0)
    }
    if (args.t || args.today) {
        WeatherRequest(location, true, unit);
        return;
    } else if (args.f || args.forecast) {
        WeatherRequest(location, false, unit)
    } else {
        help("help");
        process.exit(0);
    }
}
