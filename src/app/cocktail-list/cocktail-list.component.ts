import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../Cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent implements OnInit {

  public cocktails = [];

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {

    this.cocktails = this.cocktailService.getCocktails();
  }

}
