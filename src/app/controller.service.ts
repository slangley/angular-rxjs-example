import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { debounceTime, switchMap, distinctUntilChanged} from 'rxjs/operators';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  public userId = new Subject<string>()
  public data: BehaviorSubject<any> = new BehaviorSubject<any>([]);


  constructor(public dataService: DataService) {
    this.userId.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((val)=>{
          return this.dataService.getPosts(val);
      })
    ).subscribe(this.data);

  }


}
