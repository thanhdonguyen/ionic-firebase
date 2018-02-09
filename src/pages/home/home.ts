import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShoppingAddPage } from './../../pages/shopping-add/shopping-add';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingListRef$: FirebaseListObservable<ShoppingItem[]>

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private database: AngularFireDatabase
  ) {
    // pointing shoppingListRef$ at Firebase -> 'shopping-list' node.
    // that means not only can we things from this reference to the database,
    // but also we have access to everything inside of that node
    this.shoppingListRef$ = this.database.list('shopping-list');
    console.log(this.shoppingListRef$);
  }

  gotoAdd(){
    this.navCtrl.push(ShoppingAddPage);
  }

}
