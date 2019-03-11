import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // component: AppComponent,
    children: [
        {
            path: '',
            redirectTo: 'page1',
            pathMatch: 'full'
        },
        {
            path: 'page1',
            children: [
                {
                    path: '',
                    loadChildren: './page1/page1.module#Page1Module'
                }
            ]
        }, {
            path: 'page2',
            children: [
                {
                    path: '',
                    loadChildren: './page2/page2.module#Page2Module'
                }
            ]
        }, {
            path: 'page3',
            children: [
                {
                    path: '',
                    loadChildren: './page3/page3.module#Page3Module'
                }
            ]
        }, {
            path: 'page4',
            children: [
                {
                    path: '',
                    loadChildren: './page4/page4.module#Page4Module'
                }
            ]
        }
    ]
  }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
