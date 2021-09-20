import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieslistComponent } from './movieslist/movieslist.component';
import { MoviesdetailsComponent } from './moviesdetails/moviesdetails.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [

  {path:'movieslist', component:MovieslistComponent},
  {path:'moviesdetails', component:MoviesdetailsComponent},
  {path:'about', component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
