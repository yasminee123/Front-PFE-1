import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/private/shared/sidebar/sidebar.component';
import { NavbarComponent } from './components/private/shared/navbar/navbar.component';
import { DashboardComponent } from './components/private/shared/dashboard/dashboard.component';
import { SigninComponent } from './components/public/signin/signin.component';
import { CatalogueComponent } from './components/public/article/catalogue/catalogue.component';
import { FooterComponent } from './components/private/shared/footer/footer.component';
import {HttpClientModule} from "@angular/common/http"


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    DashboardComponent,
    SigninComponent,
    CatalogueComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
