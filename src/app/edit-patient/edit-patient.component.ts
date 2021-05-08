import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  editPatientForm: FormGroup;
  patient;
  waitingNumber;

  constructor(private formBuilder: FormBuilder, private patientService: PatientService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.editPatient();
    this.waitingNumber = +this.activatedRoute.snapshot.paramMap.get('waitingNumber');
    this.fillPatientData();
  }


  editPatient() {
    this.editPatientForm = this.formBuilder.group({
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
      lastName : this.editPatientForm.get('lastName').value,
      firstName : this.editPatientForm.get('firstName').value,
      birthDate : this.editPatientForm.get('birthDate').value,
      gender: this.editPatientForm.get('gender').value,
      cnp : this.editPatientForm.get('cnp').value,
      phoneNumber : this.editPatientForm.get('phoneNumber').value,
    }
    this.patientService.editPatient(this.patient);
    this.editPatientForm.reset();
    this.router.navigateByUrl('/');
  }


  fillPatientData(){
    this.patient = this.patientService.getPatientById(this.waitingNumber);
    this.editPatientForm.controls['firstName'].setValue(this.patient.firstName);
    this.editPatientForm.controls['lastName'].setValue(this.patient.lastName);
    this.editPatientForm.controls['birthDate'].setValue(this.patient.birthDate);
    this.editPatientForm.controls['cnp'].setValue(this.patient.cnp);
    this.editPatientForm.controls['gender'].setValue(this.patient.gender);
    this.editPatientForm.controls['phoneNumber'].setValue(this.patient.phoneNumber);
  }


  get WaitingNumber(){return this.editPatientForm.get('waitingNumber')}
  get lastName(){return this.editPatientForm.get('lastName')}
  get firstName(){return this.editPatientForm.get('firstName')}
  get birthDate(){return this.editPatientForm.get('birthDate')}
  get gender(){return this.editPatientForm.get('gender')}
  get cnp(){return this.editPatientForm.get('cnp')}
  get phoneNumber(){return this.editPatientForm.get('phoneNumber')}
  get date(){return new Date().toISOString().slice(0, 10)}
}
