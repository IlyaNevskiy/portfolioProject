import photo1 from './image/1.jpg'
import photo2 from './image/2.jpg'
import photo3 from './image/3.jpg'
import photo4 from './image/4.jpg'
import photo5 from './image/5.jpg'
import photo6 from './image/6.jpg'
import photo7 from './image/7.jpg'
import photo8 from './image/8.jpg'
import photo9 from './image/9.jpg'
import photo10 from './image/10.jpg'
import photo11 from './image/11.jpg'
import photo12 from './image/12.jpg'
import photo13 from './image/13.jpg'
import photo14 from './image/14.jpg'
import photo15 from './image/15.jpg'
import photo16 from './image/16.jpg'
import photo17 from './image/17.jpg'
import photo18 from './image/18.jpg'
import photo19 from './image/19.jpg'
import photo20 from './image/20.jpg'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const photoData=[
    photo1, photo2, photo3, photo4, photo5, photo6, photo7,photo8, photo9, photo10, photo11, photo12, photo13, photo14, photo15, photo16, photo17, photo18, photo19, photo20
]

function PhotoPage(){
    console.log(window.screen.width)
    return (
    <ImageList variant="masonry" cols={window.screen.width <=800 ? 3 : 5} gap={7} sx={{ bgcolor: '#dcd6ca', m: '0'}}>
      {photoData.map((item) => (
        <ImageListItem key={item}>
          <img
            src={`${item}`}
            loading="lazy"
            alt='Фото'
          />
        </ImageListItem>
      ))}
    </ImageList>
    )
}

export default PhotoPage