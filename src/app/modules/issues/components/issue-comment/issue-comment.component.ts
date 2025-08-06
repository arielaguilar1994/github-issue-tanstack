import { Component, input } from '@angular/core';
import { IGitHubIssue } from '../../interfaces';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-issue-comment',
  imports: [MarkdownModule],
  templateUrl: './issue-comment.component.html',
  styleUrl: './issue-comment.component.css'
})
export class IssueCommentComponent {
  issue = input.required<IGitHubIssue>();
}
