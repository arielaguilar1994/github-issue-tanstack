import { Injectable, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { getIssues, getLabels } from '../actions';
import { StateIssue } from '../interfaces';

@Injectable()
export class IssuesService {
  selectedState = signal<StateIssue>(StateIssue.All);
    
  labelsQuery = injectQuery(() => ({
    queryKey: ['github-labels'],
    queryFn: () => getLabels(),
  }));

  issuesQuery = injectQuery(() => ({
    queryKey: ['github-issues', this.selectedState()],
    queryFn: () => getIssues(this.selectedState()),
  }));

  showIssuesByState(state: StateIssue): void {
    this.selectedState.set(state);
  }
}
