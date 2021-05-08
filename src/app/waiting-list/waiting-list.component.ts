import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.component.html',
  styleUrls: ['./waiting-list.component.css']
})
export class WaitingListComponent implements OnInit {
  patients = [];

  constructor(private patientService: PatientService) { }


  ngOnInit(): void {
    this.patients = this.patientService.getPatients();
  }


  deletePatient(waitingNumber){
    let index = this.patients.findIndex(p => p.waitingNumber === waitingNumber);
    this.patients.splice(index, 1)
  }
}
