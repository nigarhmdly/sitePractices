import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk, postBasketProductsThunk, postWishProductsThunk } from '../../redux/reducers/ProductSlice'
import styles from './Products.module.scss'
import { RiHeartAdd2Line } from "react-icons/ri";
import { MdOutlineAddShoppingCart } from "react-icons/md";


const Products = () => {

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getProductsThunk())
  })

  const products = useSelector((state) => state.products.products) || []
  const [currentPages,setCurrentPages] = useState(1)
  const [productsPerPage] = useState(8)


  const lastIndexProducts = currentPages* productsPerPage
  const firstIndexProducts = lastIndexProducts- productsPerPage

  const currentProducts = products.slice(firstIndexProducts,lastIndexProducts)

  let pages=[]

  for(let i=1;i<= Math.ceil(products.length/productsPerPage);i++){
    pages.push(i)
  }


const sebetAt = (item) => {
  dispatch(postBasketProductsThunk(item))
  
}
const favoriAt = (item) => [
  dispatch(postWishProductsThunk(item))
]

  return (

     <div className={styles.container}>

<div className={styles.buttons}>
  {pages && pages.map(item => {
    return <button onClick={() => setCurrentPages(item)}>{item}</button>
  })}
</div>

<div className={styles.cards}>
  {currentProducts && currentProducts.map(item => {
    return <div className={styles.card}>
      <img src={item.thumbnail} alt="" />
      <h4>{item.title}</h4>
      <p>${item.price}</p>
      <div className={styles.butts}>
        <button onClick={() => sebetAt(item)}><MdOutlineAddShoppingCart /></button>
        <button onClick={() => favoriAt(item)}><RiHeartAdd2Line /></button>
      </div>
    </div>
  })}
</div>
  
</div>

    
  )
}

export default Products