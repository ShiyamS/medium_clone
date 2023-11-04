import { BackendErrorsInterface } from './../../shared/types/bacendErrors.interface';
import { createActionGroup, props } from "@ngrx/store";
import { RegisterRequestInterface } from "../types/registerRequest.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";

// export const register = createAction('[Auth] Register', props<{ request: RegisterRequestInterface }>())

export const authAuction = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: RegisterRequestInterface }>(),
    'Register success': props<{ currentUser: CurrentUserInterface }>(),
    'Register failure': props<{ errors: BackendErrorsInterface }>(),
  }
})
