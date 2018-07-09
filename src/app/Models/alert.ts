export class Alert {
    classType: string;
    title: string;
    description: string;

    constructor(classType: string, title: string, description: string) {
        this.title = title;
        this.description = description;
        this.classType = classType;
    }

    formatDescription(): string {
        const issueText = '## ' + this.classType + '\n';
        issueText.concat('## Triggering event: \n');
        issueText.concat('## operative system (optional)\n');
        issueText.concat('## KEIS backend version: \n');
        issueText.concat('\n\n\n' + this.description);
        return encodeURI(issueText);
    }

    formatTitle(): string {
        return encodeURI(this.title);
    }

    createIssueUrl(url: string): string {
        url.concat('?title=' + this.formatTitle());
        url.concat('&body=' + this.formatDescription());
        return url;
    }
}
