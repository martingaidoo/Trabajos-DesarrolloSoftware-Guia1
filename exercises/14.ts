// Exportar una funcion que reciba el nombre del "origen" de la noticia , por ejemplo ('cnn') y devuelva la última noticia publicada desde ese origen
import { data } from "../data";
const news = data.news;

const lastNews = (origin: string) => {
    let ultimo = {
        title: "",
        description:
          "",
        content:
          "",
        url: "",
        image:"",
        publishedAt: "1000-03-20T08:45:00Z",
        source: { name: "", url: "" },
        category: "",
        stars: 4,
        emailUser: "",
      };
    news.map((n) => {
        if(n.source.name === origin){
            if (new Date(n.publishedAt).getTime() > new Date(ultimo.publishedAt).getTime()){
                ultimo = n;
            }
        }
    });
    return ultimo;
}
export default lastNews;