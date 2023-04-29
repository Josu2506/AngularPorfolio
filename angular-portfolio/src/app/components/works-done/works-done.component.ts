import { WorkListService } from './../../services/work-list.service';
import { Component, Input, OnInit } from '@angular/core';
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
    this.workListService.getWorks().subscribe(workList => this.workList = workList);
  }
}
