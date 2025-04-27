import { Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

export const routes: Routes = [
    { path: '', component: DoctorComponent },
    { path: 'doctor', component: DoctorComponent },
    { path: 'registration', component: RegistrationFormComponent },
];
