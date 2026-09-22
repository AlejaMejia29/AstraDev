import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../../data/inicio.data';

@Component({
  selector: 'app-proyectos',
  imports: [RouterLink],
  templateUrl: './proyectos.html',
  styles: ``,
})
export class Proyectos {
  protected readonly projects = PROJECTS;
}
