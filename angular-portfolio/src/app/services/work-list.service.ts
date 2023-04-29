import { Injectable } from '@angular/core';
import { WORKS } from 'src/assets/files/mock-works';
import { WorkModel } from '../models/work.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkListService {

  works: WorkModel[] = WORKS;

  constructor() { }

  getWorks():Observable<WorkModel[]> {
    const worksOb = of(WORKS);
    return worksOb;
  }
}
