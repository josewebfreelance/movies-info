import {RouterModule, Routes} from '@angular/router';
import {MovieListComponent} from "./movies/components/movie-list/movie-list.component";

const routes: Routes = [
  {path: '', redirectTo: '/peliculas/listado', pathMatch: 'full'},
  {path: 'peliculas/listado', component: MovieListComponent},
  {
    path: 'peliculas',
    loadChildren: () => import('../app/movies/movies.module').then(m => m.MoviesModule)
  }
];

export const RoutingModule = RouterModule.forRoot(routes, {useHash: true});
