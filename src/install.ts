import fs from 'fs';
import path  from 'path';
import os from 'os';
import readline from 'readline';
import { GetClientID, GetClientSecret } from './config';

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


export function install() {
    const readLine = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const directoryPath = path.join(os.homedir());
    let location = "";
    let measure = "";
    let clientID = "";
    let clientSecret = "";

    readLine.question("Enter your current location <city,country> example: \"paris,fr\"\n> ", input => {
        location = input;
        if (location.includes(',')) {
            readLine.question("which measure you wish to use (°C or °F)\n> ", input => {
                measure = input;
                if (measure !== '°C' && measure !== '°F')
                    install();
                else {
                    readLine.question("go on https://developer.yahoo.com/ for create an app\nClient ID :\n> ", input => {
                        clientID = input
                        readLine.question("Client Secret\n> ", input => {
                            clientSecret = input
                            fs.appendFileSync(directoryPath + "/.weatherCLI_config", JSON.stringify({
                                location: location,
                                measure: measure,
                                clientID: clientID,
                                clientSecret: clientSecret,
                            }));
                            console.log("weatherCLI install you can run following command : weatherCLI -t");
                            readLine.close()
                        })
                    })
                }
            })
        } else
            install()
    })
}

export function update() {
    const readUpdate = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    const directoryPath = path.join(os.homedir());
    const clientID = GetClientID()
    const clientSecret = GetClientSecret()
    let location = ""
    let measure = ""

    readUpdate.question("Update your current location <city,country> example: \"paris,fr\"\n> ", input => {
        location = input
        if (location.includes(',')) {
            readUpdate.question("Update your measure that you want to use (°C or °F)", intpu => {
                if (measure !== '°C' || measure !== '°C')
                    update()
                console.log("location: " + location + " measure: " + measure)
            })
        }
    })
}
