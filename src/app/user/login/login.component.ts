import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fg!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private session: SessionService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.fg = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  submit() {
    if(this.fg.invalid) 
      return;
    this.loginService.login(this.fg.value).subscribe({
      next: (auth) => {
        this.session.save(auth.token);

          this.router.navigateByUrl('/Project/show');

      },
      error: () => {
        console.log('Bad credentials');
      }
    })
  }

}
