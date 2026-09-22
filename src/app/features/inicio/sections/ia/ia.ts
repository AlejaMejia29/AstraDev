import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AI_CAPABILITIES } from '../../data/inicio.data';

@Component({
  selector: 'app-ia',
  imports: [RouterLink],
  templateUrl: './ia.html',
  styles: ``,
})
export class Ia {
  protected readonly capabilities = AI_CAPABILITIES;
}
