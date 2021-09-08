import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFileComponent } from './componets/home-file/home-file.component';

const routes: Routes = [
  {
    path: '',
    component: HomeFileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
