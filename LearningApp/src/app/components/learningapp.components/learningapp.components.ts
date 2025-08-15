import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { learningAppData } from '../../data/learningapp.data';
import { CursoView } from "../curso-view/curso-view";
import { StudentViews } from "../student-views/student-views";

@Component({
  selector: 'app-learningapp',
  standalone: true,
  imports: [CommonModule, CursoView, StudentViews],
  templateUrl: './learningapp.components.html'
})
export class LearningappComponent {
  @Input() learningapp = learningAppData;
}
