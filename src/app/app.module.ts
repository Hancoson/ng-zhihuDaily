import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ElModule } from 'element-angular';

import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

import { appRoutes } from './route/route';
import { ItemsComponent } from './components/items/items.component';

import { SliceStrPipe } from '../pipe/slicestr.pipe';
import { DetailComponent } from './components/detail/detail.component';


@NgModule({
  declarations: [
    SliceStrPipe,
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ItemsComponent,
    DetailComponent
  ],
  imports: [
    BrowserAnimationsModule,
    appRoutes,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserModule,
    ElModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
