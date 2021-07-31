import { Component, OnInit } from '@angular/core';  // ESTAS SON LAS IMPORTACIONES 
                                                    // ES DECIR LOS MODULOS QUE NECESITAMOS PARA QUE LA APLICACION FUNCIONE 
@Component({  // EL DECORADOR 
  selector: 'app-create-empleados',
  templateUrl: './create-empleados.component.html',
  styleUrls: ['./create-empleados.component.css']
})
export class CreateEmpleadosComponent implements OnInit {  // ESTE ES PARA EXPORTAR

  constructor() { } // UN CONTRUCTOR, DE LOS DE SIEMPRE...

  ngOnInit(): void {
  }

}
