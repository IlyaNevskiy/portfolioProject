import photo1 from "./image/1.jpg";
import photo2 from "./image/2.jpg";
import photo3 from "./image/3.jpg";
import photo4 from "./image/4.jpg";
import photo5 from "./image/5.jpg";
import photo6 from "./image/6.jpg";
import photo7 from "./image/7.jpg";
import photo8 from "./image/8.jpg";
import photo9 from "./image/9.jpg";
import photo10 from "./image/10.jpg";
import photo11 from "./image/11.jpg";
import photo12 from "./image/12.jpg";
import photo13 from "./image/13.jpg";
import photo14 from "./image/14.jpg";
import photo15 from "./image/15.jpg";
import photo16 from "./image/16.jpg";
import photo17 from "./image/17.jpg";
import photo18 from "./image/18.jpg";
import photo19 from "./image/19.jpg";
import photo20 from "./image/20.jpg";
import photo21 from "./image/21.jpg";
import photo22 from "./image/22.jpg";
import photo23 from "./image/23.jpg";
import photo24 from "./image/24.jpg";
import photo25 from "./image/25.jpg";
import photo26 from "./image/26.jpg";
import photo27 from "./image/27.jpg";
import photo28 from "./image/28.jpg";

import React, { useState } from "react";
import { Skeleton } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const photoData = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
  photo18,
  photo19,
  photo20,
  photo21,
  photo22,
  photo23,
  photo24,
  photo25,
  photo26,
  photo27,
  photo28,
];

function PhotoPage() {
  return (
    <ImageList
      variant="masonry"
      cols={window.innerWidth <= 800 ? 2 : 4}
      gap={7}
      sx={{ bgcolor: "#dcd6ca", m: "0" }}
    >
      {photoData.map((item) => (
        <PhotoItem key={item} src={item} />
      ))}
    </ImageList>
  );
}

function PhotoItem({ src }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <ImageListItem>
      {!loaded && <Skeleton variant="rectangular" width="100%" height={200} />}
      <img
        src={src}
        alt="Фото"
        style={{
          display: loaded ? "block" : "none",
          width: "100%",
          height: "auto",
          filter: loaded ? "none" : "blur(10px)",
          transition: "filter 0.5s ease",
        }}
        onLoad={() => {
          console.log("loaded");
          setLoaded(true);
        }}
      />
    </ImageListItem>
  );
}

export default PhotoPage;
