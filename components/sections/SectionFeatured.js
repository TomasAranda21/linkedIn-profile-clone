import React from 'react'
import TitleSection from '../titles/TitleSection'
import ContainerCards from '../containers/ContainerCards'
import ContainerContentsCard from '../containers/ContainerContentsCard'
import CardFeatured from '../cards/CardFeatured'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { featured } from '../objJson/ObjJson'

function SamplePrevArrow({className, style, onClick }) {
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

const SectionFeatured = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: false,
    pauseOnHover: true,
    nextArrow: <SamplePrevArrow/>,
    prevArrow: <SamplePrevArrow/>,
 
    responsive: [
      {
        breakpoint: 725,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          dots: false,
          infinite: true,


        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: false,
          infinite: true,



        }
      }
    ],
  }


  return (
    <ContainerCards>
        <ContainerContentsCard>

            <TitleSection text='Destacado'/>

          <div className='mt-3'>
          <Slider {...settings}>

            {
              featured.map(feat => (
                <div key={feat.id}>
                  <CardFeatured type={feat.type}
                  text2={feat.text2}
                  text={feat.text}
                  img={feat.img}
                  comments={feat.comments}
                  likes={feat.likes}
                  />
                </div>
              ))
            }

          </Slider>
          
          </div>

        </ContainerContentsCard>
    </ContainerCards>
  )
}

export default SectionFeatured