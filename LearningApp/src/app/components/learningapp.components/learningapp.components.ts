import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { learningAppData } from '../../data/learningapp.data';

@Component({
  selector: 'app-learningapp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learningapp.components.html'
})
export class LearningappComponent {
  learningapp = learningAppData;
}
