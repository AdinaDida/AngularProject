import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import Modal from 'sweetalert2';

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

  delete(patientId){
    let index = this.patients.findIndex(p => p.waitingNumber === patientId);
    this.patients.splice(index, 1)
  }

  openModal(patientId){
    Modal.fire({
      title: 'Ati consultat acest pacient?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Da, sterge pacientul!',
      cancelButtonText: 'Renunta!'
    }).then((result) => {
      if (result.value) {
        let index = this.patients.findIndex(p => p.waitingNumber === patientId);
        this.patients.splice(index, 1);
      } else if (result.dismiss === Modal.DismissReason.cancel) {
      }
    })
  }


  edit(patient){
  }

}
