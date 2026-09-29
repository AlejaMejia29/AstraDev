import { Component, inject, signal } from '@angular/core';
import { I18nService } from '../../../../core/i18n/i18n.service';

@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.html',
  styles: `
    .carousel-track {
      display: flex;
      transition: transform 0.45s ease;
    }

    .carousel-slide {
      flex: 0 0 100%;
    }

    .service-card {
      overflow: hidden;
      border: 1px solid color-mix(in srgb, var(--color-outline-variant) 55%, transparent);
      background: var(--color-surface-container-low);
    }

    .nav-btn {
      border: 1px solid color-mix(in srgb, var(--color-outline-variant) 55%, transparent);
      background: color-mix(in srgb, var(--color-surface-container) 88%, transparent);
    }

    .nav-btn:hover {
      border-color: color-mix(in srgb, var(--color-accent) 45%, var(--color-outline-variant));
      color: var(--color-accent);
    }

    .dot {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 999px;
      background: color-mix(in srgb, var(--color-on-surface-variant) 40%, transparent);
    }

    .dot.active {
      width: 1.5rem;
      background: var(--color-accent);
    }
  `,
})
export class Servicios {
  protected readonly i18n = inject(I18nService);
  protected readonly active = signal(0);
  private dragStart = 0;

  protected next(): void {
    const total = this.i18n.copy().services.items.length;
    this.active.update((index) => (index + 1) % total);
  }

  protected prev(): void {
    const total = this.i18n.copy().services.items.length;
    this.active.update((index) => (index - 1 + total) % total);
  }

  protected goTo(index: number): void {
    this.active.set(index);
  }

  protected onPointerDown(event: PointerEvent): void {
    this.dragStart = event.clientX;
  }

  protected onPointerUp(event: PointerEvent): void {
    const delta = event.clientX - this.dragStart;
    if (delta < -50) {
      this.next();
    } else if (delta > 50) {
      this.prev();
    }
  }
}
