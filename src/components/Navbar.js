import React from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Menu,
  Link,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import { useNavigate } from "react-router-dom";
import logo from "../image/logo.png";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  "@media all": {
    minHeight: 75,
    paddingTop: 35,
    paddingBottom: 35,
    paddingLeft: 75,
    paddingRight: 75,
  },
  "@media (max-width: 600px)": {
    flexDirection: "column",
    paddingLeft: 20,
    paddingRight: 20,
  },
}));

const StyledButton = styled(Button)`
  color: black;
  transition: color 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955),
    background-color 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  min-width: 100px;
  &:hover {
    color: #f93700;
  }
  &:hover > span {
    letter-spacing: 0.07vw;
  }
  span {
    transition: letter-spacing 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  @media (max-width: 600px) {
    min-width: 60px;
    font-size: 0.8rem;
  }
`;

const StyledLogo = styled("img")(({ theme }) => ({
  height: "70px",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
  "@media (max-width: 600px)": {
    height: "50px",
  },
}));

function Navbar() {
  const [anchorContacts, setAnchorContacts] = React.useState(null);
  const isContactsMenuOpen = !!anchorContacts;
  const [anchorInfo, setAnchorInfo] = React.useState(null);
  const isInfoMenuOpen = !!anchorInfo;
  const [anchorMyWork, setAnchorMyWork] = React.useState(null);
  const isMyWorkMenuOpen = !!anchorMyWork;
  let navigate = useNavigate();

  const handleContactsMenuOpen = (event) => {
    setAnchorContacts(event.currentTarget);
  };

  const handleContactsMenuClose = () => {
    setAnchorContacts(null);
  };

  const handleInfoMenuOpen = (event) => {
    setAnchorInfo(event.currentTarget);
  };

  const handleInfoMenuClose = () => {
    setAnchorInfo(null);
  };

  const handleMyWorkMenuOpen = (event) => {
    setAnchorMyWork(event.currentTarget);
  };

  const handleMyWorkMenuClose = () => {
    setAnchorMyWork(null);
  };

  const renderContactsMenu = (
    <Menu
      anchorEl={anchorContacts}
      sx={{ mt: "5px" }}
      id="ContactsMenu"
      keepMounted
      open={isContactsMenuOpen}
      onClose={handleContactsMenuClose}
    >
      <Grid container rowSpacing="10px" direction="column" sx={{ p: "20px" }}>
        <Grid item display="flex" alignItems="center">
          <TelegramIcon fontSize="large" />
          <Typography fontSize="20px" sx={{ color: "black", ml: "2px" }}>
            @evelinanudga
          </Typography>
        </Grid>
        <Grid item display="flex" alignItems="center">
          <InstagramIcon fontSize="large" />
          <Link
            fontSize="20px"
            href="https://instagram.com/evelinanudga?igshid=YmMyMTA2M2Y="
            underline="none"
            sx={{ color: "black", ml: "2px" }}
          >
            @evelinanudga
          </Link>
        </Grid>
        <Grid item display="flex" alignItems="center">
          <AlternateEmailIcon fontSize="large" />
          <Link
            fontSize="20px"
            href="mailto:evelinanudga155@gmail.com"
            underline="none"
            sx={{ color: "black", ml: "2px" }}
          >
            evelinanudga155@gmail.com
          </Link>
        </Grid>
        <Grid item display="flex" alignItems="center">
          <LocalPhoneIcon fontSize="large" />
          <Link
            fontSize="20px"
            href="tel:+380684389615"
            underline="none"
            sx={{ color: "black", ml: "2px" }}
          >
            +380684389615
          </Link>
        </Grid>
      </Grid>
    </Menu>
  );

  const renderInfoMenu = (
    <Menu
      anchorEl={anchorInfo}
      sx={{ mt: "5px" }}
      id="InfoMenu"
      keepMounted
      open={isInfoMenuOpen}
      onClose={handleInfoMenuClose}
    >
      <div style={{ padding: "20px" }}>
        <Typography variant="subtitle1">
          Всім привіт 🙋‍♀️ <br />
          Мене звати Нудьга Евеліна Сергіївна <br />
          Вік: 22 роки <br />
          Зріст 158 см <br />
          Дуууже я мініатюрна. <br />
          Карʼєру ведучої почала в 2021 році,буда однією та єдиною ведучою ютуб
          каналу про крипту «Топ токенс» (до цього цей же продакшен та ця ж
          тематика але англійською) <br />
          <br />
          Потім почалась війна і вже у вересні 2022 року я влаштувалась ведучою
          лото (турецький тв канал). Пропрацювала там 2 місяці,дуже вимотував
          графік <br />
          З жовтня 2022 - по травень 2024 працювала АКТОРКОЮ на дитячому
          розважальному ютуб каналі - «Окі Токі» <br />
          <br />
          Також люблю працювати МОДЕЛЛЮ🌸
          <br />
          <br />
          А взагалі я СПІВАЮ,ТАНЦЮЮ та все все все що захочу 💋
          <br />
          Пишіть, буду рада співпрацювати!
        </Typography>
      </div>
    </Menu>
  );

  const renderMyWorkMenu = (
    <Menu
      anchorEl={anchorMyWork}
      sx={{ mt: "5px" }}
      id="MyWorkMenu"
      keepMounted
      open={isMyWorkMenuOpen}
      onClose={handleMyWorkMenuClose}
    >
      <Grid container rowSpacing="10px" direction="column" sx={{ p: "20px" }}>
        <Grid item display="flex" alignItems="center">
          <YouTubeIcon fontSize="large" />
          <Link
            fontSize="20px"
            href="https://youtu.be/TCpmLjZfap0?si=P3vHMTJ0euXb0uZh"
            underline="hover"
            sx={{ color: "black", ml: "2px" }}
          >
            Ведуча ютуб каналу про крипту «Топ Токенс»
          </Link>
        </Grid>
        <Grid item display="flex" alignItems="center">
          <YouTubeIcon fontSize="large" />
          <Link
            fontSize="20px"
            href="https://youtu.be/JBUou_S5btI"
            underline="hover"
            sx={{ color: "black", ml: "2px" }}
          >
            Ведуча ютуб каналу про крипту «San crypto news”
          </Link>
        </Grid>
        <Grid item display="flex" alignItems="center">
          <YouTubeIcon fontSize="large" />
          <Link
            fontSize="20px"
            href="https://youtu.be/1R3Mr1euZ2w?si=T0D3av66_L5yOCbM"
            underline="hover"
            sx={{ color: "black", ml: "2px" }}
          >
            Акторка продакшену на ютуб каналі «Oki Toki”
          </Link>
        </Grid>
        <Grid item display="flex" alignItems="center">
          <InstagramIcon fontSize="large" />
          <Link
            fontSize="20px"
            href="https://www.instagram.com/reel/C9eXGFKNlb3/?igsh=azZrdHg5eHdid2p1"
            underline="hover"
            sx={{ color: "black", ml: "2px" }}
          >
            Модель для українського бренду косметики
          </Link>
        </Grid>
        <Grid item display="flex" alignItems="center">
          <TheaterComedyIcon fontSize="large" />
          <Typography fontSize="20px" sx={{ color: "black", ml: "2px" }}>
            Головна роль у спектаклі «Недоросль» Д.І.Фонвізін
            <br />
            Роль - пані Простакова
          </Typography>
        </Grid>
      </Grid>
    </Menu>
  );

  return (
    <>
      <AppBar position="static" color="secondary">
        <StyledToolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid
              item
              container
              xs={3}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <StyledButton
                  sx={{ textTransform: "none", flexDirection: "column" }}
                  onClick={handleInfoMenuOpen}
                >
                  <Typography variatn="h6" fontSize="calc(1rem + 1vw)">
                    Info
                  </Typography>
                  <Typography
                    variatn="subtitle1"
                    component="span"
                    fontSize="calc(0.2rem + 0.35vw)"
                    fontWeight="800"
                  >
                    ABOUT ME
                  </Typography>
                </StyledButton>
              </Grid>

              <Grid item>
                <StyledButton
                  sx={{ textTransform: "none", flexDirection: "column" }}
                  onClick={handleMyWorkMenuOpen}
                >
                  <Typography variatn="h6" fontSize="calc(1rem + 1vw)">
                    MyWork
                  </Typography>
                </StyledButton>
              </Grid>
            </Grid>

            <Grid
              item
              xs={3}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              onClick={() => navigate("/")}
              sx={{
                textDecoration: "none",
                color: "inherit",
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                },
              }}
            >
              <StyledLogo src={logo} alt="Фото" />
              <Typography
                variant="h6"
                fontSize="calc(1rem + 0.2vw)"
                align="center"
              >
                EVELINA NUDGA
              </Typography>
            </Grid>

            <Grid
              item
              container
              xs={3}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <StyledButton
                  sx={{ textTransform: "none", flexDirection: "column" }}
                  onClick={() => navigate("/photo")}
                >
                  <Typography variatn="h6" fontSize="calc(1rem + 1vw)">
                    Photo
                  </Typography>
                </StyledButton>
              </Grid>
              <Grid item>
                <StyledButton
                  sx={{ textTransform: "none", flexDirection: "column" }}
                  onClick={handleContactsMenuOpen}
                >
                  <Typography variatn="h6" fontSize="calc(1rem + 1vw)">
                    Contact me
                  </Typography>
                  <Typography
                    variatn="subtitle1"
                    component="span"
                    fontSize="calc(0.2rem + 0.35vw)"
                    fontWeight="800"
                  >
                    HOW TO FIND ME
                  </Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </StyledToolbar>
        {renderContactsMenu}
        {renderInfoMenu}
        {renderMyWorkMenu}
      </AppBar>
    </>
  );
}

export default Navbar;
