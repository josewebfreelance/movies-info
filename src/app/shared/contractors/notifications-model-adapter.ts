export interface NotificationsModelAdapter<Input, Output> {
  error: (config: any) => Output;
  success: (config: any) => Output;

}
