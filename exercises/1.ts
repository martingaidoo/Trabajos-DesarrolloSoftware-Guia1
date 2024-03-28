
// Exporta una función que reciba la categoría y devuelva las noticias filtradas por una categoría específica
// La función debe ser exportada por default

//Importar los datos desde el archivo data.ts

import { data } from "../data";
const news = data.news;
function filtrarCategoria(category){
    return news.filter((item) => item.category === category)
}
export default filtrarCategoria;