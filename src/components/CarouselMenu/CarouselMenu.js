import React from 'react'

// swiper
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import './CarouselMenu.css'
import Air from '../../assets/Air-Purifier.png'
import Blender from '../../assets/Blender-Juicer-1.png'
import Coffee from '../../assets/Coffee-Maker.png'
import Cookware from '../../assets/Cookware-1.png'

export default function CarouselMenu() {
    return (
        <div className="carouselMenu">
            <Swiper slidesPerView={5} freeMode={true} spaceBetween={30} className="mySwiper">
                <SwiperSlide className="swiperSlide">
                    <img src={Air} />
                    <span>Air Conditioner</span>
                    <div className="sale">Sale</div>
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                    <img src={Blender} />
                    <span>Blender juicer</span>
                    <div className="sale">Sale</div>
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                    <img src={Coffee} />
                    <span>Coffee Maker</span>
                    <div className="sale">Sale</div>
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                    <img src={Cookware} />
                    <span>Cookware</span>
                    <div className="sale">Sale</div>
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                    <img src={Air} />
                    <span>Air Conditioner</span>
                    <div className="sale">Sale</div>
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                    <img src={Coffee} />
                    <span>Coffee Maker</span>
                    <div className="sale">Sale</div>
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                    <img src={Coffee} />
                    <span>Coffee Maker</span>
                    <div className="sale">Sale</div>
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                    <img src={Coffee} />
                    <span>Coffee Maker</span>
                    <div className="sale">Sale</div>
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                    <img src={Coffee} />
                    <span>Coffee Maker</span>
                    <div className="sale">Sale</div>
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                    <img src={Coffee} />
                    <span>Coffee Maker</span>
                    <div className="sale">Sale</div>
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                    <img src={Coffee} />
                    <span>Coffee Maker</span>
                    <div className="sale">Sale</div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
