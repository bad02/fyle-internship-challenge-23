import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePageComponent } from '../../home-page/home-page.component';
import { UtilsComponent } from '../utils/utils.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router, public home: HomePageComponent, private utils: UtilsComponent) { }

  ngOnInit(): void {
  }
  homeCall() {
    // if (this.utils.dataTouched)
    //   this.home.resetVar();
  }
}