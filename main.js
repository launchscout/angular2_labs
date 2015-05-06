import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'my-app'
})
@View({
  templateUrl: 'my-app.html'
})
class AppComponent {
  constructor() {
    this.name = "Kroger";
  }

}

bootstrap(AppComponent);
