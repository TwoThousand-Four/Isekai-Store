import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Figure} from '../models/figure.model';


@Injectable({
  providedIn: 'root'
})
export class FigureService {

  constructor(private http:HttpClient) { }
  tolistFigures(): Observable<Figure>{
    return this.http.get<Figure>("http://localhost:3000/figuras")
  }
  seeFigure(id:Number):Observable<Figure>{
    return this.http.get<Figure>('http://localhost:3000/figuras/'+id)
  }
  
  addFigure(newFigure:Figure):Observable<Figure>{
    return this.http.post<Figure>("http://localhost:3000/figuras", newFigure);
  }

  updateFigure(figure:any):Observable<Figure>{
    return this.http.put<Figure>("http://localhost:3000/figuras/"+figure.id, figure);
  }
  deleteFigure(id:Number): Observable<Figure>{
    return this.http.delete<Figure>("http://localhost:3000/figuras/"+id)
  }
}
