const express = require("express");
const jwt = require('jsonwebtoken');

exports.requiresignin = (req,res,next) => {
    if(req.headers.authorization){
        const token = req.headers.authorization.split(" ")[1];
        const pop = jwt.verify(token,process.env.SECRETKEY);
        req.user = pop;
    }
    else{
        return res.status(400).json({message : 'Not signed in'});
    }
    next();
    
}

exports.adminMiddleware = (req,res,next) => {
    if(req.user.role !== 'admin'){
        return res.status(400).json("Access denied(not admin)");
    }
    next();
}

exports.userMiddleware = (req,res,next) => {
    if(req.user.role !== 'user'){
        return res.status(400).json("Access denied(not user)");
    }
    next();
}