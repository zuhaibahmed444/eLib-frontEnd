import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService,private snack: MatSnackBar,private router:Router ) { }

  public user = {
    email: '',
    password: '',
    name:'',
    phone: '',
  };

  ngOnInit(): void {
  }

  formSubmit() {
    if (this.user.name == '' || this.user.name == null) {
      // alert('User is required !!');
      this.snack.open('Username is required !! ', '', {
        duration: 3000,
      });
      return;
    }

    if (this.user.password == '' || this.user.password == null) {
      // alert('User is required !!');
      this.snack.open('Password is required !! ', '', {
        duration: 3000,
      });
      return;
    }
    console.log(this.user);
    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        console.log(data);
        Swal.fire('Successfully done !!'+'\nLogin with user details', 'Email is ' + data.email , 'success');
        this.router.navigate(['login']);
      },
      (error) => {
        console.log(error);
        this.snack.open('User Present with Email', '', {
          duration: 3000,
        });
      }
    );
  }



  
}

