import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// reactive form module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//resuable components
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UtilsComponent } from './components/shared/utils/utils.component';
import { HeaderComponent } from './components/shared/header/header.component';

//http module
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// pagination
import { NgxPaginationModule } from 'ngx-pagination';

// material modules
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSliderModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatInputModule,
    MatGridListModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [UtilsComponent, HttpService, HomePageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
