import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-logger-screen',
  templateUrl: './logger-screen.component.html',
  styleUrls: ['./logger-screen.component.scss']
})
export class LoggerScreenComponent implements OnInit {

  private ws_url = 'localhost:8080/tma/api/orderlog/read' ;

  constructor(private _httpClient: HttpClient) { }

  private logList = [];

  ngOnInit() {
   this.getLogList().subscribe(()=> console.log("GOT REPONSE"));
    }

  getLogList(): Observable<any>{
    return this._httpClient.get(this.ws_url);
  }

}
