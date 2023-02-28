import React from "react";
import Banner from "../Banner/Banner";
import BannerImg from "../../assets/images/Banner.png"

export default function HomeBanner() {
    return(
        <Banner
            title='Chez vous, partout et ailleurs'
            src={BannerImg}
        />
    )
}