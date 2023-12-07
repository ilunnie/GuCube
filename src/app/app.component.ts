import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { UserService } from './user.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, FormsModule, MatIconModule, MatButtonModule, MatSelectModule]
})
export class AppComponent implements OnInit {
  title = 'GuCube';
  managed = [];
  showFilter = false;

  constructor(
    private user: UserService,
    private router: Router) { }

  ngOnInit() {
    const jwt = this.getJwt()
    if (jwt == null)
      this.goToLogin()
    else {
      this.user.getManaged({
        token: jwt
      }, (result: any) => {
        if (result.ok == false) {
          sessionStorage.removeItem("jwt");
          this.goToLogin();
        }
        
        this.managed = result
        if (result.length > 0) {
          this.router.navigate(['manage'])
        } else {
          this.router.navigate(['products'])
        }
      })
    }
  }

  countries = ['Brasil', 'Argentina', 'Chile'];
  selectedCountry: string = '';

  getJwt() {
    if (typeof sessionStorage !== 'undefined') {
      return sessionStorage.getItem('jwt');
    }
    return null
  }

  goToLogin() {
    this.router.navigate(['login'])
  }

  clickFilter() {
    this.showFilter = !this.showFilter;
    console.log(this.selectedCountry)
  }

  navigateTo(href: string) {
    this.router.navigate([href]);
  }
}
