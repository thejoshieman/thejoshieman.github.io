import { Component } from '@angular/core';

@Component({
  selector: '[talker]',
  host: {
    id: 'maincontent',
    class: 'container mt-1 mb-5',
    style: 'background-color: rgba(255, 255, 255, 0.096); border-radius: 25px;',
  },
  imports: [],
  templateUrl: './talker.component.html',
  styleUrl: './talker.component.css',
})
export class TalkerComponent {}
