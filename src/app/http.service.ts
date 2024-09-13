import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Card{
  name:string,
  height:string,
  url: string,
  mass:string,
  id:string
}

export interface CardDetails{
  hair_color:string,
  skin_color:string,
  eye_color:string,
  birth_year:string
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor( private httpClient:HttpClient) { }

  addCards():Observable<{results:Card[]}>{
 return  this.httpClient.get<{results:Card[]}>('https://swapi.dev/api/people')
  }
  getCardDetail(id: any):Observable<CardDetails>{
return this.httpClient.get<CardDetails>(`https://swapi.dev/api/people/${id}`)
  }

}
