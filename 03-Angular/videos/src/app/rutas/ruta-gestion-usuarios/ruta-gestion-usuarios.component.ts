import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ruta-gestion-usuarios',
  templateUrl: './ruta-gestion-usuarios.component.html',
  styleUrls: ['./ruta-gestion-usuarios.component.scss']
})
export class RutaGestionUsuariosComponent implements OnInit {

  usuarios: Usuario[] = [
    {
      id: 1,
      nombre: 'romel'
    }
    , {
      id: 2,
      nombre: 'juan'

    }
  ]

  constructor() {
  }

  ngOnInit() {
  }

  hola() {
    return 'hola';

  }
  imprimior(usuario: Usuario){
    console.log('imprimir en consola'+ usuario);

    this.usuarios.findIndex(
      (usuarioABuscar)=>{
       return usuarioABuscar.id == usuario.id;

      }
    )
  }

}

interface Usuario {
  id?: number;
  nombre?: string;

}
