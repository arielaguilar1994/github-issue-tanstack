import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IGitHubIssue, StateIssue } from '../../interfaces';

@Component({
  selector: 'app-issue-item',
  imports: [CommonModule, RouterLink],
  templateUrl: './issue-item.component.html',
  styleUrl: './issue-item.component.css'
})
export class IssueItemComponent {
  issue = input.required<IGitHubIssue>();

  get isOpen(): boolean {
    return this.issue().state === StateIssue.Open;
  }

  get since(): string {
    return '';
  }
}
