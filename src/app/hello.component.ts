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
  value: string;
  @Input() name: string;

  @ViewChild("user", { static: false }) user: ElementRef;

  constructor(public controller: ControllerService) {}
  subscription;

  ngAfterViewInit() {
    console.log(this.user);

    this.userEvent = fromEvent<any>(this.user.nativeElement, "keyup").pipe(
      map(e => e.target.value),
      startWith("1"),
      debounceTime(400),
      distinctUntilChanged(),
    );

    this.subscription = this.userEvent.subscribe(x => {
      console.log(x);
      this.value = x;
    });

    this.userEvent.subscribe(this.controller.userId);
  }

  userEvent: Observable<string>;
}
