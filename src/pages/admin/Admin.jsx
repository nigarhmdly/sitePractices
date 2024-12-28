import { useFormik } from 'formik';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBasketProductsThunk, deleteProductsThunk, deleteWishProductsThunk, getProductsThunk, postProductsThunk } from '../../redux/reducers/ProductSlice';
import styles from './Admin.module.scss'
import { MdDeleteForever } from "react-icons/md";


const AdminPanelSection = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsThunk())     
    })
    
    const products = useSelector((state) => state.products.products)
    


    const formik = useFormik({
        initialValues: {
          thumbnail: '',
          title: '',
          price: '',
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
          dispatch(postProductsThunk(values))
          
          
        },
      });


    const delItem= (id) =>{
        dispatch(deleteProductsThunk(id))
        dispatch(deleteBasketProductsThunk(id))
        dispatch(deleteWishProductsThunk(id))
    }
  return (
    <div className={styles.container}>
        <h1>Admin Panel</h1>
        <form onSubmit={formik.handleSubmit} className={styles.myForm}> 
       <label htmlFor="thumbnail">Image</label>
       <input
         id="thumbnail"
         name="thumbnail"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.thumbnail}
       />
       <label htmlFor="title">Title</label>
       <input
         id="title"
         name="title"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.title}
       />
       <label htmlFor="price">Price</label>
       <input
         id="price"
         name="price"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.price}
       />
       <button type="submit">Submit</button>
     </form>


    <table className={styles.myTable}>
        <tr>
            <th>image</th>
            <th>title</th>
            <th>price</th>
            <th>Delete</th>
        </tr>
        {products && products.map(item=> {
            return <tr>
                <td><img src={item.thumbnail} alt="" /></td>
                <td><p>{item.title}</p></td>
                <td><span>${item.price}</span></td>
                <td><button onClick={() => delItem(item.id)}><MdDeleteForever /></button></td>
            </tr>
        })}
    </table>
    </div>
  )
}

export default AdminPanelSection