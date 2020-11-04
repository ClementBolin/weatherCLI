import minimist from 'minimist';
import { WeatherRequest } from './weatherRequest';

function main() {
    const args = minimist(process.argv.slice(2));
    console.log(args);
    WeatherRequest();
}

main();