import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { AdmindashboardComponent } from './pages/admin/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './pages/user/userdashboard/userdashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserGuard } from './service/user.guard';
import { UserallbooksComponent } from './pages/user/userallbooks/userallbooks.component';
import { UserrequestComponent } from './pages/user/userrequest/userrequest.component';
import { AdminGuard } from './service/admin.guard';
import { UserbooksComponent } from './pages/user/userbooks/userbooks.component';
import { ViewbookComponent } from './pages/user/viewbook/viewbook.component';
import { UseraccessedComponent } from './pages/user/useraccessed/useraccessed.component';
import { AddbookComponent } from './pages/Admin/addbook/addbook.component';
import { PendingrequestComponent } from './pages/Admin/pendingrequest/pendingrequest.component';
import { WelcomeComponent } from './pages/Admin/welcome/welcome.component';
import { BooksComponent } from './pages/Admin/books/books.component';
import { AllrequestComponent } from './pages/Admin/allrequest/allrequest.component';
import { BookviewComponent } from './pages/Admin/bookview/bookview.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'profile',
    component : ProfileComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component : AdmindashboardComponent,
    canActivate:[AdminGuard],
    children: [
      {
        path :'',
        component : WelcomeComponent 
      },
      {
        path: 'add',
        component: AddbookComponent
      },
      {
        path: 'pendingreq',
        component : PendingrequestComponent
      },
      {
        path: 'books',
        component : BooksComponent
      },
      {
        path: 'allreq',
        component : AllrequestComponent
      }
      ,{
        path:'book/:bookId',
        component: BookviewComponent
      }
    ]
  },
  {
    path: 'user',
    component: UserdashboardComponent,
    canActivate: [UserGuard],
    children: [
      {
        path: 'all',
        component: UserallbooksComponent,
      },
      {
        path: 'book',
        component: UserbooksComponent,
      },
      {
        path: 'book/all',
        component: UseraccessedComponent
      },
      {
        path: 'request',
        component:UserrequestComponent
      }

    ]
  },
  {
    path: 'view-book',
    component : ViewbookComponent,
    pathMatch: 'full',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
