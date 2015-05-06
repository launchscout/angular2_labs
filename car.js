import {Component, View, For} from 'angular2/angular2';

@Component({
  selector: "car-details",
  properties: {
    car: "car"
  }
})
@View({
  templateUrl: "car.html",
})
export class CarDetails {
  car;
  constructor() {
    this.car = {make: "Honda", model: "Accord"};
  }
}
