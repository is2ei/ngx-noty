import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxNotyModule } from 'ngx-noty';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxNotyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
