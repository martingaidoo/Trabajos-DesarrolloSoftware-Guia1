// Exporta una función que devuelva un array de usuarios solo con su nombre completo (nombre + apellido) y su edad actual en años
interface SimpleUser {
  fullname: string;
  years: number;
}
// La función debe ser exportada por default

//Importar los datos desde el archivo data.ts
import { data } from "../data";

const usuarios = data.users;

const SimpleUsers = (): SimpleUser[] => {
  return usuarios.map((usuario)=>{
    return{
      fullname: usuario.name + " " + usuario.lastName,
      years: new Date().getFullYear() - new Date(usuario.birthdate).getFullYear()
    }
  })
};
export default SimpleUsers;