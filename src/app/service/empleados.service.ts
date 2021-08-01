import { Injectable } from '@angular/core'; // LO QUE SE ESTA IMPORTANDO
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({   // LO QUE SE ESTA INYECTANDO
  providedIn: 'root'
})
export class EmpleadosService { // EXPORTACIONES DEL COMPONENTE

  constructor(private firestore: AngularFirestore) { } // CONTRUCTOS(EN ESTA PARTE TODO ES THIS.NOMBRE. THIS.APELLIDO, THIS. CUALQUIER VERGA)

  agregarEmpleado(empleado: any): Promise<any>{
    return this.firestore.collection('empleados').add(empleado);
  }

  getEmpleados(): Observable<any> {
    return this.firestore.collection('empleados', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }



}

