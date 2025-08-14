import { Injectable } from '@angular/core';
import { learningAppData } from '../data/learningapp.data';
import { Learningapp } from '../model/learningapp';

@Injectable({
  providedIn: 'root'
})
export class LearningappServices {
  private learningApps: Learningapp=learningAppData;
  constructor() { } 
  getCourse():Learningapp{
    return this.learningApps;
  }
  
}
