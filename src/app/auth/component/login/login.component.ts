import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-login',
  standalone: true, // Ensure this component is standalone or used in a module
  imports: [ReactiveFormsModule, NzButtonModule, NzCheckboxModule, NzFormModule, NzInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private fb = inject(NonNullableFormBuilder);
  validateForm = this.fb.group({
    email: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
    remember: this.fb.control(true)
  });

  constructor(private http: HttpClient) { }

  submitForm(): void {
    if (this.validateForm.valid) {
      const loginData = {
        email: this.validateForm.value.email,
        password: this.validateForm.value.password
      };

      this.http.post('http://localhost:8080/auth/login', loginData).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          alert('Login successful!');
        },
        error: (error) => {
          console.error('Login failed:', error);
          alert('Invalid email or password');
        }
      });
    }
  }
}
