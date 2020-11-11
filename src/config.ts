import fs from 'fs';
import os from 'os';

export function GetClientID(): string {
    return JSON.parse(String(fs.readFileSync(os.homedir() + "/.weatherCLI_config"))).clientID;
}

export function GetClientSecret(): string {
    return JSON.parse(String(fs.readFileSync(os.homedir() + "/.weatherCLI_config"))).clientSecret;
}
