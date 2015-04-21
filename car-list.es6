import {Component, Template, For} from 'angular2/angular2';

@Component({
  selector: "car-list"
})
@Template({
  url: "car-list.html",
  directives: [For]
})
export class CarList {
  constructor() {
    this.cars = [
      {make: "Chevy", model: "Nova"},
      {make: "Ford", model: "Fairlane"}
    ];
  }
}
