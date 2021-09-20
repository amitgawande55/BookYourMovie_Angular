import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-moviesdetails',
  templateUrl: './moviesdetails.component.html',
  styleUrls: ['./moviesdetails.component.css']
})


export class MoviesdetailsComponent implements OnInit {

  constructor() {}
  @Input() movie:any;
  
  
  Title:string = "";
  Location:string = "";
  Language:string = "";
  Plot:string = ""; 
  Poster:string = ""; 
  ImdbID:string = ""; 
  ListingType:string = "";
  ImdbRating:string = "";
  SoundEffects: Array<string> = [];
  Stills:Array<string> = [];

  range:number=340;
  text1:string ="";
  text2:string ="";
  //show: boolean = false;

  ngOnInit(): void {
    this.Title = this.movie.Title;
    this.Location = this.movie.Location;
    this.Language = this.movie.Language;
    this.Plot = this.movie.Plot;
    this.Poster = this.movie.Poster;
    this.ImdbID = this.movie.ImdbID;
    this.ListingType = this.movie.ListingType;
    this.ImdbRating = this.movie.ImdbRating;
    this.SoundEffects = this.movie.SoundEffects;
    this.Stills = this.movie.Stills;

    if(this.movie.Plot.length>340)
    {
      this.text1 = "Read More";
      this.text2 = "";
    }
  }
  
  readMore(){
    this.range = this.movie.Plot.length;
    this.text2 = "Read Less";
    this.text1 ="";
  }
  readLess(){
    this.range = 340;
    this.text1 = "Read More";
    this.text2= "";
  }
}
