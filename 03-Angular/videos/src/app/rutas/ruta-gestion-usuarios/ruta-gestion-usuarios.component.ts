import { Component, OnInit } from '@angular/core';
import {UsuarioServiceService} from "../../servicios/usuario-service.service";

@Component({
  selector: 'app-ruta-gestion-usuarios',
  templateUrl: './ruta-gestion-usuarios.component.html',
  styleUrls: ['./ruta-gestion-usuarios.component.scss']
})
export class RutaGestionUsuariosComponent implements OnInit {


  usuarios = [];

  // Inyeccion de Dependencias
  constructor(
    private readonly _usuarioService: UsuarioServiceService
  ) {

  }

  ngOnInit() {
    // CUANDO ESTA LISTO EL WEB COMPONENT PARA MOSTRARSE
    this.usuarios = this._usuarioService.usuarios;
  }


  eliminar(usuario) {

    this._usuarioService.eliminar(usuario.id);

  }

}
