import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Cocktail } from '../Models/Cocktail';
import { CocktailService } from '../Cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

  cocktails: Cocktail[] = [];

  constructor(private service: CocktailService) { }

  ngOnInit(): void {

      this.service.getCocktail().subscribe( cocktails => {
        console.log(cocktails);
        this.cocktails = cocktails;
      });
  }

/*   constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.httpClient.get<Cocktail[]>("assets/cocktail.json").subscribe( cocktails => {
      console.log(cocktails);
      this.cocktails = cocktails;
    });
  } */
}
