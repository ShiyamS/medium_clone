import { state } from '@angular/animations';

import { AuthStateInterface } from "../types/authState.interface"
import { authAuction } from "./actions"
import { createFeature, createReducer, on } from "@ngrx/store"

const inialState: AuthStateInterface = {
  isSubmitting: false,
}

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    inialState,
    on(authAuction.register, (state) => ({ ...state, isSubmitting: true }))
  )
})

export const { name: authFeatureKey, reducer: authReducer, selectIsSubmitting } = authFeature;
