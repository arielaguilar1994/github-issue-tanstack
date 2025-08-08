import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IGitHubIssue, StateIssue } from '../../interfaces';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'app-issue-item',
  imports: [CommonModule, RouterLink],
  templateUrl: './issue-item.component.html',
  styleUrl: './issue-item.component.css',
})
export class IssueItemComponent {
  issue = input.required<IGitHubIssue>();
  private issueService = inject(IssueService);


  get isOpen(): boolean {
    return this.issue().state === StateIssue.Open;
  }

  get since(): string {
    return '';
  }

  prefetchData(): void {
    // this.issueService.prefetchIssue(this.issue().number.toString());
    this.issueService.setIssueData(this.issue());
  }
}
