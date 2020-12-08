import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import data from '../data'
import {getInitialData, detailsProduct} from '../actions/initialData.action'

/**
* @author
* @function ProductScreen
**/

const ProductScreen = (props) => {
    
    const [qty,SetQty] = useState(1)
    const productDetails = useSelector(state => state.productDetails)
    //const { product , loading , error } = productDetails
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id))
    }, []);

    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }

    const { product , loading , error } = productDetails
    console.log(product)
    let var1="/images/"
    if(product !== undefined)
    {
        if(product.productPictures !== undefined){
            console.log('hmm')
            console.log(product)
            var1 += product.productPictures[0].img
        }
        
    }
    console.log('pop')

    
    //console.log(product) //{_id: "5fc35cdca4f54108705867ab", name: "pet_food", slug: "pet_food", price: 999, description: "Food for ur pet", …}
    //console.log('nice100')      

    //const product = data.products.find( x => x._id === props.match.params.id)

    return (
        <div >
            <div className="back-to-result">
                <Link to="/">Back to result</Link>
            </div>
            {
                loading ? <div>LOADING.... </div>:
                error ? <div> Product not found </div>:
                (
                    <div className="details">
                <div className="details-image">
                    <img src={var1} alt="product"></img>
                </div>
                <div className="details-info">
                    <ul>
                        <li>
                            <h4>{product.name}</h4>
                        </li>
                        <li>
                            Price:RS <b>{product.price}</b>
                        </li>   
                        <li>
                            <div>
                                Description:{product.description}
                            </div>
                        </li>

                    </ul>
                </div>
                <div className="details-action">
                    <ul>
                        <li>Price:{product.price}
                        </li>
                        <li>Status: {product.quantity > 0 ? "In Stock" : ""}  
                        </li>
                        <li>
                            Qty: <select value={qty} onChange={ (e) => {SetQty(e.target.value)}}>
                                {[...Array(product.quantity).keys()].map( x => 
                                    <option key={x+1} value={x+1}>
                                        {x+1}
                                    </option>)}
                            </select>
                        </li>
                        <li>
                            {
                                product.quantity > 0 &&
                                <button onClick={handleAddToCart} style={{backgroundColor:"#f08000"}} className="button">ADD TO CART</button>
                            }
                            
                        </li>
                    </ul>
                </div>
            </div>
                )
            }
            

        </div>
    )

}

export default ProductScreen