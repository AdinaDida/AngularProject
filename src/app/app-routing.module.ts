import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { PatientComponent } from './patient/patient.component';
import { WaitingListComponent } from './waiting-list/waiting-list.component';

const routes: Routes = [
  {path: '', component: WaitingListComponent},
  {path: 'edit/:waitingNumber', component: PatientComponent},
  {path: 'add-patient', component: AddPatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
