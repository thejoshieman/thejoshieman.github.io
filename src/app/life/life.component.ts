import { Component } from '@angular/core';

@Component({
  selector: '[life]',
  host: {
    id: 'maincontent',
    class: 'container mt-1 mb-5',
    style: 'background-color: rgba(255, 255, 255, 0.096); border-radius: 25px;',
  },
  templateUrl: './life.component.html',
  styleUrl: './life.component.css',
})
export class LifeComponent {}
