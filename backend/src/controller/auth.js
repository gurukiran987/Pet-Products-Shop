const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

exports.signup = (req,res) => {            // Attaching signup function using exports


    User.findOne({email : req.body.email})
    .exec((error,data) => {
        if(data) return res.status(400).json({
            message:"User already registered"
        });

        const {
            firstName,
            lastName,
            email,
            password
        } = req.body;
        
        const _user = new User({ 
            firstName, 
            lastName, 
            email, 
            password,
            username: Math.random().toString()
        });

        _user.save((error, data) => {
            if(error){
                console.log(error);
                return res.status(400).json({
                    message: 'Something went wrong'
                });
            }
            
            if(data){
                return res.status(200).json({
                    message : "User created successfully..."
                })
            }
        });

    });
}


exports.signin = (req,res) => {

    User.findOne({email : req.body.email})
    .exec((error,data) => {                     // Error-error in database
                                                // data- Email entry in database
        if(error){
            return res.status(400).json({
                message:"Error"
            })
        }
        if(data){
            if(data.authenticate(req.body.password)){               // Correct Password
                const token = jwt.sign({_id : data._id, role : data.role}, process.env.SECRETKEY ,{expiresIn : '6h'});
                const { _id, firstName, lastName, email, role, fullName } = data;
                res.status(200).json({
                    token,
                    userinfo: {_id, firstName, lastName, email, role, fullName}
                });


            }                                                       // Wrong password
            else{
                res.status(400).json({
                    message:"Wrong password"
                });
            }
        }                                                           // Wrong email
        else{
            res.status(400).json({
                message:"Wrong email"
            });
        }
    })

}



