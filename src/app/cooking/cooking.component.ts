import { Component } from '@angular/core';

@Component({
  selector: '[cooking]',
  host: {
    id: 'maincontent',
    class: 'container mt-1 mb-5',
    style: 'background-color: rgba(255, 255, 255, 0.096); border-radius: 25px;',
  },
  imports: [],
  templateUrl: './cooking.component.html',
  styleUrl: './cooking.component.css',
})
export class CookingComponent {}
