import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, MatIconModule, MatButtonModule, MatSelectModule]
})
export class AppComponent {
  title = 'GuCube';
  isLogged = true;
  isAdm = false;
  showFilter = false;


  countries = ['Brasil', 'Argentina', 'Chile'];
  country: string = "-- Coutry --";

  clickFilter() {
    this.showFilter = !this.showFilter;
  }
}
