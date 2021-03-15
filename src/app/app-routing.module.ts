import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { CatalogueComponent } from './components/public/article/catalogue/catalogue.component';
import { SigninComponent } from './components/public/signin/signin.component';

const routes: Routes = [

  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "login",
    component: SigninComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "articles",
    children: [
      {
        path: "catalogue",
        component: CatalogueComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
