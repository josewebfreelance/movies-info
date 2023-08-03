import {Component, Input} from '@angular/core';
import {Plugin} from "@egjs/ngx-flicking";
import {Arrow} from "@egjs/flicking-plugins";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: [
    './item-list.component.scss',
    '../../../../node_modules/@egjs/flicking-plugins/dist/arrow.css'
  ]
})
export class ItemListComponent {

  @Input() sizeCard!: number;
  @Input() list: any[] = [];
  @Input() imageProperty!: string;
  @Input() itemTitle = '';
  @Input() itemSubTitle = '';
  @Input() isRedirect = '';
  @Input() titleList = '';
  @Input() titleAlign = '';
  @Input() classSpace = '';

  public plugins: Plugin[] = [new Arrow()];

}
