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

export function install() {
    const directoryPath = path.join(os.homedir());
    const readLine = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readLine.question("enter your current location <city,country> example: \"paris,fr\"\n> ", input => {
        fs.appendFileSync(directoryPath + "/.weatherCLI_config", input);
        readLine.close()
        console.log("weather install you can run following command : weather -t");
    })
}
