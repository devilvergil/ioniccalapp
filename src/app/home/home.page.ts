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
   
    //let res = await<any> this.http.get('https://randomuser.me/api/?results=50').toPromise();
    console.log(a,b);
    let url = "https://github.com/devilvergil/ioniccalapp.git"
    //this.cal = res.results;
  
  }

}
