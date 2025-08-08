import { Component, computed, inject } from '@angular/core';
import { IssuesService } from '../../services/issues.service';
import { LabelsSelectorComponent } from '../../components/labels-selector/labels-selector.component';
import { IssueItemComponent } from '../../components/issue-item/issue-item.component';
import { StateIssue } from '../../interfaces';

@Component({
  selector: 'app-issues-list-page',
  imports: [LabelsSelectorComponent, IssueItemComponent],
  templateUrl: './issues-list-page.component.html',
  styleUrl: './issues-list-page.component.css',
  providers: [IssuesService]
})
export default class IssuesListPageComponent {
  private issuesService = inject(IssuesService);

  get labelsQuery() {
    return this.issuesService.labelsQuery;
  }

  get issuesQuery() {
    return this.issuesService.issuesQuery;
  }

  stateSelected = computed(() => this.issuesService.selectedState());

  onChangeState(newState: string): void {
    const state = {
      'all': StateIssue.All,
      'open': StateIssue.Open,
      'close': StateIssue.Close
    }[newState] ?? StateIssue.All;

    this.issuesService.showIssuesByState(state);
  }
}
