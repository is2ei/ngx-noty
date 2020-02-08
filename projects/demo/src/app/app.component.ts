import { Component } from '@angular/core';
import { NgxNotyService } from 'ngx-noty';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private ngxNotyService: NgxNotyService;

  constructor(
    ngxNotyService: NgxNotyService
  ) {
    this.ngxNotyService = ngxNotyService;
  }

  alert(): void {
    this.ngxNotyService.show({
      text: `Best check yo self, you're not looking too good.`,
      type: 'alert'
    });
  }

  success(): void {
    this.ngxNotyService.show({
      text: `You successfully read this important alert message.`,
      type: 'success'
    });
  }

  warning(): void {
    this.ngxNotyService.show({
      text: `Best check yo self, you're not looking too good.`,
      type: 'warning'
    });
  }

  error(): void {
    this.ngxNotyService.show({
      text: `Change a few things up and try submitting again.`,
      type: 'error'
    });
  }

  info(): void {
    this.ngxNotyService.show({
      text: `This alert needs your attention, but it's not super important.`,
      type: 'info'
    });
  }

}
