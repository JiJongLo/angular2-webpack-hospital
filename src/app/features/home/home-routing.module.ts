import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeContainerComponent } from './home-container.component';
import { DiagnosesContainerComponent, DiagnosesListComponent } from './diagnoses/index';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'patients',
        component: HomeContainerComponent
      },
      {
        path: 'patient/:id',
        component: DiagnosesContainerComponent,
        // children: [
        //   {
        //     path: '',
        //     component: DiagnosesListComponent
        //   }
        // ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
