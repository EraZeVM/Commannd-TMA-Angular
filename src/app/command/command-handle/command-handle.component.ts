import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-command-handle',
  templateUrl: './command-handle.component.html',
  styleUrls: ['./command-handle.component.scss']
})
export class CommandHandleComponent implements OnInit {
commandListScreenOne = [
  {
    statusList: 1
  }
]
commandListScreenTwo = [

  {
    statusList: 2
  }
]
commandListScreenThree = [

  {
    statusList: 3
  }
]
commandListScreenFour = [
  {
    statusList: 4
  }
]

  constructor() { }

  ngOnInit() {
  }

}
