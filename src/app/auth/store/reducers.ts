import { state } from '@angular/animations';

import { AuthStateInterface } from "../types/authState.interface"
import { register } from "./actions"
import { createFeature, createReducer, on } from "@ngrx/store"

const inialState: AuthStateInterface = {
  isSubmitting: false,
}

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    inialState,
    on(register, (state) => ({ ...state, isSubmitting: true }))
  )
})

export const { name: authFeatureKey, reducer: authReducer, selectIsSubmitting } = authFeature;
