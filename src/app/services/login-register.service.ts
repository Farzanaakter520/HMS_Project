import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterService {

  constructor() { }

  // register(
  //   user: Student = new Student(0,'','','','')
  // ): boolean {
  //     let users = JSON.parse(localStorage.getItem('students') || '[]');

  //     if (users.some((u: any) => u.email === user.email)) {
  //       return false; 
  //     }

  //     const newUser = {
  //       id: user.id,  // Ensure it's stored as a number
  //       name: user.name,
  //       email: user.email,
  //       password: user.password,
  //       phone_number: user.phone_number,
  //     };

  //     users.push(newUser);
  //     localStorage.setItem('students', JSON.stringify(users));
  //     return true;
  // }
}
