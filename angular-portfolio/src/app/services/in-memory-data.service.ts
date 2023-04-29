import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(){
    const works = [
      {
        "id": 1,
        "title": "First work",
        "urlImage":"../../../assets/img/js.jpg",
        "description": "My first headache. I loved it!"
      },
      {
        "id": 2,
        "title": "Second work",
        "urlImage":"../../../assets/img/ionic.png",
        "description": "Learning Ionic with Angular. Andorid development is very impressive! Learning about android studio."
      },
      {
        "id": 3,
        "title": "Third work",
        "urlImage":"../../../assets/img/angular-bootstrap.png",
        "description": "My brand new, still in progress, Angular Portfolio! Yesss!"
      },
      {
        "id": 4,
        "title": "Fourth work",
        "urlImage":"../../../assets/img/angular-bootstrap.png",
        "description": "My brand new, still in progress, Angular Portfolio! Yesss!"
      }
    ];
    return {works}
  }
}
