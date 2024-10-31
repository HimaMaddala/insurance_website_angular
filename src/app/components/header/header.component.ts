import { Component, HostListener } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    console.log('Mobile menu toggled:', this.isMobileMenuOpen);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
  @HostListener('document:click', ['$event.target'])
  onClickOutside(targetElement: HTMLElement) {
    if (this.isMobileMenuOpen && !targetElement.closest('.md\\:hidden')) {
      this.closeMobileMenu();
    }
  }

}
