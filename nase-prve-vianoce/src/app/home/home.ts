import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TogetherCounterComponent } from '../components/together-counter/together-counter';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TogetherCounterComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  showLetter = false;

  backgroundStars = Array.from({ length: 250 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 0.7 + Math.random() * 2.5,
    opacity: 0.3 + Math.random() * 0.7,
    delay: Math.random() * 6,
    duration: 2 + Math.random() * 5
  }));

  snowflakes = Array.from({ length: 65 }, () => ({
    x: Math.random() * 100,
    speed: 5 + Math.random() * 12,
    delay: -Math.random() * 15,
    size: 8 + Math.random() * 18,
    opacity: 0.3 + Math.random() * 0.7
  }));

  
  pastaStars = Array.from({ length: 180 }, () => {
    const angle = Math.random() * Math.PI * 2;

    // Concentrate stars inside the circular plate
    const radius = Math.sqrt(Math.random()) * 125;

    return {
      x: 150 + Math.cos(angle) * radius,
      y: 150 + Math.sin(angle) * radius,
      size: 0.0 + Math.random() * 2,
      delay: Math.random() * 4
    };
  });

  pastaLines = Array.from({ length: 38 }, (_, i) => {
    const points: string[] = [];

    const startAngle = Math.random() * Math.PI * 2;
    const startRadius = 25 + Math.random() * 85;
    const direction = Math.random() * Math.PI * 2;

    for (let j = 0; j <= 45; j++) {
      const t = j / 45;

      const angle =
        startAngle + direction * t +
        Math.sin(t * Math.PI * 5 + i) * 0.35;

      const radius =
        startRadius +
        Math.sin(t * Math.PI * 4 + i * 2) * 25 +
        Math.cos(t * Math.PI * 7) * 12;

      const x = 150 + Math.cos(angle) * radius;
      const y = 150 + Math.sin(angle) * radius;

      points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }

    return {
      points: points.join(' ')
    };
  });


}