import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    email: '',
    password: '',
  };

  constructor( private snack: MatSnackBar,
    private login: LoginService,
    private router: Router,) { }

  ngOnInit(): void {
  }

  formSubmit() {
    console.log(this.loginData);
    console.log(JSON.stringify(this.loginData));
    if (
      this.loginData.email.trim() == '' ||
      this.loginData.email == null
    ) {
      this.snack.open('Email is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password == null
    ) {
      this.snack.open('Password is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    this.login.generateToken(this.loginData).subscribe(
      (data: any) => {
        console.log('success');
        console.log(data);

        //Save token in local storage
        this.login.loginUser(data.token)
         // login logic
         this.login.getCurrentUser().subscribe((user:any)=>{
          this.login.setUser(user);
          console.log(user);
          console.log(this.login.getUserRole());
          // Logic to redirect based on user role
          if (this.login.getUserRole() == 'ADMIN') {
            this.router.navigate(['admin']);
            this.login.loginStatusSubject.next(true);
          } 
          else if(this.login.getUserRole() == 'USER'){
            this.router.navigate(['user']);
            this.login.loginStatusSubject.next(true);
          }
           else {
            this.router.navigate(['/'])
            this.login.logout();
            
          }


         });      
      
      },
        (error) => {
          console.log('Error !');
          console.log(error);
          this.snack.open('Invalid Details !! Try again', '', {
            duration: 3000,
          });
        }
    );

}
}
