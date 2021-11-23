import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { authInterceptorProviders } from './service/auth.interceptor';
import { AdmindashboardComponent } from './pages/admin/admindashboard/admindashboard.component';
import { UserdashboardComponent } from './pages/user/userdashboard/userdashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import { UserbooksComponent } from './pages/user/userbooks/userbooks.component';
import { UserallbooksComponent } from './pages/user/userallbooks/userallbooks.component';
import { UserrequestComponent } from './pages/user/userrequest/userrequest.component';
import { UsermininavComponent } from './pages/user/usermininav/usermininav.component';
import { ViewbookComponent } from './pages/user/viewbook/viewbook.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {MatChipsModule} from '@angular/material/chips';
import { UseraccessedComponent } from './pages/user/useraccessed/useraccessed.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule} from 'ngx-ui-loader';
import { AddbookComponent } from './pages/Admin/addbook/addbook.component';
import { PendingrequestComponent } from './pages/Admin/pendingrequest/pendingrequest.component';
import { AllrequestComponent } from './pages/Admin/allrequest/allrequest.component';
import { BooksComponent } from './pages/Admin/books/books.component';
import { WelcomeComponent } from './pages/Admin/welcome/welcome.component';
import { BookviewComponent } from './pages/Admin/bookview/bookview.component';
import { RevokeComponent } from './pages/admin/revoke/revoke.component';
import { UserwelcomeComponent } from './pages/user/userwelcome/userwelcome.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    ProfileComponent,
    SidebarComponent,
    UserbooksComponent,
    UserallbooksComponent,
    UserrequestComponent,
    UsermininavComponent,
    ViewbookComponent,
    UseraccessedComponent,
    AddbookComponent,
    PendingrequestComponent,
    AllrequestComponent,
    BooksComponent,
    WelcomeComponent,
    BookviewComponent,
    RevokeComponent,
    UserwelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatToolbarModule,
    MatListModule,
    PdfViewerModule,
    MatChipsModule,
    NgxUiLoaderModule,    
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    }),
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
