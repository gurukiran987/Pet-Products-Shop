import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import data from '../data'
import {getInitialData} from '../actions/initialData.action'

/**
* @author
* @function HomeScreen
**/



const HomeScreen = (props) => {

    const Productlist = useSelector(state => state.product)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getInitialData())
    }, []);

    const { products } = Productlist
    console.log(products)
    console.log('nice')
    

    return (
        <ul className="products">
            {
                products.map(product =>
                    <li style={{border: "2px solid black", borderRadius : "10px"}}>
                        <div className="product">
                        <Link to={'/products/' + product._id}>
                            <img className="product-image" src={"images/" + product.productPictures[0].img} alt="product6" />
                        </Link>
                        <div style={{color:"black"}}>______________________________________</div>
                            <div className="product-name">
                                <Link style={{ fontFamily:"Verdana-Italic" }} to={'/products/' + product._id}>{product.name}</Link>
                            </div>
                            <div style={{ fontFamily:"PingFangHK-Light"}} className="product-price">Price=Rs {product.price}.00</div>
                        </div>
                    </li>)}
        </ul>
    )

}

export default HomeScreen