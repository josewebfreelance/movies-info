import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent {

  @Input() imageProperty!: string;
  @Input() isRedirect = '';
  @Input() itemTitle = '';
  @Input() itemSubTitle = '';

  @Input() item: any = {};

}
