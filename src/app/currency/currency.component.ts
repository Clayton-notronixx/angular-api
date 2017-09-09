import { Component, OnInit } from '@angular/core';
import { SharedService } from './../shared.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styles: []
})
export class CurrencyComponent implements OnInit {
  id_Currency: string = "";
  my_Result: any;

  constructor(public _sharedService: SharedService) { }

  ngOnInit() {
  }

  callCurrencyService() {
    this._sharedService.getCurrencyExchRate(this.id_Currency.toUpperCase())
      .subscribe(
        lstResult => {
          this.my_Result = JSON.stringify(lstResult);
        },
        error => {
          console.log("Error. the callCurrencyService result JSON value is as follows:");
          console.log(error);
        }
      )
  }
}
