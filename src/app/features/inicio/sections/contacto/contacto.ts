import { Component, inject, signal } from '@angular/core';
import { I18nService } from '../../../../core/i18n/i18n.service';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styles: ``,
})
export class Contacto {
  protected readonly i18n = inject(I18nService);
  protected readonly formSent = signal(false);

  protected onSubmit(event: Event): void {
    event.preventDefault();
    this.formSent.set(true);
    (event.target as HTMLFormElement).reset();
  }
}
