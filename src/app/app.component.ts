import { Component } from "@angular/core";
import { ControllerService } from "./controller.service";
import { DataService } from "./data.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  constructor( public controller: ControllerService) {}

  ngOnInit() {
  }
}
