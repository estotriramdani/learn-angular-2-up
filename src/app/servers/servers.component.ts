import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  allowNewServer;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  generateText() {
    return `Satu ditambah satu sama dengan  ${1 + 1}`;
  }

  ngOnInit(): void {}
}
