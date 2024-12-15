const express = require('express');
const router = new express.Router();

// @todo temporaire, à modifier en export global
const db = require('../db/db');


router.get("/emp", (req,res)=>{
    const q = "SELECT * FROM d_Employee"
    db.query(q,(err,data)=>{
        if (err) {
            console.log(err);
            return res.json(err);
        }
        //console.log(data);
        return res.json(data);
    })
})

module.exports = router;