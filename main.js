import {Component, View, bootstrap} from 'angular2/angular2';
import {CarList} from 'car-list';

@Component({
  selector: 'my-app'
})
@View({
  templateUrl: 'my-app.html',
  directives: [CarList]
})
class AppComponent {
  constructor() {
    this.name = "Kroger";
  }

}

bootstrap(AppComponent);
