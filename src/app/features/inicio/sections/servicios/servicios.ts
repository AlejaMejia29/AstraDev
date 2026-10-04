import { Component, inject } from '@angular/core';
import { I18nService } from '../../../../core/i18n/i18n.service';
import { Reveal } from '../../../../shared/ui/reveal/reveal';

@Component({
  selector: 'app-servicios',
  imports: [Reveal],
  templateUrl: './servicios.html',
})
export class Servicios {
  protected readonly i18n = inject(I18nService);
}
