import {Component, Template, bootstrap} from 'angular2/angular2';

@Component({
  selector: "my-app"
})
@Template({
  inline: "Hello from angular 2"
})
class MyAppComponent {}

bootstrap(MyAppComponent)
