import React from 'react'
import SecondaryHeader from '../Components/Header/SecondaryHeader'

import LatestNews from '../Components/LatestNews/LatestNews'
import ShopList from '../Components/ProductData/ShopList'
function Shop() {
    return (
        <div>
            <SecondaryHeader title="Shop" bgImg="shop.jpg"/>
           <ShopList/> 
           <LatestNews/>
        </div>
    )
}

export default Shop
