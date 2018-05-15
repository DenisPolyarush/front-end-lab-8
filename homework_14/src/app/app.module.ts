import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScheduleComponentComponent } from './schedule-component/schedule-component.component';
import { ClassComponentComponent } from './class-component/class-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponentComponent,
    ClassComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
