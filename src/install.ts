import fs from 'fs';
import path  from 'path';
import os from 'os';
import readline from 'readline';

export function checkInstall(): boolean {
    const directoryPath = path.join(os.homedir());
    const folder: string[] = fs.readdirSync(directoryPath);
    var status: boolean = false;

    folder.forEach((item) => {
        if (item == ".weatherCLI_config")
            status = true;
    });
    return (status);
}

const readLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function install() {
    const directoryPath = path.join(os.homedir());
    let location = "";
    let measure = "";

    readLine.question("Enter your current location <city,country> example: \"paris,fr\"\n> ", input => {
        location = input;
        if (location.includes(',')) {
            readLine.question("which measure you wish to use (°C or °F)\n>", input => {
                measure = input;
                if (measure !== '°C' && measure !== '°F')
                install();
                else {
                    fs.appendFileSync(directoryPath + "/.weatherCLI_config", JSON.stringify({
                        location: location,
                        measure: measure
                    }));
                    console.log("weather install you can run following command : weather -t");
                    readLine.close()
                }
            })
        } else
            install()
    })
}
