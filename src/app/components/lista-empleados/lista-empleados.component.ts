import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { EmpleadosService } from '../../service/empleados.service';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {
  
  empleados:  any[] = [];

  constructor(private _empleadoService: EmpleadosService,
              private toastr: ToastrService) {
   
   }

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados(){
    this._empleadoService.getEmpleados().subscribe(data => {
      this.empleados = [];
      data.forEach((element: any) => {
      //console.log(element.payload.doc.data());
      this.empleados.push({
        id: element.payload.doc.id,
        ... element.payload.doc.data()
      })
        
     });
    
    })
  }

  deleteEmpleado(id: string){
    this._empleadoService.deleteEmpleados(id).then(() => {
      console.log('Eliminado (a)');
      this.toastr.error('Eliminado (a) con exíto', 'Registro Eliminado', {
        positionClass: 'toast-bottom-right'
      })
    }).catch(error => {
      console.log(error)
    })
  }

}
