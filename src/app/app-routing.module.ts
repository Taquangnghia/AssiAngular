import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './check/auth.guard';
import { FooterComponent } from './client/components/footer/footer.component';
import { HeaderComponent } from './client/components/header/header.component';
import { MainComponent } from './client/components/main/main.component';
import { NavComponent } from './client/components/nav/nav.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { AddBookComponent } from './page/admin/add-book/add-book.component';
import { AdminComponent } from './page/admin/admin.component';
import { CategoryAddComponent } from './page/admin/category/category-add/category-add.component';
import { CategoryComponent } from './page/admin/category/category.component';
import { CartComponent } from './page/client/cart/cart.component';
import { CatergoryComponent } from './page/client/catergory/catergory.component';
import { DetailComponent } from './page/client/detail/detail.component';
import { SigninComponent } from './page/login/signin/signin.component';
import { SignupComponent } from './page/login/signup/signup.component';

const routes: Routes = [
  {
    path:'',
    component:ClientLayoutComponent,
    children:[
     {
        path:"",
        component:NavComponent
      },
      {
        path:":id/detail",
        component:DetailComponent
      },
      {
        path:'giohang',
        component:CartComponent
      },
      {
        path:'category/:id',
        component:CatergoryComponent
      }
    ]
  },

  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {
    path:'admin',
    component:AdminLayoutComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'list',
        component:AdminComponent
      },
      {
        path:'edit/:id',
        component:AddBookComponent
      },
      {
        path:'add',
        component:AddBookComponent
      },
      {
        path:'category',
      
        children:[
          {
            path:'',
            component:CategoryComponent,
          },
          {
            path:'add',
            component:CategoryAddComponent
          }
        ]
      },
  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
