import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Author } from 'src/app/Author';
import { Gender } from 'src/app/Gender';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gender-form',
  templateUrl: './gender-form.component.html',
  styleUrls: ['./gender-form.component.css']
})
export class GenderFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Gender>()
  @Input() btnText!: String;

  genderForm!: FormGroup

  constructor() {}

  ngOnInit(): void {
    this.genderForm = new FormGroup({
      id: new FormControl(''),
      description: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required])
    })
  }

  get description() {
    return this.genderForm.get('username')!
  }
  get name() {
    return this.genderForm.get('name')!
  }

  submit(){
    if(this.genderForm.invalid){
      return;
    }
    console.log(this.genderForm.value);
    Swal.fire({
      title: 'Novo Genêro Literário',
      text: 'Novo gênero literário adicionado com sucesso.',
      icon: 'success'
    });
    this.onSubmit.emit(this.genderForm.value)
  }

}
