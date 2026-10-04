import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../../../core/i18n/i18n.service';
import { BrandLogo } from '../../../../shared/ui/brand-logo/brand-logo';
import { Reveal } from '../../../../shared/ui/reveal/reveal';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, BrandLogo, Reveal],
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly i18n = inject(I18nService);

  protected messageDelay(index: number): string {
    return `${0.4 + index * 0.9}s`;
  }

  protected notificationDelay(): string {
    return this.messageDelay(this.i18n.copy().hero.chat.messages.length);
  }
}
