
// Exporta una función que reciba una fecha y devuelva la primera que tenga una fecha igual a la recibida
// La función debe ser exportada por default

//Importar los datos desde el archivo data.ts
import { data } from "../data";

const news = data.news;

const findNews = (date: string) => {
    return news.find((n) => {
        return n.publishedAt === date;
    });
};
export default findNews;
//console.log(findNews("2024-03-19T18:13:48Z")); // { title: 'Noticia 1', publishedAt: '2021-01-01T00:00:00Z' }