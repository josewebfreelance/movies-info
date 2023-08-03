import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {RoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgHttpLoaderModule} from "ng-http-loader";
import {AppHttpInterceptor} from "./shared/services/app-http.interceptor";
import {MaterialModule} from "./shared/materialmodule/material.module";
import {NgxFlickingModule} from "@egjs/ngx-flicking";
import {MovieComponent} from "./movies/movie/movie.component";
import {MovieDetailComponent} from "./movies/movie-detail/movie-detail.component";
import {ImageTransformPipe} from "./shared/pipes/image-transform.pipe";
import { ItemListComponent } from './movies/item-list/item-list.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { TransformGenresPipe } from './shared/pipes/transform-genres.pipe';
import { TransformTitlePipe } from './shared/pipes/transform-title.pipe';
import { SearchComponent } from './movies/search/search.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MovieItemComponent } from './movies/movie-item/movie-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieDetailComponent,
    ImageTransformPipe,
    ItemListComponent,
    NavigationComponent,
    TransformGenresPipe,
    TransformTitlePipe,
    SearchComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    NgxFlickingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
