import { WorkListService } from './../../services/work-list.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkModel } from 'src/app/models/work.model';

@Component({
  selector: 'app-works-done',
  templateUrl: './works-done.component.html',
  styleUrls: ['./works-done.component.scss'],
})
export class WorksDoneComponent implements OnInit {
  @Input() title: string = 'Works';

  workList: WorkModel[] = [];

  constructor(private workListService: WorkListService) {}

  ngOnInit(): void {
    this.getWorkList();
  }

  getWorkList(): void {
    this.workListService
      .getWorks()
      .subscribe((workList) => (this.workList = workList));
  }
  addWork(): void {
    let newId: number = this.workList.length + 1;
    const newWork: WorkModel = {
      id: newId,
      title: `Trabajo ${newId}`,
      urlImage: 'https://www.indellient.com/wp-content/uploads/2021/01/20221124_How-To-Dockerize-an-Angular-Application-with-Nginx-Refresh.jpg',
      description: 'Best job in life',
    };
    this.workListService
      .add(newWork as WorkModel)
      .subscribe((work: WorkModel) => {
        this.workList.push(work);
      });
  }

  removeWorkToList(worksToRemove: WorkModel): void {
    this.workListService.remove(worksToRemove.id).subscribe();
    this.getWorkList();
  }
}
