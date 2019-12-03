import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-command-generator',
  templateUrl: './command-generator.component.html',
  styleUrls: ['./command-generator.component.scss']
})
export class CommandGeneratorComponent implements OnInit {

  private ws_url = 'http://127.0.0.1:8080/tma/api/order/simulate'

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  clickOnSimulate(idMag : number){
    this.onSimulate(idMag).subscribe( () => console.log("SIMULATE WORK"));
  }

  onSimulate(idMag : Number){
    const params = new HttpParams().set('idMagasin', idMag.toString())
    return this.http.get(this.ws_url, {params : params});
  }
}
