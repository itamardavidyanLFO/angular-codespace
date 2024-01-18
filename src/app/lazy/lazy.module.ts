import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { LazyRoutingModule } from './lazy-routing.module';
import { LazyErrorHandler } from '../error-handlers';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: LazyErrorHandler }
  ],
  declarations: [LazyComponent]
})
export class LazyModule { }
