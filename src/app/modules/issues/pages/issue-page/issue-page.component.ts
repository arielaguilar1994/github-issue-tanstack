import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, tap } from 'rxjs';
import { IssueService } from '../../services/issue.service';
import { IssueCommentComponent } from '../../components/issue-comment/issue-comment.component';

@Component({
  selector: 'app-issue-page',
  imports: [RouterLink, IssueCommentComponent],
  templateUrl: './issue-page.component.html',
  styleUrl: './issue-page.component.css',
  providers: [IssueService]
})
export default class IssuePageComponent {
  private route = inject(ActivatedRoute);
  private issueService = inject(IssueService);

  issueNumber = toSignal<string>(
    this.route.paramMap.pipe(
      map(params => params.get('number') ?? ''),
      tap((number) => this.issueService.setIssueNumber(number))
    )
  )

  issueQuery = this.issueService.issuesQuery;
  issueCommentsQuery = this.issueService.issuesCommentsQuery;
}
