import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BoxModelComponent } from './components/box-model/box-model.component';
import { BackgroundAndBorderComponent } from './components/background-and-border/background-and-border.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'homepage' },
  { path: 'homepage', component: HomeComponent },
  { path: 'box-model', component: BoxModelComponent },
  { path: 'background-and-border', component: BackgroundAndBorderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
