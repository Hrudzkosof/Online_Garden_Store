import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSingleProduct } from '../../requests/products'
import s from './SingleProductPage.module.css'
import { addProductToCartAction } from '../../store/cartReducer'
import Footer from '../../components/Footer/Footer'
import { Context } from '../../context'

export default function SingleProductPage() {

    const { openSecondModalWindow } = useContext(Context);

    let [count, setCount] = useState(1);

    const incrCount = () => setCount(++count);
    const decrCount = () => {
        if(count > 1) {
            setCount(--count)
        }
        };

    const {product_id} = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        getSingleProduct(product_id)(dispatch)
    }, [product_id])
    console.log(product_id)

    const singleProductState = useSelector(store => store.singleProduct)
    console.log(singleProductState)

    const { data = {} } = useSelector(store => store.singleProduct); 
    const { image, title, description, price, discont_price } = data; 

    console.log(image)

    

    const discountPercent = Math.round(((price - discont_price) / price) * 100);
  return (
    <div>
       <div className={s.layout_container}>    
         {
          singleProductState.status === 'loading' 
          ? 'Product info is loading' 
          : <div className={s.single_product_card}>
                
          <img src={`http://localhost:3333${image}`} alt={title} />
                
            <div className={s.product_page}>
                <div>
                    <h3>{title}</h3>
                </div>
                <div className={s.price_single_product}>
                    <p>${price}</p>
                    {discont_price ? <><p>${discont_price}</p> 
                    <span>{-discountPercent}%</span>
                        
                    </> : null}
                        
                </div>
                <div className={s.quantity_wrapper}>
                    <div onClick={decrCount}>-</div>
                    <p>{count}</p>
                    <div onClick={incrCount}>+</div>
                    <button 
                    onClick={() => {
                        dispatch(addProductToCartAction({ ...data, count })); 
                        openSecondModalWindow(); 
                    }}
                    >
                    Add to cart
                    </button>
                </div>
                <div className={s.product_description}>
                    <p>Desciption</p>
                    <p>{description}</p>
                    <p>Read more</p>
                </div>
                </div>
            </div>
        }
    </div>
    <Footer/>
</div>
  )
}
