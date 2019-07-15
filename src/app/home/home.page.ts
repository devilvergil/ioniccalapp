import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicNativePlugin } from '@ionic-native/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private http:HttpClient) {}
  cal = [];

  async calculate(a,b){
   
    let url = "https://nextflow-node-calculator-api.azurewebsites.net/"
    let res = await<any> this.http.post('url',{}).toPromise();
    console.log(a,b);
    
    //this.cal = res.results;
  
    
  }

}
