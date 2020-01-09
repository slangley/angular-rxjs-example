import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  

  public userId = new Subject<string>()

  constructor() {
    this.userId.subscribe((x)=> {console.log("CONTROLLER SERVICE", x)});
  }


}
