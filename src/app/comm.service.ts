import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommService {

  constructor() { }
  gunInfo = new Subject();
  gunType = new Subject();
}
