import { AuthService } from './../service/auth.service';
import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { authAuction, } from './actions';
import { map, switchMap, catchError, of, pipe } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

export const registerEffect = createEffect((
  actions$ = inject(Actions), authService = inject(AuthService)
) => {
  return actions$.pipe(
    ofType(authAuction.register),
    switchMap(({ request }) => {
      return authService.register(request).pipe(
        map((currentUser: CurrentUserInterface) => {
          return authAuction.registerSuccess({ currentUser })
        }),
        catchError(() => {
          return of(authAuction.registerFailure());
        })

      )
    })

  )
}, { functional: true })
