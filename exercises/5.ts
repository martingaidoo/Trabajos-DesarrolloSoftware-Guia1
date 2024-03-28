
// Exporta una función que devuelva true si es que existe al menos un plan de suscripciones con coste menor a dos dolares
// La función debe ser exportada por default

//Importar los datos desde el archivo data.ts
import { data } from "../data";

const planes = data.plans;

const hasPlan2Dollars = () => {
    for (let i = 0; i < planes.length; i ++){
        if (planes[i].price < 2) {
            return true;
        }
        else{
            return false;
        }
    }

};
export default hasPlan2Dollars;
//console.log(hasPlan2Dollars());