import fs from 'fs'
import { JSON_File_PATH as jsonFile } from "../config.js"

export class JsonUtils {
    public static getJsonValue(key: string): any {
        const jsonObj = JSON.parse(fs.readFileSync(jsonFile, "utf-8"))
        return jsonObj[key]
    }
}