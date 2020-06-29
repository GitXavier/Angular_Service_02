import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cocktail } from './Models/Cocktail';

@Injectable({ providedIn: 'root'})

export class CocktailService {

  constructor(private httpclient: HttpClient) { }
  public getCocktail(): Observable<Cocktail[]> {
    return this.httpclient.get<Cocktail[]>('assets/cocktail.json');
  }
}
