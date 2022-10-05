import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent implements OnInit {
   nombre:string='';
   personas:number=0;
   tarjeta:string='';
   boletos:number=0;

   total:any;
   costo:number=12;
   msj:string='';
   guardar:number=0;

   
  constructor() { }

  registrar():void{
    let revisar:number;
    revisar=(this.boletos/this.personas);

    if(revisar>7){
      this.msj="Solo 7 boletos por comprador"
    }
    else{
      this.msj='';
      if(this.boletos>=6 && this.tarjeta=="No"){
        this.guardar=(this.boletos*this.costo);
        this.total=(this.guardar*0.15);
        this.guardar=(this.guardar-this.total);
        this.total=this.guardar.toFixed(2);
      }
      else
       if (this.boletos>=6 && this.tarjeta=="Si"){
        this.guardar=(this.boletos*this.costo);
        this.total=(this.guardar*0.15);
        this.guardar=(this.guardar-this.total);
        this.total=(this.guardar*0.10);
        this.guardar=(this.guardar-this.total);
        this.total=this.guardar.toFixed(2);
      }
      else
      if((this.boletos<=5 && this.boletos>=3) && this.tarjeta=="No" ){
        this.guardar=(this.boletos*this.costo);
        this.total=(this.guardar*0.10);
        this.guardar=(this.guardar-this.total);
        this.total=this.guardar.toFixed(2);
      }
      else
      if((this.boletos<=5 && this.boletos>=3) && this.tarjeta=="Si" ){
        this.guardar=(this.boletos*this.costo);
        this.total=(this.guardar*0.10);
        this.guardar=(this.guardar-this.total);
        this.total=(this.guardar*0.10);
        this.guardar=(this.guardar-this.total);
        this.total=this.guardar.toFixed(2);
      }
      else
      if((this.boletos<=2 && this.boletos>=1) &&this.tarjeta=="No" ){
        this.total=(this.boletos*this.costo).toFixed(2);
      }
      else
      if((this.boletos<=2 && this.boletos>=1) &&this.tarjeta=="Si" ){
        this.guardar=(this.boletos*this.costo);
        this.total=(this.guardar*0.10);
        this.guardar=(this.guardar-this.total);
        this.total=this.guardar.toFixed(2);
      }
    }
  
    }


    cancelar():void{
      this.nombre='';
      this.personas=0;
      this.boletos=0;
      this.total=0;
  



    }

  ngOnInit(): void { }

}
