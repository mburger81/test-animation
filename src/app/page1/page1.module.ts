import { NgModule } from '@angular/core';
import { Page1RoutingModule } from './page1-routing.module';
import { Page1Component } from './page1.component';


@NgModule({
    declarations: [
        Page1Component
    ],
    imports: [
        Page1RoutingModule
    ],
    entryComponents: [
        Page1Component
    ]
})
export class Page1Module { }
