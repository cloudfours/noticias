import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent {
@Input() ListaNoticias:any;


}
