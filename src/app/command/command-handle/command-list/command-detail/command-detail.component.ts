import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-command-detail',
  templateUrl: './command-detail.component.html',
  styleUrls: ['./command-detail.component.scss']
})
export class CommandDetailComponent implements OnInit {

  @Input() idCommande :  number;
  @Input() idMag : string;
  @Input() idEnt : string;
  @Input() idProduit : string;
  @Input() idEtat : number;

  isUpgradable = true;
  isDowngrable = true;

  private up_url = `http://127.0.0.1:8080/tma/api/order/update`;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.isDowngradableVerif();
    this.isUpgradableVerif();
  }

  isUpgradableVerif(){
    if(this.idEtat<4){
      this.isUpgradable = true;
    }else{
      this.isUpgradable = false;
    }
  }

  isDowngradableVerif(){
    if(this.idEtat>1){
      this.isDowngrable = true;
    }else{
      this.isDowngrable = false;
    }
  }

  upgradeCommand(){
    this.isUpgradableVerif();
    if(this.isUpgradable){
      this.upCall(this.idCommande,this.idEtat+1).subscribe();
    }
  }

  downgradeCommand(){
    this.isDowngradableVerif();
    if(this.isDowngrable){
      this.upCall(this.idCommande, this.idEtat-1).subscribe();
    }
  }

  upCall(pidCommande : number, pidEtat : number): Observable<any>{
    const params = new HttpParams().set('idCommande', pidCommande.toString()).set('idEtat', pidEtat.toString());
    return this.http.get(this.up_url, {params : params});
  }

}
