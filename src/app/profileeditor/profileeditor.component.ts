import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-profileeditor',
  templateUrl: './profileeditor.component.html',
  styleUrls: ['./profileeditor.component.css']
})
export class ProfileeditorComponent implements OnInit {
  profileForm!: FormGroup;
    onSubmit() {
  console.log(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'prasa',
      address: {
        street: '123 kovil Street'
      }
    });
  }


  

  get additionalDetail () {
    return this.profileForm.get('additionalDetail') as FormArray;
  }


  addNewadditionalDetail() {
const additionalDetailGroup=this.fb.group({
  mobile:[''],
  phone:['']
})
    this.additionalDetail.push(additionalDetailGroup);
    console.log(

      this.additionalDetail.controls
    )};
    getarray(){
      return this.additionalDetail.controls


    }
removeMobile( index:number){
  this.additionalDetail.removeAt(index);
}

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { 
   this. profileForm = this.fb.group({
      firstName: ['',Validators.required],
      lastName: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
      additionalDetail: this.fb.array([
        this.fb.group({
          mobile:[''],
          phone:['']
        })
  
       ])
    
    });
  
  
  
  }


  
}



