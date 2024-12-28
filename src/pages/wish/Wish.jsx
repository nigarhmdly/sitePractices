import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteWishProductsThunk,  getWishProductsThunk } from '../../redux/reducers/ProductSlice'
import styles from './Wish.module.scss'
import { MdDeleteForever } from "react-icons/md";

const Wish = () => {
    
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getWishProductsThunk())
  })

  const products = useSelector((state) => state.products.products) || []

  const delItem =  (id) =>{
    dispatch(deleteWishProductsThunk(id))
  }
  return (
    <div className={styles.container}>
        <h1>Wish</h1>
        <div className={styles.cards}>
        {products && products.map(item => {
          return <div className={styles.card}>
            <img src={item.thumbnail} alt="" />
            <h4>{item.title}</h4>
            <p>${item.price}</p>
            <button onClick={() => delItem(item.id)}><MdDeleteForever /></button>
            
          </div>
        })}
      </div>
    </div>
  )
}

export default Wish