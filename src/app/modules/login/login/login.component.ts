import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  contactForm: FormGroup;
  username: FormControl;
  password: FormControl;

  constructor(public dialog: MatDialog,
    public loginService: LoginService,
    private router: Router,
    private snackbar: MatSnackBar) {
    this.username = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required]);
    this.contactForm = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  ipInformation: any = {};

  ngOnInit() {
    this.fetchIpInformation();
  }

  fetchIpInformation() {
    return this.loginService.getIpInformation().subscribe((data: {}) => {
      this.ipInformation = data;
      console.log(this.ipInformation);
    });
  }

  openForgotPasswordModal(content: TemplateRef<any>) {
    const dialogRef = this.dialog.open(content);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  closeModal() {
    this.dialog.closeAll();
  }

  onSubmit() {
    if (this.contactForm.valid == true) {
      
      const payload = {
        "employeeId": this.contactForm.value.username,
        "password": this.contactForm.value.password,
        "ip": this.ipInformation.ip,
        "deviceName": 'Windows 11'
      }

      this.loginService.login(payload).subscribe((response) => {
        console.log(response);
        if (response.data == null) {
          // failure case
          this.snackbar.open('Authentication Failed', 'Dismiss', {
            duration: 2000,
          });
        } else {
          // success case
          // sessionStorage.setItem("displayname", response.data.userDetails.displayName);
          sessionStorage.setItem("userDetails", JSON.stringify(response.data.userDetails));
          this.router.navigateByUrl('/home');
        }
      })
    }
  }
}
