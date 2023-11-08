import User from './aula3/User.js';
import Admin from './aula3/Admin.js';
import Docente from './aula3/Docente.js';

const novoUser = new User('Mariana', 'm@m.com', '2021-01-01');
// console.log(novoUser.exibirInfos());

const novoAdmin = new Admin('Rodrigo','R@R.com','2020-01-01');
// console.log(novoAdmin.exibirInfos());
console.log(novoAdmin.nome);
novoAdmin.nome = 'Andre'
console.log(novoAdmin.nome);
console.log(novoAdmin.exibirInfos());