import { Component, Input } from '@angular/core';
import { Learningapp } from '../../model/learningapp';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student-views.html',
  
})
export class StudentViews {
@Input() learningapp!:Learningapp;
}
