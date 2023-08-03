import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformGenres'
})
export class TransformGenresPipe implements PipeTransform {

  transform(genresList: any[] , genresServiceList: any[]): string {
    let genres = '';

    if (genresList.length === 0 || genresServiceList.length === 0) return genres;

    genresServiceList.forEach((itemService: any) => {
      const findGenre = genresList.find((genre: any) => genre === itemService.id);

      if (findGenre) genres += `${itemService.name},`;
    });

    return genres.slice(0, genres.length - 1);
  }

}
