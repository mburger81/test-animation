import { Component, OnInit } from '@angular/core';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(public routerService: RouterService) { }

  ngOnInit() {
  }

}
