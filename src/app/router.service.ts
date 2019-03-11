import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  public page = 1;

  constructor(private router: Router) {

  }

  public gotToPage(nextPage: number): void {
    if (this.page === nextPage || nextPage < 1 || nextPage > 4 ) { return; }

    this.page = nextPage;
    console.log('go to page:', this.page);

    if (this.page === 1) {
      this.router.navigate(['/page1']);
    } else if (this.page === 2) {
        this.router.navigate(['/page2']);
    } else if (this.page === 3) {
        this.router.navigate(['/page3']);
    } else if (this.page === 4) {
        this.router.navigate(['/page4']);
    }
  }
}
