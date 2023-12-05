import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, FormsModule, MatIconModule, MatButtonModule, MatSelectModule]
})
export class AppComponent implements OnInit {
  title = 'GuCube';
  isAdm = false;
  showFilter = false;

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.getJwt() == null)
      this.goToLogin()
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
