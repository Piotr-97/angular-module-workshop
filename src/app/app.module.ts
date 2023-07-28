import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AComponent } from './my-module/a/a.component';
import { BComponent } from './my-module/b/b.component';
import { MyModuleModule } from './my-module/my-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   MyModuleModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
