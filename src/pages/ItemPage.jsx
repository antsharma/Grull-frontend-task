import React from "react"
import Categories from "../components/MainPage/Categories"
import Item from "../components/MainPage/Item"
//import FlashDeals from "../components/flashDeals/FlashDeals"
// import TopCate from "../components/top/TopCate"
// import Discount from "../components/discount/Discount"
//import Shop from "../components/shops/Shop"
import Wrapper from "../components/wrapper/Wrapper"

const ItemPage = ({ productItems, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Item CartItem={CartItem} /> 
      {/* <FlashDeals productItems={productItems} addToCart={addToCart} /> */}
      {/* <TopCate /> */}
      {/* <Discount /> */}
      <Categories />
      {/* <Shop shopItems={shopItems} addToCart={addToCart} /> */}
      <Wrapper />
    </>
  )
}

export default ItemPage
