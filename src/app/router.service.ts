import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class RouterService {

  public page = 1;

  constructor(private router: Router) {
    this.router.events
                  .pipe(
                    filter(
                      (event) => event instanceof NavigationEnd
                    )
                  )
                  .subscribe((event: NavigationEnd) => {
                      // console.log('event', event);

                      if (event.url === '/page1') {
                        this.page = 1;
                      } else if (event.url === '/page2') {
                        this.page = 2;
                      } else if (event.url === '/page3') {
                        this.page = 3;
                      } else if (event.url === '/page4') {
                        this.page = 4;
                      }
                  });
  }

  public gotToPage(nextPage: number): void {
    if (this.page === nextPage || nextPage < 1 || nextPage > 4 ) { return; }

    this.page = nextPage;
    console.log('go to page:', this.page);

    if (this.page === 1) {
      this.router.navigateByUrl('/page1');
    } else if (this.page === 2) {
      this.router.navigateByUrl('/page2');
    } else if (this.page === 3) {
      this.router.navigateByUrl('/page3');
    } else if (this.page === 4) {
      this.router.navigateByUrl('/page4');
    }
  }
}
