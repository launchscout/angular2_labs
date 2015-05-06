import {Component, View, For} from 'angular2/angular2';

@Component({
  selector: "car-list"
})
@View({
  templateUrl: "car-list.html",
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
