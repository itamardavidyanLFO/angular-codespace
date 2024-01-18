import { ErrorHandler, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';
import { LazyErrorHandler } from '../error-handlers';


const routes: Routes = [
  {
    path: '',
    component: LazyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [
    { provide: ErrorHandler, useClass: LazyErrorHandler }
  ],
  exports: [RouterModule]
})
export class LazyRoutingModule { }