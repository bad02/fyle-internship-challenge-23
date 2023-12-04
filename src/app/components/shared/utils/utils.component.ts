import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utils',
  templateUrl: './utils.component.html',
  styleUrls: ['./utils.component.scss'],
})

// to show and stop loader
export class UtilsComponent implements OnInit {
  public showLoading = true;

  public userToken = '';

  // to set per page 10 item
  public itemsPerPage = 10;
  public dataTouched: boolean = false;
  ngOnInit(): void {}
  getUserToken() {
    return '';
  }
  startLoader() {
    this.showLoading = true;
  }
  stopLoader() {
    this.showLoading = false;
  }
}
