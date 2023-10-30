import { AuthService } from './../../service/auth.service';
import { selectIsSubmitting } from './../../store/reducers';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { register } from '../../store/actions';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { RouterLink } from '@angular/router';
import { AuthStateInterface } from '../../types/authState.interface';

@Component({
  selector: 'mc-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', [Validators.email, Validators.email]],
    password: ['', Validators.required]
  })

  isSubmitting$ = this.store.select(selectIsSubmitting)


  constructor(private fb: FormBuilder, private store: Store<{ auth: AuthStateInterface }>, private AuthService: AuthService) { }

  onSubmit() {
    // console.log('form', this.form.getRawValue());
    const request: RegisterRequestInterface = {
      user: this.form.getRawValue()
    }

    console.log(request);
    this.store.dispatch(register({ request }));

    this.AuthService.register(request).subscribe((res) => console.log(res))
  }


}

