import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NAV_LINKS } from '../../../shared/data/navigation.data';
import { BrandLogo } from '../../../shared/ui/brand-logo/brand-logo';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, BrandLogo],
  templateUrl: './footer.html',
  styles: ``,
})
export class Footer {
  protected readonly links = NAV_LINKS;
  protected readonly year = new Date().getFullYear();
}
