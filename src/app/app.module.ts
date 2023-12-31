import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BoxModelComponent } from './components/box-model/box-model.component';
import { BackgroundAndBorderComponent } from './components/background-and-border/background-and-border.component';
import { OverflowComponent } from './components/overflow/overflow.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BoxModelComponent,
    BackgroundAndBorderComponent,
    OverflowComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
