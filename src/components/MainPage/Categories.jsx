import React from "react"
import { Link } from "react-router-dom"
const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Fashion",
      catePath: "MobilePage",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Electronics",
      catePath: "MobilePage",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Cars",
      catePath: "MobilePage",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Home & Garden",
      catePath: "MobilePage",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Gifts",
      catePath: "MobilePage",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Music",
      catePath: "MobilePage",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Health & Beauty",
      catePath: "MobilePage",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Pets",
      catePath: "MobilePage",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Baby Toys",
      catePath: "MobilePage",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Groceries",
      catePath: "MobilePage",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Books",
      catePath: "MobilePage",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
            <Link to={value.catePath}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </Link>
            </div>
            
          )
        })}
      </div>
    </>
  )
}

export default Categories




