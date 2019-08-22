import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';

@Injectable()
export class AuthEffects {
  @Effect()
  authSignup;

  constructor(private actions$: Actions) {
  }

}
