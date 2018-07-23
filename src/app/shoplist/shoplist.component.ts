import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredients.model';

// class Item {
//   name: string;
//   amount: number;
// }

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html'
})

export class ShopListComponent implements OnInit {

  public ingredients: Ingredient[] = [];
  // public itemName: string = '';
  // public itemQuantity = 0;

  ngOnInit() {
    this.ingredients.push(new Ingredient('Apples', 10));
    this.ingredients.push(new Ingredient('Tomatoes', 10));
    this.ingredients.push(new Ingredient('Meat', 1));
    this.ingredients.push(new Ingredient('French Fries', 20));
  }

  // onAdd() {
  //   this.ingredients.push(new Ingredient(this.itemName, this.itemQuantity));
  // }
  //
  // onClear() {
  //   this.itemName = '';
  //   this.itemQuantity = 0;
  // }

}
