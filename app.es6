import {Component, Template, bootstrap} from 'angular2/angular2';

@Component({
  selector: "my-app"
})
@Template({
  inline: "Hello from angular 2 to {{name}}"
})
class MyAppComponent {
  constructor() {
    this.name = "Kroger";
  }
}

bootstrap(MyAppComponent)
