import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { leadingComment } from '@angular/compiler';
import { LearningappComponent } from './app/components/learningapp.components/learningapp.components';

bootstrapApplication(LearningappComponent, appConfig)
  .catch((err) => console.error(err));
