import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  @Output('actionDrawer') actionDrawer = new EventEmitter<boolean>();
  isOpen = false;

  changeStatus() {
    this.isOpen = !this.isOpen;

    this.actionDrawer.emit(this.isOpen);
  }

}
