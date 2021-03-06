import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';

import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromApp from '../../store/app.reducers';
// import * as fromShoppingList from '../store/shopping-list.reducers';
import {Ingredient} from '../../shared/ingredient.model';
// import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editedItem: Ingredient;
  editMode = false;
  @ViewChild('f') slForm: NgForm;
  // constructor(private shoppingListService: ShoppingListService, private store: Store<fromShoppingList.AppState>) { }
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('shoppingList')
      .subscribe(
        data => {
          if (data.editedIngredientIndex > -1) {
            this.editedItem = data.editedIngredient;
            this.editMode = true;
            this.slForm.setValue({
              name: this.editedItem.name,
              amount: this.editedItem.amount
            });
          } else {
            this.editMode = false;
          }
        }
      );
    /*this.subscription = this.shoppingListService.startedEditing.
    subscribe((index: number) => {
      this.editedItemIndex = index;
      this.editMode = true;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });*/
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({ingredient: newIngredient}));
      // this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      // this.shoppingListService.addIngredient(newIngredient);
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }
    form.reset();
    this.editMode = false;
  }
  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  onDeleted() {
    // this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    this.onClear();
  }
  ngOnDestroy() {
    this.store.dispatch(new ShoppingListActions.StopEdit());
    this.subscription.unsubscribe();
  }

}
