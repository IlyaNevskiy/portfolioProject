import Image from 'mui-image'
import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import photo1 from '../image/1.jpg'
import photo2 from '../image/2.jpg'
import photo3 from '../image/3.jpg'
import photo4 from '../image/4.jpg'
import photo5 from '../image/5.jpg'
import photo6 from '../image/6.jpg'
import photo7 from '../image/7.jpg'
import photo8 from '../image/8.jpg'
import photo9 from '../image/9.jpg'
import photo10 from '../image/10.jpg'
import photo11 from '../image/11.jpg'
import photo12 from '../image/12.jpg'
import photo13 from '../image/13.jpg'
import photo14 from '../image/14.jpg'
import photo15 from '../image/15.jpg'
import photo16 from '../image/16.jpg'
import photo17 from '../image/17.jpg'
import photo18 from '../image/18.jpg'
import photo19 from '../image/19.jpg'
import photo20 from '../image/20.jpg'


const photoData=[
    photo1, photo2, photo3, photo4, photo5, photo6, photo7,photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18, photo19, photo20
]
let interval;
function HomePageLayout(){
    const [ indexPhoto, setIndexPhoto ]= React.useState(0);
    const [ photo, setPhoto ] = React.useState(photoData[0])
    

    React.useEffect(() => {
        setPhoto(photoData[indexPhoto]);
     }, [indexPhoto])

    const changePhotos = async () =>{
        return interval = setInterval(()=> {
            setIndexPhoto((prevState) => prevState===19 ? 0 : prevState+1)
           return  
        }, 200)
    }

    const stopChangePhotos = async () => {
        setIndexPhoto(0)
        return clearInterval(interval)
    }

    return(
        <Container maxWidth="100%" sx={{ height: '85vh', bgcolor: '#dcd6ca' }}>
        <Box height="100%" display="-webkit-box" justifyContent='center' color='secondary'>
        <Box display="flex" justifyContent='center' >
            <Box sx={{left: '50%', position: 'absolute', top: '50%', transform: 'translate(-50%,-50%)'}}>
             <div style={{ 'width':'calc(14rem + 14.4vw)', 'height': 'calc(22rem + 18.2vw)' }} onMouseEnter={changePhotos} onMouseLeave={stopChangePhotos}>
                <Image 
                src={photo}
                height='100%'
                width='100%'
                fit='cover'
                duration={3000}
                easing="cubic-bezier(0.7, 0, 0.6, 1)"
                />
              </div>
            </Box>
            <Box>
                <Typography variant='h1' fontSize='calc(2.3rem + 4.5vw)' fontWeight='600' sx={{left: '27%', position: 'absolute', top: '50%', transform: 'translate(-50%,-50%)', color: '#fff'}}>
                    Evelina
                </Typography>
                <Typography variant='h1' fontSize='calc(2.3rem + 4.5vw)' fontWeight='600' sx={{left: '72%', position: 'absolute', top: '50%', transform: 'translate(-50%,-50%)', color: '#fff'}}>
                    Nudga
                </Typography>
            </Box>
        </Box>
        </Box>
        </Container>
    )
}

export default HomePageLayout;