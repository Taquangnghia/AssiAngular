import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './client/components/header/header.component';
import { MainComponent } from './client/components/main/main.component';
import { NavComponent } from './client/components/nav/nav.component';
import { FooterComponent } from './client/components/footer/footer.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { AdminComponent } from './page/admin/admin.component';
import { HomepageComponent } from './page/client/homepage/homepage.component';
import { SigninComponent } from './page/login/signin/signin.component';
import { SignupComponent } from './page/login/signup/signup.component';
import { DetailComponent } from './page/client/detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddBookComponent } from './page/admin/add-book/add-book.component';
import { ToastrModule } from 'ngx-toastr';
import { CartComponent } from './page/client/cart/cart.component';

import { CatergoryComponent } from './page/client/catergory/catergory.component';
import { CategoryComponent } from './page/admin/category/category.component';
import { CategoryAddComponent } from './page/admin/category/category-add/category-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    NavComponent,
    FooterComponent,
    AdminLayoutComponent,
    ClientLayoutComponent,
    AdminComponent,
    HomepageComponent,
    SigninComponent,
    SignupComponent,
    DetailComponent,
    AddBookComponent,
    CartComponent,
    CatergoryComponent,
    CategoryComponent,
    CategoryAddComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
     RouterModule,
     FormsModule,
     ReactiveFormsModule,
     ToastrModule.forRoot(
       {
         timeOut:1000,
         progressBar:true,
         progressAnimation:'increasing',
         preventDuplicates:true
       }
     )  
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})
export class AppModule { }
