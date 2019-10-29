import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  constructor(private builder: FormBuilder) { }

  ingresoForm:FormGroup =this.builder.group({
    name:['', Validators.required],
    age:['', Validators.compose([Validators.required,Validators.minLength(1)])],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.required]

  })

  enviar(ingresoForm) {
    console.log(this.ingresoForm)
  }
  ngOnInit() {
  }

}
