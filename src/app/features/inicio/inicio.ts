import { Component } from '@angular/core';
import { About } from './sections/about/about';
import { Contacto } from './sections/contacto/contacto';
import { Hero } from './sections/hero/hero';
import { Ia } from './sections/ia/ia';
import { Preguntas } from './sections/preguntas/preguntas';
import { Proceso } from './sections/proceso/proceso';
import { Proyectos } from './sections/proyectos/proyectos';
import { Sectores } from './sections/sectores/sectores';
import { Servicios } from './sections/servicios/servicios';

@Component({
  selector: 'app-inicio',
  imports: [Hero, Servicios, Sectores, Ia, Proceso, Proyectos, About, Preguntas, Contacto],
  templateUrl: './inicio.html',
  styles: ``,
})
export class Inicio {}
