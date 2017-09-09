import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {
  id_Movie: string = "";
  mv_Title: string = "";
  mv_Rated: string = "";
  mv_Released: string = "";
  mv_Director: string = "";
  mv_Actors: string = "";
  mv_Plot: string = "";

  constructor(public _sharedService: SharedService) { }

  ngOnInit() {
  }

  callMovieService() {
    this._sharedService.findMovie(this.id_Movie)
      .subscribe(
        lstResult => {
          this.mv_Title = lstResult["Title"];
          this.mv_Rated = lstResult["Rated"];
          this.mv_Released = lstResult["Released"];
          this.mv_Director = lstResult["Director"];
          this.mv_Actors = lstResult["Actors"];
          this.mv_Plot = lstResult["Plot"];
        },
        error => {
          console.log("Error. The findMovie result JSON value is as follows:");
          console.log(error);
        }
      );
  }
}
