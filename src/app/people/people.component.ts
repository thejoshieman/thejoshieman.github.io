import { Component } from '@angular/core';

@Component({
  selector: '[people]',
  host: {
    id: 'maincontent',
    class: 'container mt-1 mb-5',
    style: 'background-color: rgba(255, 255, 255, 0.096); border-radius: 25px;',
  },
  imports: [],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css',
})
export class PeopleComponent {}
