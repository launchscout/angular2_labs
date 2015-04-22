import {Component, Template, For} from 'angular2/angular2';

@Component({
  selector: "car-details",
  bind: {
    car: "car"
  }
})
@Template({
  url: "car.html",
})
export class CarDetails {
  car;
  constructor() {
    this.car = {make: "Honda", model: "Accord"};
  }
}
