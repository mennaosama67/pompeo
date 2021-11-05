import React from 'react'
import Header from './../Components/Header/Header';
import ProductCategories from '../Components/ProductCategories/ProductCategories';
import Gallary from '../Components/Gallary/Gallary';
import Carousel from '../Components/Carousel/Carousel';
import LatestNews from './../Components/LatestNews/LatestNews';
import Footer from '../Components/Footer/Footer';
function Home() {
    const parag1='Unique & modern pottery made by our master in porcelain & stones'
    return (
        <div>
            <Header parag1={parag1}/>
            <ProductCategories/>
            <Gallary/>
            <Carousel/>
           <LatestNews/>
           <Footer/>
        </div>
    )
}

export default Home
