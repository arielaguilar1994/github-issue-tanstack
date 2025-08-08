import { Injectable, signal } from '@angular/core';
import {
  injectQuery,
  injectQueryClient,
} from '@tanstack/angular-query-experimental';
import { getCommentsByIssue, getIssuesByNumber } from '../actions';
import { IGitHubIssue } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class IssueService {
  private issueNumber = signal<string | null>(null);
  private queryClient = injectQueryClient();

  issueQuery = injectQuery(() => ({
    queryKey: ['github-issue', this.issueNumber()],
    queryFn: () => getIssuesByNumber(this.issueNumber()!),
    enabled: this.issueNumber() !== null, // cuando valida que issuNumber tiene valor dispara la peticion
  }));

  setIssueNumber(number: string): void {
    this.issueNumber.set(number);
  }

  issueCommentsQuery = injectQuery(() => ({
    queryKey: ['github-issue', this.issueNumber(), 'comments'],
    queryFn: () => getCommentsByIssue(this.issueNumber()!),
    enabled: this.issueNumber() !== null,
  }));

  /**
   * Esta funcion hace un prefecth/ fetch  sin haberse seleccionado
   * cargando el issuesQuery para que se haga mas rapido
   * @param {string} id
   */
  prefetchIssue(id: string) {
    this.queryClient.prefetchQuery({
      queryKey: ['github-issue', id], // esto es de tipado estrictor para manejar la misma llave
      queryFn: () => getIssuesByNumber(id),
      staleTime: 1000 * 60 * 5, // 5 minutos
    });
  }

  
  /**
   * Esto es basicamente para cuando tenes la data setearla en la queryId y evitar el fecth
   * es porque en el input ya tenemos toda la info
   * @param {IGitHubIssue} issue 
   */
  setIssueData(issue: IGitHubIssue): void {
    this.queryClient.setQueryData(
      ['github-issue', issue.number.toString()],
      issue,
      { updatedAt: Date.now() + 1000 * 60 } // 1 minuto
    );
  }
}
