import React from "react";
import Header from "../components/Header/Header";
import HomeBanner from "../components/Home/HomeBanner";
import HomeContent from "../components/Home/HomeContent";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
    return(
        <div>
            <Header />
            <HomeBanner />
            <HomeContent />
            <Footer />
        </div>
    )
}