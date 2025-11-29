import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }



  scrollTo(section: string) {
    this.menuOpen = false;
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth'
    });
  }

}
