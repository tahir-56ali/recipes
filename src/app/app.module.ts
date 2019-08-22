import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthModule} from "./auth/auth.module";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {CoreModule} from "./core/core.module";
import { reducers } from "./store/app.reducers";
import {AuthEffects} from "./auth/store/auth.effects";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ShoppingListModule,
    AuthModule,
    CoreModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
