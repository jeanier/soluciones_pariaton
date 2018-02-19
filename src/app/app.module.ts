import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './conmon/header.component';
import { FooterComponent } from './conmon/footer.component';
import { ContainerComponent } from './conmon/container.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HeaderComponent,ContainerComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
