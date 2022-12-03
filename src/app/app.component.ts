import { Component, OnInit} from '@angular/core';
import { MobileService } from './mobile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'crud';
  constructor( private ms:MobileService){

  }

  mobiles : any=[];

  ngOnInit(): void {
    this.ms.fetchUsers().subscribe(res=>{
      this.mobiles=res;
    })
      
  }
}

