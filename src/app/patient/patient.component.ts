import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';
import Modal from 'sweetalert2';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patient;
  waitingNumber;
  patients = [];


  constructor(private patientService: PatientService, private activatedRoute: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.waitingNumber = +this.activatedRoute.snapshot.paramMap.get('waitingNumber');
    this.patient = this.patientService.getPatientById(this.waitingNumber);
    this.patients = this.patientService.getPatients();
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
        this.router.navigateByUrl('/');
      } 
    })
  }
}
