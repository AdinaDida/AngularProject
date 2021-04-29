import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  patientForm: FormGroup;
  patient;


  constructor(private formBuilder: FormBuilder, private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {
    this.createPatient();
  }

  createPatient() {
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
      waitingNumber : this.patientService.getPatients().length + 1,
      lastName : this.patientForm.get('lastName').value,
      firstName : this.patientForm.get('firstName').value,
      birthDate : this.patientForm.get('birthDate').value,
      gender: this.patientForm.get('gender').value,
      cnp : this.patientForm.get('cnp').value,
      phoneNumber : this.patientForm.get('phoneNumber').value,
    }
    this.patientService.createPatient(this.patient);
    this.patientForm.reset();
    this.router.navigateByUrl('/');
  }

  get lastName(){return this.patientForm.get('lastName')}
  get firstName(){return this.patientForm.get('firstName')}
  get birthDate(){return this.patientForm.get('birthDate')}
  get gender(){return this.patientForm.get('gender')}
  get cnp(){return this.patientForm.get('cnp')}
  get phoneNumber(){return this.patientForm.get('phoneNumber')}
  get date(){return new Date().toISOString().slice(0, 10)}

}
