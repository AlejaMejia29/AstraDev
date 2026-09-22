import { Component } from '@angular/core';
import { SERVICES } from '../../data/inicio.data';

@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.html',
  styles: ``,
})
export class Servicios {
  protected readonly services = SERVICES;
}
