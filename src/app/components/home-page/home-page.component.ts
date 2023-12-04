import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UtilsComponent } from '../shared/utils/utils.component';
import { HttpService } from 'src/app/services/http-service.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public utils: UtilsComponent, private httpSvc: HttpService, private cdRef: ChangeDetectorRef) { }

  name = new FormControl('');
  // var to store user data
  userData = {
    name: '',
    bio: '',
    login: '',
    avatar_url: '',
    company: '',
    url: '',
    location: '',
    public_repos: '',
    repos: [{
      name: '',
      description: '',
      language: '',
      html_url: ''
    }]
  };

  // by defult selected page number 1 
  pageSelected: number = 1;

  userRepo: boolean = false;


  ngOnInit() {
    this.utils.showLoading = false;
  }

  // hook used to detect changes in view
  // check  changes in view
  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  // function to reset values when page refershed
  resetVar() {
    var ref = this;
    ref.utils.startLoader();;
    ref.name.setValue('');
    ref.userData = {
      name: '',
      bio: '',
      login: '',
      avatar_url: '',
      company: '',
      url: '',
      location: '',
      public_repos: '',
      repos: [{
        name: '',
        description: '',
        language: '',
        html_url: ''
      }]
    };
    ref.pageSelected = 1;
    ref.userRepo = false;
    // <<<---using ()=> syntax
    setTimeout(() => {                           
      ref.utils.stopLoader();
    }, 1000);
  }

  // function to show user repos
  showUserRepo(check: boolean) {
    if (check) {
      this.userRepo = true;
    }
    else {
      this.utils.startLoader();
      this.userRepo = false
      this.pageSelected = 1;
      this.resetVar();
       // <<<---using ()=> syntax
      setTimeout(() => {                          
        this.utils.stopLoader();
      }, 1000);
    };
  }

  // function to get user profile data 
  getUserData() {
    this.utils.startLoader();
    this.httpSvc.fetchUserInfo(this.name.value).subscribe(data => {
      this.utils.dataTouched = true;
      this.userData.name = data.body.name ? data.body.name : data.body.login ? data.body.login : '';
      this.userData.login = data.body.login ? data.body.login : '';
      this.userData.bio = data.body.bio ? data.body.bio : '';
      this.userData.company = data.body.company ? data.body.company : 'Company';
      this.userData.location = data.body.location ? data.body.location : '';
      this.userData.url = data.body.html_url ? data.body.html_url : '';
      this.userData.avatar_url = data.body.avatar_url ? data.body.avatar_url : '';
      this.userData.public_repos = data.body.public_repos ? data.body.public_repos : '';
      this.getRepos(this.userData.login, this.utils.itemsPerPage, this.pageSelected);
    })
  }


  // function to get user repos data 
  getRepos(name: any, itemsPerPage: any, pageSelected: any) {
    this.httpSvc.fetchUserRepos(name, itemsPerPage, pageSelected).subscribe(repos => {
      this.userData.repos = repos.body;
      this.userRepo = true;
      this.utils.stopLoader();
    })
  }

  // pagingation 
  pageChangeHandler(event: any) {
    this.utils.startLoader();
    this.pageSelected = event;
    var windows = window;
    // when page changed to bydeafult scroll page up
    windows.scrollTo(0, 0);
    this.getRepos(this.userData.login, this.utils.itemsPerPage, this.pageSelected);
  }
  // resest whole - invoke loader, resest var and get user data 
  resetWhole() {
    this.utils.startLoader();
    this.resetVar();
    this.getUserData();
  }
}
