import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder, private router:Router) {}
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      console.log('Form Submitted', this.formGroup.value);
    } else {
      console.log('Form is invalid');
    }
  }
  onclick(){
    this.router.navigate(['/agriculture'])
  }
}