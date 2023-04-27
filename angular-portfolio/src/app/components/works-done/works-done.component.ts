import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-works-done',
  templateUrl: './works-done.component.html',
  styleUrls: ['./works-done.component.scss']
})
export class WorksDoneComponent {
  @Input() title: string = 'Works';

  workList =[
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
    }
  ];
}
