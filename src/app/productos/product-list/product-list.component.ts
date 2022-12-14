import { Component, OnInit } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  productos:IProducto[]=[
    {
      "productoId":1,
      "modelo":'sentra',
      "descripcion":"auto 4 puertas",
      "marca":'Nissan',
      "year":"2020",
      "precio":250000,
      "puntos":3.5,
      "imagenUrl":"https://www.nissan.com.mx/content/dam/Nissan/mexico/assets/sentra/my22/vlp/nissan-2022-sentra_sr_platinum_bitono_cvt-bitono_naranja-negro-exterior-herobanner_frontal_copiloto-m.jpg"
    },
    
      {
        "productoId":2,
        "modelo":'Versa',
        "descripcion":"auto 4 puertas",
        "marca":'Nissan',
        "year":"2020",
        "precio":280000,
        "puntos":4.5,
        "imagenUrl":"https://img.autosblogmexico.com/2019/11/21/WaxDrR2x/img-4825-265f.jpg",
      },
      {
        "productoId":3,
        "modelo":'Civic Type R',
        "descripcion":"auto 4 puertas",
        "marca":'Honda',
        "year":"2020",
        "precio":300000,
        "puntos":4.5,
        "imagenUrl":"data:image/jpeg;base64,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"
      },
      
      
  ]

  constructor() { }

  ShowImagen():void{
    this.muestraImg=!this.muestraImg;

  } 

  ngOnInit(): void {
  }

}
