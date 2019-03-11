import { Component } from '@angular/core';
import { loginRouteSlideInAnimation } from './loginRouteSlideInAnimation';
import { RouterService } from './router.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    loginRouteSlideInAnimation
  ]
})
export class AppComponent {
  title = 'test-animation';

  constructor(public routerService: RouterService) {}

  public handleDone( event: any ): void {

      console.log(event);

}
}
