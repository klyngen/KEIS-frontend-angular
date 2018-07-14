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
        let issueText = '## ' + this.classType + '\n';
        issueText = issueText.concat('## Triggering event: \n');
        issueText = issueText.concat('## operative system (optional)\n');
        issueText = issueText.concat('## KEIS backend version: \n');
        issueText = issueText.concat('\n\n' + this.description);
        return encodeURIComponent(issueText);
    }

    formatTitle(): string {
        return encodeURI(this.title);
    }

    createIssueUrl(url: string): string {
        console.log(url);
        if (url === null) {
            url = '';
        }

        url = url.concat('?title=' + this.formatTitle());
        url = url.concat('&assignee=klyngen');
        url = url.concat('&body=' + this.formatDescription());
        return url;
    }
}
