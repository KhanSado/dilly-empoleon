import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PublisherCompany } from 'src/app/puublisherCompany';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-publisher-form',
  templateUrl: './publisher-form.component.html',
  styleUrl: './publisher-form.component.css'
})
export class PublisherFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<PublisherCompany>()
  @Input() btnText!: String;

  publisherForm!: FormGroup

  constructor() {}

  ngOnInit(): void {
    this.publisherForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required])
    })
  }

  get name() {
    return this.publisherForm.get('name')!
  }

  submit(){
    if(this.publisherForm.invalid){
      return;
    }
    Swal.fire({
      title: 'Nova Editora',
      text: 'Nova Editora adicionado com sucesso.',
      icon: 'success'
    });
    this.onSubmit.emit(this.publisherForm.value)
  }

}
