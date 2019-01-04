import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  usuarios: Usuario[] = [
    {
      id: 1,
      nombre: 'Adrian'
    },
    {
      id: 2,
      nombre: 'Vicente'
    }
  ];

  registroActual = 3; // RECNUM -> Record Number

  constructor() {
  }

  crear(nuevoUsuario: Usuario): Usuario {

    nuevoUsuario.id = this.registroActual;
    this.usuarios.push(nuevoUsuario);
    this.registroActual++;

    return nuevoUsuario;
  }

  eliminar(id: number) {
    const indiceUsuario = this.usuarios
      .findIndex(
        (usuario) => {
          return usuario.id === id;
        }
      );

    const usuarioBorrado = JSON.parse(
      JSON.stringify(this.usuarios[indiceUsuario])
    );

    this.usuarios.splice(indiceUsuario, 1);

    return usuarioBorrado;
  }

  actualizar(id: number, usuarioActualizado: Usuario) {

    const indiceUsuario = this.usuarios
      .findIndex(
        (usuario) => {
          return usuario.id === id;
        }
      );

    this.usuarios[indiceUsuario] = usuarioActualizado;

    return usuarioActualizado;
  }

  buscar(id: number) {
    return this.usuarios
      .find((usuario) => usuario.id === id);
  }
}

export interface Usuario {
  nombre?: string;
  id?: number;
}
