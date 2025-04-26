import { Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';

export const routes: Routes = [
    { path: '', component: DoctorComponent },
    { path: 'doctor', component: DoctorComponent },
];
