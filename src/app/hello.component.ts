import { Component, Input } from '@angular/core';
import { ControllerService } from './controller.service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;

  constructor( public controller: ControllerService) {}
}
