import { afterNextRender, Component, DestroyRef, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../../../core/i18n/i18n.service';
import { BrandLogo } from '../../../../shared/ui/brand-logo/brand-logo';

interface TerminalLine {
  text: string;
  kind: 'status' | 'comment' | 'code' | 'accent' | 'live';
}

const TERMINAL_LINES: TerminalLine[] = [
  { text: '[ASTRA-ENGINE] Bootstrapping agent graph...', kind: 'status' },
  { text: "> import { AstraAgent } from '@astradev/ai';", kind: 'comment' },
  { text: '> const agent = new AstraAgent({ tools: \'erp,crm\' });', kind: 'code' },
  { text: "> agent.mountRag({ index: 'corp-docs' });", kind: 'accent' },
  { text: '> // Guardrails + human-in-the-loop', kind: 'comment' },
  { text: 'INFERENCE_QOS: 99.9% · 142ms p95', kind: 'live' },
];

@Component({
  selector: 'app-hero',
  imports: [RouterLink, BrandLogo],
  templateUrl: './hero.html',
  styles: `
    .caret {
      display: inline-block;
      width: 0.45em;
      height: 1em;
      margin-left: 2px;
      vertical-align: text-bottom;
      background: currentColor;
      animation: caret-blink 0.85s steps(1) infinite;
    }

    @keyframes caret-blink {
      50% {
        opacity: 0;
      }
    }
  `,
})
export class Hero {
  protected readonly i18n = inject(I18nService);
  protected readonly typed = signal<string[]>(TERMINAL_LINES.map(() => ''));
  protected readonly activeLine = signal(0);
  protected readonly bootOk = signal(false);
  protected readonly lines = TERMINAL_LINES;

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      const timers: number[] = [];
      this.play(0, timers);
      destroyRef.onDestroy(() => timers.forEach((id) => window.clearTimeout(id)));
    });
  }

  private play(index: number, timers: number[]): void {
    if (index >= TERMINAL_LINES.length) {
      return;
    }

    this.activeLine.set(index);
    const full = TERMINAL_LINES[index].text;
    let cursor = 0;

    const typeNext = (): void => {
      cursor += 1;
      this.typed.update((lines) => {
        const next = [...lines];
        next[index] = full.slice(0, cursor);
        return next;
      });

      if (cursor < full.length) {
        timers.push(window.setTimeout(typeNext, 22 + Math.random() * 18));
        return;
      }

      if (index === 0) {
        this.bootOk.set(true);
      }

      timers.push(window.setTimeout(() => this.play(index + 1, timers), 280));
    };

    timers.push(window.setTimeout(typeNext, index === 0 ? 350 : 80));
  }

  protected lineClass(kind: TerminalLine['kind']): string {
    switch (kind) {
      case 'status':
        return 'text-secondary';
      case 'code':
        return 'text-primary';
      case 'accent':
        return 'text-secondary';
      case 'live':
        return 'text-secondary';
      default:
        return 'text-outline';
    }
  }
}
