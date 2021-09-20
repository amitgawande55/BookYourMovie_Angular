import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-showmovieslist',
  templateUrl: './showmovieslist.component.html',
  styleUrls: ['./showmovieslist.component.css']
})
export class ShowmovieslistComponent implements OnInit {

  constructor(private service : SharedService) {
    // this.refreshMoviesList();
   }
  MoviesList:any=[];
  showModal:boolean=false;
  ModalTitle :string = "Movie Details";
  ActivatePopUp:boolean=false;
  movie:any;

  TitleFilter:string="";
  LanguageFilter:string="";
  LocationFilter:string="";
  ListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshMoviesList();
  }

  DetailsClick(item: any){
    this.movie = item;

    this.showModal = true;
    this.ActivatePopUp=true;
  }
  closeClick()
  {
    this.showModal = false;
    this.ActivatePopUp=false;
    this.refreshMoviesList();
  }

  refreshMoviesList(){
    this.service.getMoviesList().subscribe(data => {
      this.MoviesList = data;
      this.ListWithoutFilter= data;
    });
  }

  filterFun(){
    var TitleFilter = this.TitleFilter;
    var LanguageFilter = this.LanguageFilter;
    var LocationFilter = this.LocationFilter;
    
    this.MoviesList = this.ListWithoutFilter.filter(function (el:any){
      return el.Title.toString().toLowerCase().includes(
        TitleFilter.toString().trim().toLowerCase()
      )&&
      el.Location.toString().toLowerCase().includes(
        LocationFilter.toString().trim().toLowerCase()
      )&&
      el.Language.toString().toLowerCase().includes(
        LanguageFilter.toString().trim().toLowerCase()
      )
    });
  }

  sortResult(prop:any, asc:any){
    this.MoviesList = this.ListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
        return (a[prop]>b[prop]) ? 1 :((a[prop]<b[prop]) ? -1 : 0);
      }else{
        return (b[prop]>a[prop]) ? 1 :((b[prop]<a[prop]) ? -1 : 0);
      }
    })
  }
}
