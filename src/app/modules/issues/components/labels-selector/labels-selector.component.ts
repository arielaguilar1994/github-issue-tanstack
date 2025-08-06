import { Component, input } from '@angular/core';
import { IGitHubLabel } from '../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labels-selector',
  imports: [CommonModule],
  templateUrl: './labels-selector.component.html',
  styleUrl: './labels-selector.component.css'
})
export class LabelsSelectorComponent {
  labels = input.required<IGitHubLabel[]>()
}
