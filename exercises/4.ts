
// Exporta una función que devuelva true si es que existe al menos una noticia de 5 estrellas
// La función debe ser exportada por default

//Importar los datos desde el archivo data.ts
import { data } from "../data";

const news = data.news;

export default function hasFiveStarNews(){
    for (let i = 0; i < news.length; i++){
        if (news[i].stars == 5) {
            return true;
        }
        else {
            return false;
        }
    }
};
//console.log(hasFiveStarNews());
