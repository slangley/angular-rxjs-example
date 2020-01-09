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

  constructor(private dataService: DataService) {}

  posts: [];

  ngOnInit() {
    this.dataService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
