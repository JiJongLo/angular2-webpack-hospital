import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeContainerComponent } from './home-container.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'patients',
        component: HomeContainerComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
