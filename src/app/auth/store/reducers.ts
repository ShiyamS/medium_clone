import { state } from '@angular/animations';

import { AuthStateInterface } from "../types/authState.interface"
import { authAuction } from "./actions"
import { createFeature, createReducer, on } from "@ngrx/store"

const inialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  currentUser: undefined,
  validationsErrors: null
}

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    inialState,
    on(authAuction.register, (state) => ({ ...state, isSubmitting: true, validationsErrors: null })),
    on(authAuction.registerSuccess, (state, action) => ({ ...state, isSubmitting: false, validationsErrors: null, currentUser: action.currentUser })),
    on(authAuction.registerFailure, (state, action) => ({ ...state, isSubmitting: false, validationsErrors: action.errors }))
  )
})

export const { name: authFeatureKey, reducer: authReducer, selectIsSubmitting, selectIsLoading, selectCurrentUser, selectValidationsErrors } = authFeature;
