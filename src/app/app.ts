import { ViewportScroller } from '@angular/common';
import { afterNextRender, Component, inject } from '@angular/core';
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
export class App {
  constructor() {
    const scroller = inject(ViewportScroller);
    scroller.setOffset([0, 80]);

    afterNextRender(() => {
      const navigation = performance.getEntriesByType('navigation')[0] as
        | PerformanceNavigationTiming
        | undefined;

      if (navigation?.type === 'reload') {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      }
    });
  }
}
