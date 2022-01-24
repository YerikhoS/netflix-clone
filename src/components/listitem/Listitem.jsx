import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from "@material-ui/icons";
import "./listitem.scss";
import { useState } from "react";

export default function Listitem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div className="listitem" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}>
      <img src="https://statik.tempo.co/data/2020/11/16/id_980965/980965_720.jpg" alt="" />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 35 mins</span>
              <span className="limit">+17</span>
              <span>2021</span>
            </div>
            <div className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos modi ducimus est hic sint laboriosam ipsam libero nisi veniam exercitationem?</div>
            <div className="genre">Thriller</div>
          </div>
        </>
      )}
    </div>
  );
}
