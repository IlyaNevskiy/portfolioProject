import Image from "mui-image";
import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { photoData } from "../image/photos";

function HomePageLayout() {
  const [indexPhoto, setIndexPhoto] = React.useState(0);
  const [isHovering, setIsHovering] = React.useState(false);
  const changeInterval = 250;

  React.useEffect(() => {
    let animationFrameId;
    let timeoutId;

    const changePhotos = () => {
      setIndexPhoto((prevState) =>
        prevState === photoData.length - 1 ? 0 : prevState + 1
      );
      timeoutId = setTimeout(() => {
        animationFrameId = requestAnimationFrame(changePhotos);
      }, changeInterval);
    };

    if (isHovering) {
      animationFrameId = requestAnimationFrame(changePhotos);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
    };
  }, [isHovering]);

  return (
    <Container maxWidth="100%" sx={{ height: "100vh", bgcolor: "#dcd6ca" }}>
      <Box
        height="100%"
        display="flex"
        justifyContent="center"
        color="secondary"
      >
        <Box display="flex" justifyContent="center">
          <Box
            sx={{
              left: "50%",
              position: "absolute",
              top: "56%",
              transform: "translate(-50%,-50%)",
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div
              style={{
                width: "calc(14rem + 14.4vw)",
                height: "calc(22rem + 18.2vw)",
              }}
            >
              <Image
                src={photoData[indexPhoto]}
                height="100%"
                width="100%"
                fit="cover"
                duration={3000}
                easing="cubic-bezier(0.7, 0, 0.6, 1)"
              />
            </div>
          </Box>
          <Box>
            <Typography
              variant="h1"
              fontSize="calc(2.3rem + 4.5vw)"
              fontWeight="600"
              sx={{
                left: "27%",
                position: "absolute",
                top: "56%",
                transform: "translate(-50%,-50%)",
                color: "#fff",
              }}
            >
              Evelina
            </Typography>
            <Typography
              variant="h1"
              fontSize="calc(2.3rem + 4.5vw)"
              fontWeight="600"
              sx={{
                left: "72%",
                position: "absolute",
                top: "56%",
                transform: "translate(-50%,-50%)",
                color: "#fff",
              }}
            >
              Nudga
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default HomePageLayout;
