import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { SideNavbarComponent } from "../side-navbar/side-navbar.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SideNavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  isSidenavOpen = false;

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }


  @HostBinding('class.dark') isDarkMode: boolean = false;

  sidebarVisible: boolean = false; // Sidebar toggle state
  darkIconVisible: boolean = false; // Determines whether the dark mode icon is visible

  constructor() {
    // Safe check if 'localStorage' is available
    if (this.isLocalStorageAvailable()) {
      const currentTheme = localStorage.getItem('theme');
      if (currentTheme === 'dark') {
        this.isDarkMode = true;
        this.darkIconVisible = true;
      }
    }
  }

  // Method to check if 'localStorage' is available
  isLocalStorageAvailable(): boolean {
    try {
      const test = '__storage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  // Toggle the sidebar
  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }

  // Toggle between dark and light mode
  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.darkIconVisible = !this.darkIconVisible;

    if (this.isLocalStorageAvailable()) {
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    }
  }
}
