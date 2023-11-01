// usando uma classe criada em outro objeto

import User from './User.js';

function criaUsuario() {
    const usuario = new User('Gus', 'gus@gus.com', '2020-01-01')
    console.log(usuario);
    console.log(usuario.exibirInfos());
}

criaUsuario();

