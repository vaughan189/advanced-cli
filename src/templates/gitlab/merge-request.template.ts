import { injectable, inject  } from 'inversify';
import { DefaultTemplate } from '../default.template';
import { GitlabPath } from '../../models/path';
import { FileName } from '../../models/filename';

@injectable()
export class MergeRequest {
    private fileName = FileName.MERGE_REQUEST;
    private hasPath = true;
    private pathOfFile = GitlabPath.MERGE_REQUEST_TEMPLATE;

    constructor(@inject('DefaultTemplate') private defaultTemplate: DefaultTemplate) {}

    public generateFile(): void {
        this.defaultTemplate.generateFile(this.fileName, this.fileContent(), this.hasPath, this.pathOfFile)
    }

    private fileContent(): string {
        return `# What does this implement/fix? Explain your changes.
        …
        ## Does this close any currently open issues?
        …
        ## Any relevant logs, error output, etc?
        (Please put this in a code block, so it is more readable for reviewers )
        ## Any other comments?
        ...
        ## Where has this been tested?
        **Browsers:**
        - [ ] Chrome
        - [ ] Firefox
        - [ ] Safari
        - [ ] IE 11
        - [ ] Edge
        - [ ] Opera
                `;
    }

}