
// Exporta una función que devuelva la sumatoria del precio de todos los planes de suscripcion
// La función debe ser exportada por default

//Importar los datos desde el archivo data.ts
import { data } from "../data";
const usuarios = data.users;
const planes = data.plans;
function sumPrice(){
    let suma = 0;
    for (let i = 0; i < usuarios.length; i++){
        for (let j = 0; j < planes.length; j++){
            if(usuarios[i].subscriptionPlan==planes[j].code){
                suma += planes[j].price;
            }
        }
    }
    return suma;
}
export default sumPrice;