import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-table';
  userData:any=[]

  constructor(private commonService:CommonService){
    this.commonService.getUserData().subscribe(data => {
      console.log(data)
      this.userData = data;
    })
  }

  userForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl('')
  })

  onSubmit(){
    // console.log(this.userForm.value);
    // if(this.userData.name)
    console.log(this.userForm.value)
    if(this.userForm.value.id == '' || this.userForm.value.name == '' || this.userForm.value.email == ''){
      alert('All fields are required !');
      return;
    }else{
        this.userData.push(this.userForm.value);
    }
    
  }
}
