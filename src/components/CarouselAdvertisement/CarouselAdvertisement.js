import React, { useState } from 'react'
import Slider from 'react-slick'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import home1 from '../../assets/home-appliance1.jpg'
import home2 from '../../assets/home-appliance2.jpg'
import home3 from '../../assets/home-appliance3.jpg'
import './carouseladvertisement.css'

export default function CarouselAdvertisement() {
    const [imageIndex, setImageIndex] = useState(0)
    const images = [home1, home2, home3, home3]
    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <KeyboardArrowRightIcon />
            </div>
        )
    }
    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <KeyboardArrowLeftIcon />
            </div>
        )
    }

    const setting = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    }
    return (
        <div>
            <Slider {...setting}>
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className={
                            idx === imageIndex ? 'slide activeSlide' : 'slide'
                        }
                    >
                        <img src={img} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}
