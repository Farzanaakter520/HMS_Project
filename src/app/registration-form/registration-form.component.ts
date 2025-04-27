import { Component } from '@angular/core';
import { LoginRegisterService } from '../services/login-register.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  imports: [FormsModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent {
  name: string = '';
  email: string = '';
  pass: string = '';
  phone_number: string = '';

  constructor(
    private loginRegisterService: LoginRegisterService
  ) {}

  private userIdGenerator(): number {
    return Math.floor(100000 + Math.random() * 900000);
  }

  // saveStudent(){
  //   const student = new Student(
  //     this.userIdGenerator(), // Empty for the userId, this will be auto-generated in the service
  //     this.name,
  //     this.email,
  //     this.pass,
  //     this.phone_number
  //   );

  //   const registerDone = this.loginRegisterService.register(student);

  //   if (registerDone) {
  //     alert('Registration successful!');
  //     // You can add code to reset the form here, or close the modal
  //     this.resetForm();
  //   } else {
  //     alert('Registration failed. Email already exists.');
  //   }
  // }

  // // Method to reset the form after submission
  // resetForm() {
  //   this.name = '';
  //   this.email = '';
  //   this.pass = '';
  //   this.phone_number = '';
  // }
  

}


