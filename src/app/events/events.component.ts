import { Component } from '@angular/core';

@Component({
  selector: '[events]',
  host: {
    id: 'maincontent',
    class: 'container mt-1 mb-5',
    style: 'background-color: rgba(255, 255, 255, 0.096); border-radius: 25px;',
  },
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {}
