import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './core/layout/footer/footer';
import { Header } from './core/layout/header/header';
import { Starfield } from './core/layout/starfield/starfield';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Starfield],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
