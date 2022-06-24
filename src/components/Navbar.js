
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Button, Grid, Menu, Link } from '@mui/material';
import React from 'react';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import { useNavigate } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    '@media all': {
      minHeight: 75,
      paddingTop: 35,
      paddingBottom: 35,
      paddingLeft: 75,
      paddingRight: 75,
    },
  }));

  const StyledButton = styled(Button)`
  color: black;
  transition: color .5s cubic-bezier(.455,.03,.515,.955), background-color .5s cubic-bezier(.455,.03,.515,.955);
  min-width: 100px;
  &:hover {
    color: #f93700;
  }
  &:hover > span {
    letter-spacing: .07vw;
  }
  span {
    transition: letter-spacing .5s cubic-bezier(.25,.46,.45,.94);
  }
`;


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
        sx={{ mt: '5px'}}
        id="ContactsMenu"
        keepMounted
        open={isContactsMenuOpen}
        onClose={handleContactsMenuClose}
      >
        <Grid container rowSpacing='10px' direction='column' sx={{ p: '20px' }}>
            <Grid item display='flex' alignItems='center'>
                <TelegramIcon  fontSize='large' />
                <Typography fontSize='20px' sx={{ color: 'black', ml: '2px'  }}>
                    @evelinanudga
                </Typography>
            </Grid>
            <Grid item display='flex' alignItems='center'>
                <InstagramIcon fontSize='large' />
                <Link fontSize='20px' href="https://instagram.com/evelinanudga?igshid=YmMyMTA2M2Y=" underline="none" sx={{ color: 'black', ml: '2px'  }}>
                    @evelinanudga
                </Link>
            </Grid>
            <Grid item display='flex' alignItems='center'>
                <AlternateEmailIcon fontSize='large' />
                <Link  fontSize='20px' href="mailto:evelinanudga155@gmail.com" underline="none" sx={{ color: 'black', ml: '2px'  }}>
                    evelinanudga155@gmail.com
                </Link>
            </Grid>
            <Grid item display='flex' alignItems='center'>
                <LocalPhoneIcon fontSize='large' />
                <Link fontSize='20px' href="tel:+380684389615" underline="none" sx={{ color: 'black', ml: '2px'  }}>
                    +380684389615
                </Link>
            </Grid>
        </Grid>
      </Menu>
      );

      const renderInfoMenu = (
        <Menu
        anchorEl={anchorInfo}
        sx={{ mt: '5px'}}
        id="InfoMenu"
        keepMounted
        open={isInfoMenuOpen}
        onClose={handleInfoMenuClose}
      >
        <div style={{padding: '20px'}}>
            <Typography variant='subtitle1'>
            Всім привіт<br/>
            Мене звати Евеліна Нудьга - я акторка.<br/> 
            Зріст 158 см, вага 41 кг.<br/>
            Народилася у місті Марії - Маріуполі, у 2002 році.<br/> 
            У 2018 вчилася у театральній школі «Театроманія» (Маріуполь)<br/>
            Проходила багато онлайн курсів (ютуб канали, тощо)<br/> 
            У 2020 вступила до вишу НАУ на спеціальність «авіалогіст».<br/>
            У 2021 пройшла кастинг на  англомовний канал про крипту, де була головною ведучою.<br/>
            У тому ж році відкрився другий канал  про крипту, але вже  на російській мові.<br/> 
            У лютому 2022 року почала працювати в проекті акторкою, але війна вирішила все за нас...<br/>
            <br />
            Це була моя міні автобіографія.<br /> 
            Все буде Україна
            </Typography>
        </div>
      </Menu>
      );

      const renderMyWorkMenu = (
        <Menu
        anchorEl={anchorMyWork}
        sx={{ mt: '5px'}}
        id="MyWorkMenu"
        keepMounted
        open={isMyWorkMenuOpen}
        onClose={handleMyWorkMenuClose}
      >
        <Grid container rowSpacing='10px' direction='column' sx={{ p: '20px' }}>
            <Grid item display='flex' alignItems='center'>
                <YouTubeIcon fontSize='large' />
                <Link fontSize='20px' href="https://youtu.be/btO87uO41h0" underline="hover" sx={{ color: 'black', ml: '2px'  }}>
                    Ведуча ютуб каналу про крипту «Топ Токенс»
                </Link>
            </Grid>
            <Grid item display='flex' alignItems='center'>
                <YouTubeIcon fontSize='large' />
                <Link fontSize='20px' href="https://youtu.be/JBUou_S5btI" underline="hover" sx={{ color: 'black', ml: '2px'  }}>
                    Ведуча ютуб каналу про крипту «San crypto news”
                </Link>
            </Grid>
            <Grid item display='flex' alignItems='center'>
                <YouTubeIcon fontSize='large' />
                <Link fontSize='20px' href="https://youtu.be/4frJSrx0NG0" underline="hover" sx={{ color: 'black', ml: '2px'  }}>
                    Акторка в ютуб проекті 
                </Link>
            </Grid>
            <Grid item display='flex' alignItems='center'>
                <TheaterComedyIcon fontSize='large' />
                <Typography fontSize='20px' sx={{ color: 'black', ml: '2px'  }}>
                Головна роль у спектаклі «Недоросль» Д.І.Фонвізін<br />
                Роль - пані Простакова
                </Typography>
            </Grid>
        </Grid>
      </Menu>
      );

  return (
    <>
        <AppBar position="static" color='secondary'>
        <StyledToolbar>
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Grid item container xs={3} justifyContent='space-between' alignItems='center'>
                    <Grid item>
                        <StyledButton sx={{ textTransform: 'none',  flexDirection: 'column' }} onClick={handleInfoMenuOpen}>
                            <Typography variatn='h6' fontSize="calc(1rem + 1vw)">
                                Info
                            </Typography>
                            <Typography variatn='subtitle1' component='span' fontSize="calc(0.2rem + 0.35vw)" fontWeight='800'>
                                ABOUT ME
                            </Typography>
                        </StyledButton>
                    </Grid>
                    <Grid item>
                        <StyledButton sx={{ textTransform: 'none', flexDirection: 'column' }} onClick={handleMyWorkMenuOpen}>
                            <Typography variatn='h6' fontSize="calc(1rem + 1vw)">
                                MyWork
                            </Typography>
                        </StyledButton>
                    </Grid>
                </Grid>
                <Grid item container xs={3} justifyContent='space-between' alignItems='center'>
                    <Grid item>
                        <StyledButton sx={{ textTransform: 'none',  flexDirection: 'column' }} onClick={() => navigate('/photo')}>
                            <Typography variatn='h6' fontSize="calc(1rem + 1vw)">
                                Photo
                            </Typography>
                        </StyledButton>
                    </Grid>
                    <Grid item>
                        <StyledButton sx={{ textTransform: 'none', flexDirection: 'column' }} onClick={handleContactsMenuOpen}>
                            <Typography variatn='h6' fontSize="calc(1rem + 1vw)">
                                Contact me
                            </Typography>
                            <Typography variatn='subtitle1' component='span' fontSize="calc(0.2rem + 0.35vw)" fontWeight='800'>
                                FOR ANY COLLABORATIONS
                            </Typography>
                        </StyledButton>
                    </Grid>
                </Grid>
            </Grid>
        </StyledToolbar>
      </AppBar>
      {renderContactsMenu}
      {renderInfoMenu}
      {renderMyWorkMenu}
    </>
  );
}

export default Navbar;
