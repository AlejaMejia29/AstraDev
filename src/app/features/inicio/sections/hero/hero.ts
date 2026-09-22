import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HERO_STATS } from '../../data/inicio.data';
import { BrandLogo } from '../../../../shared/ui/brand-logo/brand-logo';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, BrandLogo],
  templateUrl: './hero.html',
  styles: ``,
})
export class Hero {
  protected readonly stats = HERO_STATS;
}
