import { Component, inject } from '@angular/core';
import { I18nService } from '../../../../core/i18n/i18n.service';
import { TECH_STACK } from '../../data/inicio.data';
import { BrandLogo } from '../../../../shared/ui/brand-logo/brand-logo';

@Component({
  selector: 'app-about',
  imports: [BrandLogo],
  templateUrl: './about.html',
  styles: ``,
})
export class About {
  protected readonly i18n = inject(I18nService);
  protected readonly stack = TECH_STACK;
}
