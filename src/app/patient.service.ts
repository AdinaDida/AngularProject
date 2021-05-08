import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patients = [
    {"waitingNumber": 1, "lastName": "Goodwin" , "firstName": "Max", "birthDate": "1991-01-01" , "gender": "M", "cnp": 1111111111111, "phoneNumber": 1111111111},
    {"waitingNumber": 2, "lastName": "Bloom" , "firstName": "Lauren", "birthDate": "1992-02-02" , "gender": "F", "cnp": 2222222222222, "phoneNumber": 2222222222},
    {"waitingNumber": 3, "lastName": "Sharpe" , "firstName": "Helen", "birthDate": "1993-03-03" , "gender": "F", "cnp": 3333333333333, "phoneNumber": 3333333333},
    {"waitingNumber": 4, "lastName": "Kapoor" , "firstName": "Vijay", "birthDate": "1994-04-04" , "gender": "M", "cnp": 4444444444444, "phoneNumber": 4444444444},
    {"waitingNumber": 5, "lastName": "Reynolds" , "firstName": "Floyd", "birthDate": "1995-05-05" , "gender": "M", "cnp": 5555555555555, "phoneNumber": 5555555555}
  ]

  constructor() { }

  getPatients(){
    return this.patients;
  }


  createPatient(patient) {
    this.patients.push(patient);
    return patient;
  }


  getPatientById(patientId){
    return this.patients.find(p => p.waitingNumber == patientId);
  }


  editPatient(patient){
    let index = this.patients.findIndex(p => p.waitingNumber == patient.waitingNumber);
    this.patients[index] = patient;
  }
}
