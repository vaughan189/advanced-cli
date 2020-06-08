import fs from 'fs-extra';

import { injectable } from 'inversify'
import { Answer } from '../models/answer-choice';

@injectable()
export class DefaultTemplate {
    constructor() { }

    public generateFile(nameOfTheFileWithExtentions: string, fileContent: string, hashPath = false, pathOfFile = ''): void {
        this.createFile(pathOfFile, nameOfTheFileWithExtentions, fileContent)
    }

    private createFile(pathOfFile: string, fileName: string, fileContent: string): void {
        let filePath: string = process.cwd() + `${pathOfFile}/${fileName}`
        fs.writeFile(filePath, fileContent, (error: Error) => {
            if (!error) {
                console.log(`file created: ${fileName}`);
            } else {
                console.log(error);
                console.log(`File Error: ${fileName}`);
            }
        })
    }
}