import { Component, OnInit } from '@angular/core';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  constructor(public routerService: RouterService) { }

  ngOnInit() {
  }

}
