import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { ControllerService } from "./controller.service";
import { fromEvent, Observable } from "rxjs";
import {
  map,
  filter,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  startWith
} from "rxjs/operators";

@Component({
  selector: "hello",
  templateUrl: "hello.component.html",
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;

  @ViewChild("user", { static: false }) user: ElementRef;

  constructor(public controller: ControllerService) {}
  subscription;

  ngAfterViewInit() {
    console.log(this.user);

    //Sets up the event from the user field
    this.userEvent = fromEvent<any>(this.user.nativeElement, "keyup").pipe(
      map(e => e.target.value),
      startWith(null),
      debounceTime(400),
      distinctUntilChanged(),
    );

    //Subscribes to the above event, and forwards the results to this.controller.userId Subject
    this.userEvent.subscribe(this.controller.userId);
  }

  userEvent: Observable<string>;
}
