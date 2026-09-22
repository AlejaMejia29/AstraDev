import { Component } from '@angular/core';
import { About } from './sections/about/about';
import { Contacto } from './sections/contacto/contacto';
import { Hero } from './sections/hero/hero';
import { Ia } from './sections/ia/ia';
import { Proyectos } from './sections/proyectos/proyectos';
import { Servicios } from './sections/servicios/servicios';

@Component({
  selector: 'app-inicio',
  imports: [Hero, Servicios, Ia, About, Proyectos, Contacto],
  templateUrl: './inicio.html',
  styles: ``,
})
export class Inicio {}
