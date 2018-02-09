import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the ShoppingAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-shopping-add',
  templateUrl: 'shopping-add.html',
})
export class ShoppingAddPage {

  //creating a new object
  shoppingItem = {} as ShoppingItem

  shoppingItemRef$: FirebaseListObservable<ShoppingItem[]>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private database: AngularFireDatabase
  ) {
    this.shoppingItemRef$ = this.database.list('shopping-list');
  }

  addShoppingItem(shoppingItem : ShoppingItem){
    // console.log(shoppingItem);
    this.shoppingItemRef$.push({
      itemName: this.shoppingItem.itemName,
      itemNumber: Number(this.shoppingItem.itemNumber)
    });
    //Reset our ShoppingItem
    this.shoppingItem = {} as ShoppingItem;

    //Navigate the user back to the Home
    this.navCtrl.pop();
  }

}
