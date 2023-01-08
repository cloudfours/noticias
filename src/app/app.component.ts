import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaNoticias:any[]=[]
  title = 'noticias';
  constructor(private _noticiasServicio:NoticiasService){

  }
  buscarNoticias(parametros:any){
this._noticiasServicio.getNoticias(parametros).subscribe(data=>{
  console.log(data)
  this.listaNoticias=data.articles;
})
  }
}
