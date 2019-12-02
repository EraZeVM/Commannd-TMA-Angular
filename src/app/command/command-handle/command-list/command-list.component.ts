import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.scss']
})
export class CommandListComponent implements OnInit {

  @Input() status: Number;

  detailListOrder= [
    {
      commandId: 1,
      idEntrepot: '1',
      idMagasin: '2'
    },
    {
      commandId: 2,
      idEntrepot: '1',
      idMagasin: '3'
    },
    {
      commandId: 3,
      idEntrepot: '3',
      idMagasin: '2'
    },
    {
      commandId: 4,
      idEntrepot: '2',
      idMagasin: '3'
    }
  ]

  isUpgradable = true;
  isDowngrable = true;

  constructor() { }

  ngOnInit() {
    console.log("init list");
     
  }

}
