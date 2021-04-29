import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patientForm: FormGroup;
  patient;
  waitingNumber;

  
  constructor(private formBuilder: FormBuilder, private patientService: PatientService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.editPatient();
    this.waitingNumber = +this.activatedRoute.snapshot.paramMap.get('waitingNumber');
    this.fillPatientData();
  }
  

  editPatient() {
    this.patientForm = this.formBuilder.group({
      lastName: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      birthDate: [null, Validators.required],
      gender: [null, [Validators.required]],
      cnp: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]]
    });
  }


  onSubmit() {
    this.patient = {
      waitingNumber : this.waitingNumber,
      lastName : this.patientForm.get('lastName').value,
      firstName : this.patientForm.get('firstName').value,
      birthDate : this.patientForm.get('birthDate').value,
      gender: this.patientForm.get('gender').value,
      cnp : this.patientForm.get('cnp').value,
      phoneNumber : this.patientForm.get('phoneNumber').value,
    }
    this.patientService.editPatient(this.patient);
    this.patientForm.reset();
    this.router.navigateByUrl('/');
  }


  fillPatientData(){
    this.patient = this.patientService.getPatientById(this.waitingNumber);
    this.patientForm.controls['firstName'].setValue(this.patient.firstName);
    this.patientForm.controls['lastName'].setValue(this.patient.lastName);
    this.patientForm.controls['birthDate'].setValue(this.patient.birthDate);
    this.patientForm.controls['cnp'].setValue(this.patient.cnp);
    this.patientForm.controls['gender'].setValue(this.patient.gender);
    this.patientForm.controls['phoneNumber'].setValue(this.patient.phoneNumber);
  }


  get WaitingNumber(){return this.patientForm.get('waitingNumber')}
  get lastName(){return this.patientForm.get('lastName')}
  get firstName(){return this.patientForm.get('firstName')}
  get birthDate(){return this.patientForm.get('birthDate')}
  get gender(){return this.patientForm.get('gender')}
  get cnp(){return this.patientForm.get('cnp')}
  get phoneNumber(){return this.patientForm.get('phoneNumber')}
  get date(){return new Date().toISOString().slice(0, 10)}

}
