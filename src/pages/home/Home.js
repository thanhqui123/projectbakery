import React, { useState } from 'react'
import CarouselAdvertisement from '../../components/CarouselAdvertisement/CarouselAdvertisement'
import CarouselMenu from '../../components/CarouselMenu/CarouselMenu'
import CartProductAll from '../../components/CartProductAll/CartProductAll'
import ScrollRight from '../../components/ScrollRight/ScrollRight'
import './home.css'
//MUI
import Grid from '@mui/material/Unstable_Grid2'
import AdvertisementBox from '../../components/AdvertisementBox/AdvertisementBox'

//IMG

export default function Home() {
    const [openModal, setOpenModal] = useState(true)

    return (
        <div className="home">
            <Grid container spacing={2}>
                <Grid xs={9} md={9}>
                    <div className="CarouselAdvertisement">
                        <CarouselAdvertisement />
                    </div>
                    <div className="CarouselMenu">
                        <CarouselMenu />
                    </div>
                    <div className="CartProductAll">
                        <CartProductAll />
                    </div>
                </Grid>
                <Grid xs={3} md={3}>
                    <div className="ScrollRight">
                        <ScrollRight />
                    </div>
                </Grid>
            </Grid>
            {openModal && (
                <AdvertisementBox
                    closeModal={setOpenModal}
                    className="boxAdvertisement"
                />
            )}
        </div>
    )
}
