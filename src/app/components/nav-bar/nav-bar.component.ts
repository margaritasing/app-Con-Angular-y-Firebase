import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar', // ESTE ES EL SELECTOR, EN CUAL SE UTILIZA,  PARA RENDERIZAR ESTE COMPONENTE EN EL COMPONENTE PADRE, APPCOMPONENTHTML
  templateUrl: './nav-bar.component.html', // ESTA ESLA DIRECCION FISICA DEL COMPONENTE 
  styleUrls: ['./nav-bar.component.css'] // SON ESTILOS 
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
