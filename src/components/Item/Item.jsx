import React from "react"
import Categories from "../MainPage/Categories"
import "./Item.css"
import SliderItem from "./Slider"


const Item = () => {
  return (
    <>
      <section className='item'>
        <div className='container d_flex'>
          <Categories />
          <SliderItem />
        </div>
      </section>
    </>
  )
}

export default Item
