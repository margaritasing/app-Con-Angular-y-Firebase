import { Component, OnInit } from '@angular/core';  // ESTAS SON LAS IMPORTACIONES 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadosService } from '../../service/empleados.service';
                                                    // ES DECIR LOS MODULOS QUE NECESITAMOS PARA QUE LA APLICACION FUNCIONE 
@Component({  // EL DECORADOR 
  selector: 'app-create-empleados',
  templateUrl: './create-empleados.component.html',
  styleUrls: ['./create-empleados.component.css']
})
export class CreateEmpleadosComponent implements OnInit {  // ESTE ES PARA EXPORTAR
  createEmpleado: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,
              private _empleadosService: EmpleadosService,
              private router: Router) { 
    this.createEmpleado= this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(15)]],
      apellido: ['', [Validators.required, Validators.maxLength(15)]],
      documento: ['', [Validators.required, Validators.maxLength(10)]],
      salario: ['', [Validators.required, Validators.maxLength(15)]]
    })

  } // UN CONTRUCTOR, DE LOS DE SIEMPRE...

  ngOnInit(): void {
  }

  agregarEmpleado(){
    this.submitted= true;
    
    if(this.createEmpleado.invalid){
      return;
    }

    const empleado: any = {
      nombre: this.createEmpleado.value.nombre, 
      apellido: this.createEmpleado.value.apellido, 
      documento: this.createEmpleado.value.documento, 
      salario: this.createEmpleado.value.salario,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }

    this._empleadosService.agregarEmpleado(empleado).then(() =>{
      console.log("empleado registrado exitossamnete");
      this.router.navigate(['./lista-empleados'])
    }).catch(error => {
      console.log(error);
    })
  }

}
