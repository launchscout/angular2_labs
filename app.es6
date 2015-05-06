import {Component, Template, bootstrap} from 'angular2/angular2';

@Component({
  selector: "my-app"
})
@Template({
  url: "my-app.html"
})
class MyAppComponent {
  constructor() {
    this.name = "Kroger";
  }
}

bootstrap(MyAppComponent)
