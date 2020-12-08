const User = require('../../models/user');
const jwt = require('jsonwebtoken');

exports.signup = (req,res) => {            // Attaching signup function using exports

    User.findOne({email : req.body.email})
    .exec((error,data) => {
        if(data) return res.status(400).json({
            message:"admin already registered"
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
            username: Math.random().toString(),
            role : 'admin'
        });

        _user.save((error, data) => {
            if(error){
                console.log(error);
                return res.status(400).json({
                    message: 'Something went wrong1'
                });
            }
            
            if(data){
                return res.status(201).json({
                    message : "admin created successfully..."
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
            if(data.authenticate(req.body.password) && (data.role === 'admin')){               // Correct Password
                const token = jwt.sign({_id : data._id,role: data.role}, process.env.SECRETKEY ,{expiresIn : '6h'});
                const { _id, firstName, lastName, email, role, fullName } = data;
                res.cookie('token',token,{ expiresIn:'6h' })
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


exports.signout = (req,res) => {
    res.clearCookie('token');
    res.status(200).json({
        message:'Signed out successfully'
    });
}

exports.signoutuser = (req,res) => {
    res.status(200).json({
        message:'Signed out successfully'
    });
}


