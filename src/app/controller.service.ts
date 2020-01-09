import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { debounceTime, switchMap, distinctUntilChanged} from 'rxjs/operators';
import { DataService, Post } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  //Incoming Parameter
  public userId = new Subject<string>()
  
  //Output Observable
  public data:Observable<Post[]>;


  constructor(public dataService: DataService) {

    //Sets up the connect, switches the result of this.userId and returns
    // the getPosts observable which is subscribable
    this.data = this.userId.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((val) =>{
          return this.dataService.getPosts(val);
      })
    );
  }
}
