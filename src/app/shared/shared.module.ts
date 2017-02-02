import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './toolbar/index';
import { NavbarComponent } from './navbar/index';
import { TableComponent } from './table';
import { MaterialModule } from '@angular/material';
/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule.forRoot()],
  declarations: [ToolbarComponent,
      NavbarComponent, TableComponent
  ],
  exports: [ToolbarComponent, NavbarComponent, TableComponent,
    CommonModule, FormsModule, RouterModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
