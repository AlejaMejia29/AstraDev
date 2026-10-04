import { Component, inject } from '@angular/core';
import { I18nService } from '../../../../core/i18n/i18n.service';
import { Reveal } from '../../../../shared/ui/reveal/reveal';

@Component({
  selector: 'app-preguntas',
  imports: [Reveal],
  templateUrl: './preguntas.html',
})
export class Preguntas {
  protected readonly i18n = inject(I18nService);
}
