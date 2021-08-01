import { Component, OnInit } from '@angular/core';  // ESTAS SON LAS IMPORTACIONES 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
                                                    // ES DECIR LOS MODULOS QUE NECESITAMOS PARA QUE LA APLICACION FUNCIONE 
@Component({  // EL DECORADOR 
  selector: 'app-create-empleados',
  templateUrl: './create-empleados.component.html',
  styleUrls: ['./create-empleados.component.css']
})
export class CreateEmpleadosComponent implements OnInit {  // ESTE ES PARA EXPORTAR
  createEmpleado: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { 
    this.createEmpleado= this.fb.group({
      nombre: ['', [Validators.required, Validators.toString, Validators.maxLength(15)]],
      apellido: ['', [Validators.required,  Validators.toString, Validators.maxLength(15)]],
      documento: ['', [Validators.required, Validators.maxLength(10)]],
      salario: ['', [Validators.required, Validators.maxLength(15)]]
    })

  } // UN CONTRUCTOR, DE LOS DE SIEMPRE...

  ngOnInit(): void {
  }

}
