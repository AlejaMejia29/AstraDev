import { Component, inject } from '@angular/core';
import { I18nService } from '../../../../core/i18n/i18n.service';

@Component({
  selector: 'app-ia',
  imports: [],
  templateUrl: './ia.html',
  styles: ``,
})
export class Ia {
  protected readonly i18n = inject(I18nService);
}
