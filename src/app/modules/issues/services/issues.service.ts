import { Injectable, signal } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { getIssues, getLabels } from '../actions';
import { StateIssue } from '../interfaces';

@Injectable()
export class IssuesService {
  selectedState = signal<StateIssue>(StateIssue.All);
  selectedLabels = signal(new Set<string>());

  labelsQuery = injectQuery(() => ({
    queryKey: ['github-labels'],
    queryFn: () => getLabels(),
  }));

  issuesQuery = injectQuery(() => ({
    queryKey: [
      'github-issues',
      {
        state: this.selectedState(),
        selectedLabel: [...this.selectedLabels()],
      },
    ],
    queryFn: () => getIssues(this.selectedState(), [...this.selectedLabels()]),
  }));

  showIssuesByState(state: StateIssue): void {
    this.selectedState.set(state);
  }

  toggleLable(label: string): void {
    const labels = this.selectedLabels();

    if (labels.has(label)) {
      labels.delete(label);
    } else {
      labels.add(label);
    }

    this.selectedLabels.set(new Set(labels));
  }
}
