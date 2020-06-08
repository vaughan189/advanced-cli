import inquirer from 'inquirer';

import { Answer, ProviderValue, Choice } from '../models/answer-choice';

export async function providerQuestion(): Promise<Answer> {
    const listOfFiles: Choice[] = [
        {name: 'Github', value: ProviderValue.GITHUB},
        {name: 'Gitlab', value: ProviderValue.GITLAB},
        {name: 'CodeCommit (AWS)', value: ProviderValue.CODECOMMIT},
        {name: 'Bitbucket', value: ProviderValue.BITBUCKET},
    ];

    return inquirer.prompt([{ 
        name: 'provider',
        type: 'list',
        message: 'Select a Git hosting provider:',
        choices: listOfFiles,
    }]);
}