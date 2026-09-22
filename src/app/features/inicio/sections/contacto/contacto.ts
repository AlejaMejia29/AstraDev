import { Component, signal } from '@angular/core';
import { BUDGET_OPTIONS, CONTACT_CHANNELS, SOLUTION_OPTIONS } from '../../data/inicio.data';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styles: ``,
})
export class Contacto {
  protected readonly channels = CONTACT_CHANNELS;
  protected readonly solutions = SOLUTION_OPTIONS;
  protected readonly budgets = BUDGET_OPTIONS;
  protected readonly formSent = signal(false);

  protected onSubmit(event: Event): void {
    event.preventDefault();
    this.formSent.set(true);
    (event.target as HTMLFormElement).reset();
  }
}
