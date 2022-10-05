import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OperaBasComponent } from './calculos/opera-bas/opera-bas.component';
import { TablaComponent } from './calculos/tabla/tabla.component';
import { CinepolisComponent } from './cinepolis/cinepolis.component';
import { ProductListComponent } from './productos/product-list/product-list.component';

const routes: Routes = [
  {path:'',component: ProductListComponent},
  {path:'OperaBas',component: OperaBasComponent},
  {path:'Tablas', component: TablaComponent},
  {path:'Cinepolis', component: CinepolisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

