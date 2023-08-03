import {RouterModule, Routes} from '@angular/router';
import {MovieComponent} from "./movies/movie/movie.component";
import {MovieDetailComponent} from "./movies/movie-detail/movie-detail.component";

const routes: Routes = [
  {path: '', redirectTo: '/peliculas', pathMatch: 'full'},
  {path: 'peliculas', component: MovieComponent},
  {path: 'peliculas/mas-detalles/:id', component: MovieDetailComponent}
];

export const RoutingModule = RouterModule.forRoot(routes, {useHash: true});
