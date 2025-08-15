import { Component, Input } from '@angular/core';
import { Learningapp } from '../../model/learningapp';

@Component({
  selector: 'app-curso',
  imports: [],
  templateUrl: './curso-view.html',
  
})
export class CursoView {
 @Input() learningapp!:Learningapp

}


