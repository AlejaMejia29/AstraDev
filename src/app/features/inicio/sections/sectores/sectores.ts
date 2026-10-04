import { Component, inject } from '@angular/core';
import { I18nService } from '../../../../core/i18n/i18n.service';
import { Reveal } from '../../../../shared/ui/reveal/reveal';

@Component({
  selector: 'app-sectores',
  imports: [Reveal],
  templateUrl: './sectores.html',
})
export class Sectores {
  protected readonly i18n = inject(I18nService);
}
