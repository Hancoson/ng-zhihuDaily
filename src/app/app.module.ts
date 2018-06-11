import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ElModule } from 'element-angular';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

import { appRoutes } from './route/route';
import { ItemsComponent } from './components/items/items.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ItemsComponent
  ],
  imports: [
    appRoutes,
    BrowserModule,
    ElModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
