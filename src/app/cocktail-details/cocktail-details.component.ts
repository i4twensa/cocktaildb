import { Component, OnInit } from '@angular/core';
import { Drink } from '../shared/models/drink';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { GetCocktailDetailsByIdService } from '../shared/services/get-cocktail-by-id.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {
  public drinkId?: string;
  public drink?: Drink;

  constructor(
    private getCocktailDetailsById: GetCocktailDetailsByIdService,
    private route: ActivatedRoute,  
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.drinkId = params['id']);
    if (this.drinkId) {
      this.getCocktailDetails(this.drinkId)
    }
  }

  public getCocktailDetails(id: string){
    this.getCocktailDetailsById.getCocktailDetailsById(id).subscribe({
      next:data=>{
        this.drink= data.drinks[0]  
        console.log(data);

      }
    })
  }

  public goToCocktailsList() {
    this.router.navigate([`/list-cocktails`])
  }

}
