import { AfterViewChecked, ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsComponent } from './components/shared/utils/utils.component';
import { MatSnackBar, MatSnackBarContainer } from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements AfterViewChecked {
  constructor(public utils: UtilsComponent, private router: Router, private cdRef: ChangeDetectorRef, private snackBar: MatSnackBar) { }
  @HostListener('click', ['$event.target'])
  handleKeyDown(event: KeyboardEvent) {
    this.snackBar.dismiss();
  }
  ngOnInit() {
    // this.router.navigate(["home"]);
  }

  // hook used to detect changes in view
  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }
}
