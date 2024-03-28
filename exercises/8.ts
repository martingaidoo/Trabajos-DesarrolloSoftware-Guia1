
// Exporta una función que devuelva ordenadas a las noticias desde la mas actual hasta la mas antigua
// La función debe ser exportada por default

//Importar los datos desde el archivo data.ts
import { data } from "../data";

const news = data.news;

const sortNews = () => {
    return news.sort((a, b) => {
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });
};

export default sortNews;