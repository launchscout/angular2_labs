import {Component, Template, bootstrap} from 'angular2/angular2';
import {CarList} from 'car-list';
@Component({
  selector: "my-app"
})
@Template({
  url: "my-app.html",
  directives: [CarList]
})
class MyAppComponent {
  constructor() {
    this.name = "Kroger";
  }
}

bootstrap(MyAppComponent)
