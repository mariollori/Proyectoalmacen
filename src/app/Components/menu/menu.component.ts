import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  opciones = [
    {name:"Gestion de Usuarios",icono:"fas fa-users-cog"},
    {name:"Registrar Solicitud",icono:"fas fa-cart-plus"},
    {name:"Agregar Item",icono:"fas fa-plus"},
    {name:"Ver Inventario",icono:"fas fa-clipboard-list"},
    
  ]
  ngOnInit(): void {
  }

}
