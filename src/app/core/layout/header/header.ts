import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAV_LINKS } from '../../../shared/data/navigation.data';
import { BrandLogo } from '../../../shared/ui/brand-logo/brand-logo';

@Component({
  selector: 'app-header',
  imports: [RouterLink, BrandLogo],
  templateUrl: './header.html',
  styles: ``,
})
export class Header {
  protected readonly links = NAV_LINKS;
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
