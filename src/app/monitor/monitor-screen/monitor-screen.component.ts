import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitor-screen',
  templateUrl: './monitor-screen.component.html',
  styleUrls: ['./monitor-screen.component.scss']
})
export class MonitorScreenComponent implements OnInit {

  isUpToDate = false;

  constructor() { }

  ngOnInit() {
  }

}
