import { AuthService } from './../../service/auth.service';
import { selectIsSubmitting, selectValidationsErrors } from './../../store/reducers';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs'
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { authAuction } from '../../store/actions';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { RouterLink } from '@angular/router';
import { BackendErrorMessage } from 'src/app/shared/components/backendErrorMessages.component';


@Component({
  selector: 'mc-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, CommonModule, BackendErrorMessage],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', [Validators.email, Validators.email]],
    password: ['', Validators.required]
  })

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationsErrors)
  })


  constructor(private fb: FormBuilder, private store: Store, private AuthService: AuthService) { }

  onSubmit() {
    // console.log('form', this.form.getRawValue());
    const request: RegisterRequestInterface = {
      user: this.form.getRawValue()
    }

    console.log(request);
    this.store.dispatch(authAuction.register({ request }));

    // this.AuthService.register(request).subscribe((res) => console.log(res))
  }


}

