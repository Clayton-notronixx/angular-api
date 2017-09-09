/**
 * Created by CSmith3 on 08/09/2017.
 */

import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';
import { MovieComponent } from './movie/movie.component';
import { WeatherComponent } from './weather/weather.component';

const MAINMENU_ROUTES: Routes = [
  { path: '', redirectTo: '/weather', pathMatch: 'full'},
  { path: 'weather', component: WeatherComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'currency', component: CurrencyComponent }
];

export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);