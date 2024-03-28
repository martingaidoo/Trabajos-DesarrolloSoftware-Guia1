
// Exporta una función que devuelva el primer usuario que tenga un email asociado a gmail
// La función debe ser exportada por default

//Importar los datos desde el archivo data.ts
import { data } from "../data";

const usuarios = data.users;

const usuarioGmail = () => {
    for (let i = 0; i < usuarios.length; i++){
        if (usuarios[i].email.split("@")[1]== "gmail.com")
        {return usuarios[i];}
    }
}
export default usuarioGmail;
//console.log(usuarioGmail());