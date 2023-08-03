import {Injectable} from "@angular/core";
import {NotificationsModelAdapter} from "../contractors/notifications-model-adapter";
import {NgxToastService} from "@angular-magic/ngx-toast";
import {NgxToast} from "@angular-magic/ngx-toast/lib/base/toast.model";

@Injectable({
  providedIn: 'root'
})
export class NotificationsAdapter implements NotificationsModelAdapter<any, any>{
  constructor(
    private ngxToastService: NgxToastService
  ) {
  }

  error = (toast: Omit<NgxToast, 'type'>) => {
    this.ngxToastService.error(toast);
  }

  success = (toast: Omit<NgxToast, 'type'>) => {
    this.ngxToastService.success(toast);
  }
}
