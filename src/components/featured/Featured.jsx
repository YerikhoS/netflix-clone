import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src="https://thumb.suara.com/nGu2WeEhfwDsrpKA3fHunDibsJ8=/653x366/https://media.suara.com/pictures/653x366/2021/12/01/14253-film-the-whole-truth.jpg" alt="" />

      <div className="info">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu8auf5i1LSsqI_Q6QR8aAsss69HCZ1a54xw&usqp=CAU" alt="" />
        <span className="desc">
          The Whole Truth adalah film drama thriller Amerika Serikat produksi tahun 2016 yang disutradarai oleh Courtney Hunt, berdasarkan skenario yang ditulis oleh Nicholas Kazan. Beberapa bintang yang bermain dalam film ini antara lain
          Keanu Reeves, Gabriel Basso, Gugu Mbatha-Raw, Renée Zellweger, dan Jim Belushi.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
