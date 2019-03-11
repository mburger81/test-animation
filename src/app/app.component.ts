import { Component } from '@angular/core';
import { loginRouteSlideInAnimation } from './loginRouteSlideInAnimation';
import { RouterService } from './router.service';
import { AnimationEvent } from '@angular/animations';

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

  public captureStartEvent( event: AnimationEvent): void {

    console.log('START: ', event);

  }

  public captureDoneEvent( event: AnimationEvent): void {

      console.log('DONE: ', event);

  }

  public prepareRouter(o) {
    console.log('o.isActivated', o.isActivated, ';page:', this.routerService.page);
    return this.routerService.page;
  }
}
