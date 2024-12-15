const express = require('express');
const router = new express.Router();

// @todo temporaire, à modifier en export global
const db = require('../db/db');


router.get("/dept", (req,res)=>{
    const q = "SELECT * FROM d_Department"
    db.query(q,(err,data)=>{
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    })
})

router.post("/dept", (req,res)=>{
    const q = "INSERT INTO d_Department (`department`) VALUES (?)"
    const values = [req.body.dept]
    db.query(q,[values],(err,data)=>{
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json("Un département a été créé");
    })
})

router.delete("/dept/:id_dept", (req,res)=>{
    const deptId = req.params.id_dept
    const q = "DELETE FROM d_Department WHERE id_dept = ?"

    db.query(q,[deptId], (err,data)=>{
        if (err) console.log(err);
        return res.json("Un département a été supprimé");
    })
})

module.exports = router;