import { Injectable, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { getCommentsByIssue, getIssuesByNumber } from '../actions';

@Injectable()
export class IssueService {
  private issueNumber = signal<string|null>(null);

  issuesQuery = injectQuery(() => ({
    queryKey: ['github-issue', this.issueNumber()],
    queryFn: () => getIssuesByNumber(this.issueNumber()!),
		enabled: this.issueNumber !== null // cuando valida que issuNumber tiene valor dispara la peticion
  }));

	setIssueNumber(number: string): void {
		this.issueNumber.set(number);
	}

  issuesCommentsQuery = injectQuery(() => ({
    queryKey: ['github-issue-comments', this.issueNumber()],
    queryFn: () => getCommentsByIssue(this.issueNumber()!),
		enabled: this.issueNumber !== null
  }));
}
