import React from "react";
import Header from "../components/Header/Header";
import About from "../components/About/About";
import AboutBanner from "../components/About/AboutBanner";
import Footer from "../components/Footer/Footer";

export default function AboutPage() {
    return(
        <div>
            <Header />
            <AboutBanner />
            <About />
            <Footer />
        </div>
    )
}