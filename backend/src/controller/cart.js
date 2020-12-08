const Cart = require('../models/cart');

exports.addItemToCart = (req,res) => {

    Cart.findOne({ user : req.user._id})   // Finding if a cart for this user already exists
    .exec((error,cart) => {
        if(error) return res.status(400).json({error})

        if(cart){

            function isproduct(arg1){
                return (arg1.product == req.body.cartItems.product);  // Check if the product we want to add is already in the cart
            }

            const item = cart.cartItems.find(isproduct)

            if(item){
                Cart.findOneAndUpdate({ user: req.user._id } , {    // IMPORTANT__________
                    "$set" : {
                        "cartItems.$" : {
                            ...req.body.cartItems, 
                            quantity: item.quantity + req.body.cartItems.quantity    // update quantity using set 
                        }
                    }
                })
                .exec((error,_cart) => {    
                    if(error) return res.status(400).json({error})
                    if(_cart){
                        return res.status(200).json({ cart : _cart });
                    }
                })


            }else{

                Cart.findOneAndUpdate({ user: req.user._id } , {
                    "$push" : {
                        "cartItems" : req.body.cartItems        // if cart exists,update the cart by quantity
                    }
                })
                .exec((error,_cart) => {    
                    if(error) return res.status(400).json({error})
                    if(_cart){
                        return res.status(200).json({ cart : _cart });
                    }
                })
            }
              
        }
        else{                               
            const cart = new Cart({                 // else make a cart with items
                user : req.user._id,
                cartItems : [req.body.cartItems]
        });
        
            cart.save((error,data) => {         // Save in database
                if(error) return res.status(400).json({error})
                if(data){
                    return res.status(200).json({ data });
                }
            })

        }
    })
}

