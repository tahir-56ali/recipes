import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

import {DataStorageService} from '../../shared/data-storage.service';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';
import * as AuthActions from "../../auth/store/auth.actions";
// import {HttpEvent, HttpEventType} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;
  constructor(private dataStorageService: DataStorageService,
              private store: Store<fromApp.AppState>) {}
  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
        .subscribe(
            // (response: HttpEvent<object>) => {
            //     console.log(response.type === HttpEventType.Response);
            (response) => {
                console.log(response);
            }
        );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }
  onLogout() {
      this.store.dispatch(new AuthActions.Logout());
  }
}
