import { Component } from '@angular/core';
import { ABOUT_PILLARS, TECH_STACK } from '../../data/inicio.data';
import { BrandLogo } from '../../../../shared/ui/brand-logo/brand-logo';

@Component({
  selector: 'app-about',
  imports: [BrandLogo],
  templateUrl: './about.html',
  styles: ``,
})
export class About {
  protected readonly pillars = ABOUT_PILLARS;
  protected readonly stack = TECH_STACK;
}
