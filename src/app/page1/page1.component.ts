import { RouterService } from './../router.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(public routerService: RouterService) { }

  ngOnInit() {
  }

}
