import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../interfaces/post.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() nuevoPost: EventEmitter<Post>;

  formulario: FormGroup;

  constructor() {

    this.nuevoPost = new EventEmitter();

    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellidos: new FormControl(),
      departamento: new FormControl(),
      cargo: new FormControl(),
      experiencia: new FormControl(),
      imagen: new FormControl(),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formulario.value);
    this.nuevoPost.emit(this.formulario.value);
    this.formulario.reset();
  }

}
