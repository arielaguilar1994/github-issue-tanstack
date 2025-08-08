import { Component, inject, input } from '@angular/core';
import { IGitHubLabel } from '../../interfaces';
import { CommonModule } from '@angular/common';
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 'app-labels-selector',
  imports: [CommonModule],
  templateUrl: './labels-selector.component.html',
  styleUrl: './labels-selector.component.css'
})
export class LabelsSelectorComponent {
  labels = input.required<IGitHubLabel[]>()
  private issuesService = inject(IssuesService);
  
  isSelected(labelName: string): boolean {
    return this.issuesService.selectedLabels().has(labelName);
  }

  onToggle(label: string): void {
    this.issuesService.toggleLable(label);
  }
}
