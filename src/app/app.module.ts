import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GlobalErrorHandler } from './error-handlers';
import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [		
    AppComponent,
    HomeComponent,
    FirstComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
