import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBasketProductsThunk, getBasketProductsThunk } from '../../redux/reducers/ProductSlice'
import styles from './Cart.module.scss'
import { MdDeleteForever } from "react-icons/md";

const BasketSection = () => {
    
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getBasketProductsThunk())
  })

  const products = useSelector((state) => state.products.products) || []

  const delItem = (id) =>{
    dispatch(deleteBasketProductsThunk(id))
  }
  return (
    <div className={styles.container}>
        <h1>Basket</h1>
        <div className={styles.cards}>
        {products && products.map(item => {
          return <div className={styles.card}>
            <img src={item.thumbnail} alt="" />
            <h4>{item.title}</h4>
            <p>${item.price}</p>
            <span>say:{item.count}</span>
            <button onClick={() => delItem(item.id)}><MdDeleteForever /></button>
            
          </div>
        })}
      </div>
    </div>
  )
}

export default BasketSection