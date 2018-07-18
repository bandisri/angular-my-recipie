import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

class Item {
  name: string;
  amount: number;
}

@Component({
  selector: '<shop-list>',
  templateUrl: './shoplist.component.html'
})

export class ShopList implements OnInit {

  public items: Item[] = [];
  public itemName: string = '';
  public itemQuantity = 0;

  ngOnInit() {
    this.items.push({name: 'Apples', amount:10});
    this.items.push({name: 'Tomatoes', amount:10});
    this.items.push({name: 'Meat', amount:1});
    this.items.push({name: 'French Fries', amount:20});
  }

  onAdd() {
    this.items.push({name: this.itemName, amount: this.itemQuantity});
  }

  onClear() {
    this.itemName = '';
    this.itemQuantity = 0;
  }

}
