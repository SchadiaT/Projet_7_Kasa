import React from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import HomeContent from "../components/Home/HomeContent";
import Footer from "../components/Footer/Footer";

export default function HomePage() {
    return(
        <div>
            <Header />
            <Banner />
            <HomeContent />
            <Footer />
        </div>
    )
}