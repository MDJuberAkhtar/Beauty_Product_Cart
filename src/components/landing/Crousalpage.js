import React, {Fragment} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import aesopP from '../../images/AesopP.jpg';
import aesopB from '../../images/AesopB.jpg';
import aesopF from '../../images/AesopF.jpg';
import aesopM from '../../images/AesopM.jpg';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const Crousalpage = () => {
  return (
    <Fragment>
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div className='imagecrosal'>
      <h3>Accompany with</h3>
      <p>Refreshingly aromatic, Geranium Leaf body
      Balm replenishes moisture and soften skin.
      Follow daily with Deodorant and a bracing
      gargle of Mouthwash.To finish,spray Tacit on
      wrists and collarbone and relish enduring
      notes of crisp green and citrus</p>
      </div>
      <div><img src={aesopP} alt='AesopP' className='imagecrosal' /></div>
      <div><img src={aesopB} alt='AesopB' className='imagecrosal'/></div>
      <div><img src={aesopF} alt='AesopF' className='imagecrosal'/></div>
      <div><img src={aesopM} alt='AesopM' className='imagecrosal'/></div>
    </Carousel>
    <hr/>
    </Fragment>
  );
}

export default Crousalpage;
