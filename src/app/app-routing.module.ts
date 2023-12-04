import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';


const appRoutes: Routes = [
  {
    path: "",
    component: HomePageComponent,
    data: {
      title: "Home"
    }
  },
  { path: "**", component: HomePageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false, useHash: false })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
