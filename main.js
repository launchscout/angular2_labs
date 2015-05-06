import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'my-app'
})
@View({
  template: '<h1>Hello from angular 2 to {{name}}</h1>'
})
class AppComponent {
  constructor() {
    this.name = "Kroger";
  }

}

bootstrap(AppComponent);
