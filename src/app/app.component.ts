import { Component, OnInit } from '@angular/core';
import { Test100Servic } from './test100.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  listData: any;
  id:any;
  RowJSONData: any;
 constructor(private test100:Test100Servic){

 }
 getList(){
  this.test100.getList().subscribe(res=>{
   this.listData=res.hits;
  })
 }
 getSelectedData(item){
   this.RowJSONData=item
 }

 ngOnInit(){
   this.getList();
   this.id = setInterval(() => {
    this.getList(); 
  }, 10000);
 }
 ngOnDestroy() {
  if (this.id) {
    clearInterval(this.id);
  }
}
}
