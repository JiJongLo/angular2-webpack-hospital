import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeContainerComponent } from './home-container.component';
import { DiagnosesContainerComponent, DiagnosesListComponent } from './diagnoses/index';
import { PatientExistsGuard } from '../../guards/patient-exists';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'patients',
        component: HomeContainerComponent
      },
      {
        path: 'patients/:id',
        component: DiagnosesContainerComponent,
        canActivate: [ PatientExistsGuard ]
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
