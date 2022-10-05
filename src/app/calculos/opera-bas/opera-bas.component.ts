import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opera-bas',
  templateUrl: './opera-bas.component.html',
  styleUrls: ['./opera-bas.component.css']
})
export class OperaBasComponent implements OnInit {
  num1:string='';
  num2:string='';
  resultado:number=0;
  operacion:string='';

  

  constructor() { }

  sumar():void{
    if (this.operacion=="suma") {
      this.resultado=parseInt(this.num1)+parseInt(this.num2);
    }
      else if (this.operacion=="resta") {
        this.resultado=parseInt(this.num1)-parseInt(this.num2);
      }
      else if (this.operacion=="multiplicacion") {
        this.resultado=parseInt(this.num1)*parseInt(this.num2);
      }
      else if (this.operacion=="dividir") {
        this.resultado=parseInt(this.num1)/parseInt(this.num2);
      }

    
    
  }
  
  operaciones():void{
  }

  ngOnInit(): void {
  }

}
