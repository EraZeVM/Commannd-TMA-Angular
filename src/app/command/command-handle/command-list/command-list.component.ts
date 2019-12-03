import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpParams, HttpClientModule  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.scss']
})
export class CommandListComponent implements OnInit {

  @Input() status: Number;

  private ws_url = `http://127.0.0.1:8080/tma/api/order/readbystatus`;


  detailListOrder= []

  isUpgradable = true;
  isDowngrable = true;

  constructor(private http: HttpClient, status : number) { 
    this.status = status;
  }

  ngOnInit() {    
    this.loadData();
  }

  loadData(){
    this.getCommandList().subscribe(data => this.detailListOrder = data);
  }

  getCommandList(): Observable<any>{
    let params = new HttpParams().set('status', this.status.toString());
    return this.http.get(this.ws_url, {params : params});
  }
  
}
