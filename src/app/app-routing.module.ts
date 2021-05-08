import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { PatientComponent } from './patient/patient.component';
import { WaitingListComponent } from './waiting-list/waiting-list.component';

const routes: Routes = [
  {path: '', component: WaitingListComponent},
  {path: 'edit/:waitingNumber', component: EditPatientComponent},
  {path: 'add-patient', component: AddPatientComponent},
  {path: 'patient/:waitingNumber', component: PatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
