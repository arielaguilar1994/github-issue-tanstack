import { Injectable } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { getIssues, getLabels } from '../actions';

@Injectable()
export class IssuesService {
    
  labelsQuery = injectQuery(() => ({
    queryKey: ['github-labels'],
    queryFn: () => getLabels(),
  }));

  issuesQuery = injectQuery(() => ({
    queryKey: ['github-issues'],
    queryFn: () => getIssues(),
  }));
}
