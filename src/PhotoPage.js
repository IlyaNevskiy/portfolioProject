import React, { useState } from "react";
import { Skeleton } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { photoData } from "./image/photos";

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
