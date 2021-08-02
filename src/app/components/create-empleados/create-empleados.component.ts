import { Component, OnInit } from '@angular/core';  // ESTAS SON LAS IMPORTACIONES 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  loading = false;
  id: string | null;
  titulo = 'Agregar Empleado';

  constructor(private fb: FormBuilder,
              private _empleadosService: EmpleadosService,
              private router: Router,
              private toastr: ToastrService,
              private aRoute: ActivatedRoute) { 
    this.createEmpleado= this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(15)]],
      apellido: ['', [Validators.required, Validators.maxLength(15)]],
      documento: ['', [Validators.required, Validators.maxLength(10)]],
      salario: ['', [Validators.required, Validators.maxLength(15)]]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)

  } // UN CONTRUCTOR, DE LOS DE SIEMPRE...

  ngOnInit(): void {
    this.esEditar();
  }

  agregarEditarEmpleado(){
    
    this.submitted= true;
    
    if(this.createEmpleado.invalid){
      return;
    }

    if (this.id === null) {
      this.agregarEmpleado();   
    }else{
      this.editarEmpleado(this.id);
    }



  }
    
  agregarEmpleado(){
    
    const empleado: any = {
      nombre: this.createEmpleado.value.nombre, 
      apellido: this.createEmpleado.value.apellido, 
      documento: this.createEmpleado.value.documento, 
      salario: this.createEmpleado.value.salario,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }
    this.loading = true;
    this._empleadosService.agregarEmpleado(empleado).then(() =>{
      this.toastr.success('Registro exitoso', 'Empleado registrado', {
        positionClass: 'toast-bottom-right'
      });
      this.loading = false;
      this.router.navigate(['./lista-empleados'])
    }).catch(error => {
      console.log(error);
      this.loading = false;
    })
  }

  editarEmpleado(id: string){
     
    const empleado: any = {
      nombre: this.createEmpleado.value.nombre, 
      apellido: this.createEmpleado.value.apellido, 
      documento: this.createEmpleado.value.documento, 
      salario: this.createEmpleado.value.salario,
      fechaActualizacion: new Date()
    }

    this.loading = true;

    this._empleadosService.actualizarEmpleado(id, empleado).then(() => {
      this.loading = false;
      this.toastr.info('La modificacion fue correcta', 'Empleado actualizado', {
        positionClass: 'toast-bottom-right'
      })
      this.router.navigate(['./lista-empleados'])
    })
  }

  esEditar(){

    if (this.id !== null) {
      this.titulo = 'Editar Empleado' 
      this.loading = true;
      this._empleadosService.getEmpleado(this.id).subscribe(data =>{
        this.loading = false;
        console.log(data.payload.data()['nombre']);
        this.createEmpleado.setValue({
          nombre: data.payload.data()['nombre'],
          apellido: data.payload.data()['apellido'],
          documento: data.payload.data()['documento'],
          salario: data.payload.data()['salario'],
        })
      })
      
    }
  }

}
