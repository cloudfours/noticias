import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http:HttpClient) { }
  getNoticias(parametros:any):Observable<any>{
const URL='https://newsapi.org/v2/top-headlines?country='+parametros.pais+'&category='+parametros.categoria+'&apiKey=05e4dea88d6e4c8f8d3dd5971bc2c57d'
return this.http.get(URL)
  }
 
}
