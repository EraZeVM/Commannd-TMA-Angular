import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-monitor-screen',
  templateUrl: './monitor-screen.component.html',
  styleUrls: ['./monitor-screen.component.scss']
})
export class MonitorScreenComponent implements OnInit {

  private ws_url = 'http://127.0.0.1:8080/tma/api/monitor/read' ;
  private clear_url = 'http://127.0.0.1:8080/tma/api/order/clear' ;
  private clear_today = 'http://127.0.0.1:8080/tma/api/order/cleartoday' ;

  private currentDB = 0;
  private targetDB = 0;
  private backEndVersion = 0;
  private frontEndVersion = 1.0;
  private dbPdName = 'Void';
  private dbPdVersion = 2.0;
  private driverVersion ='Void';

  isUpToDate = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.subReq();
    this.isUpdatableVerif();
  }

  isUpdatableVerif(){
    if(this.currentDB==this.targetDB){
      this.isUpToDate = true;
    }else{
      this.isUpToDate = false;
    }
  }

  subReq(){
    this.getMonitor(this.ws_url).subscribe(data => {
      this.currentDB=data.DatabaseVersioningService_version.version,
      this.targetDB=data.Target_DB,
      this.dbPdName=data.DatabaseProductName;
      this.dbPdVersion=data.DatabaseProductVersion;
      this.backEndVersion=data.Project_version;
      this.driverVersion=data.DriverVersion;
    }
    );
  }

  subClear(){
    this.getMonitor(this.clear_url).subscribe();
  }

  subClearToday(){
    this.getMonitor(this.clear_today).subscribe();
  }

  getMonitor(url : string): Observable<any>{
    return this.http.get(url);
  }
}
