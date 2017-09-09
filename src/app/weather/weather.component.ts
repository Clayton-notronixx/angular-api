import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styles: []
})
export class WeatherComponent implements OnInit {
  id_City: string = "";
  id_State: string = "";
  op_City: string = "";
  op_Region: string = "";
  op_Country: string = "";
  op_Date: string = "";
  op_Text: string = "";
  op_Temp: string = "";

  constructor(public _sharedService: SharedService) { }

  ngOnInit() {
  }

  callWeatherService() {
    this._sharedService.findWeather(this.id_City, this.id_State)
      .subscribe(
        lstResult => {
          this.op_City = lstResult["query"]["results"]["channel"]["location"]["city"];
          this.op_Region = lstResult["query"]["results"]["channel"]["location"]["region"];
          this.op_Country = lstResult["query"]["results"]["channel"]["location"]["country"];
          this.op_Date = lstResult["query"]["results"]["channel"]["item"]["condition"]["date"];
          this.op_Text = lstResult["query"]["results"]["channel"]["item"]["condition"]["text"];
          this.op_Temp = lstResult["query"]["results"]["channel"]["item"]["condition"]["temp"];
        },
        error => {
          console.log("Error. The findWeather result JSON is as follows:");
          console.log(error);
        }
      )
  }
}
