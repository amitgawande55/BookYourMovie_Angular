import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieslistComponent } from './movieslist/movieslist.component';
import { MoviesdetailsComponent } from './moviesdetails/moviesdetails.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ShowmovieslistComponent } from './showmovieslist/showmovieslist.component';
import { splitComma } from './appPipes/splitComma.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MovieslistComponent,
    MoviesdetailsComponent,
    AboutComponent,
    ShowmovieslistComponent,
    splitComma
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
