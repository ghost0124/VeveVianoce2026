import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-together-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './together-counter.html',
  styleUrl: './together-counter.css'
})
export class TogetherCounterComponent
  implements OnInit, OnDestroy {

  @Input()
  startDate = '2026-07-22';

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  private timer?: number;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {

    this.calculate();

    this.timer = window.setInterval(() => {
      this.calculate();
      this.cd.detectChanges();
    }, 1000);

  }

  ngOnDestroy(): void {
    if (this.timer !== undefined) {
      window.clearInterval(this.timer);
    }
  }

  private calculate(): void {

    const start = new Date(this.startDate);
    const now = new Date();

    const diff = now.getTime() - start.getTime();

    this.days =
      Math.floor(
        diff / (1000 * 60 * 60 * 24)
      );

    this.hours =
      Math.floor(
        (diff / (1000 * 60 * 60)) % 24
      );

    this.minutes =
      Math.floor(
        (diff / (1000 * 60)) % 60
      );

    this.seconds =
      Math.floor(
        (diff / 1000) % 60
      );
  }
}