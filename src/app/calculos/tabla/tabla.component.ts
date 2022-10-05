import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  
  uno!:number;
  res:string[]=[];




  constructor() { 
      
  }

  tabla():void{

   let res:string[]=[];
   let a:number=1;
   while(a<=10){
    res.push(this.uno + "x" + a + "=" + (this.uno*a) );
    this.res=res;
    a++;
   }
  

  }

  ngOnInit(): void {
  }

}
