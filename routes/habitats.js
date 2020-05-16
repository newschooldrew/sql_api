const {Router} = require('express')
const router = Router();
const pool = require('../db');

router.get('/',(request,response,next)=>{
    pool.query('SELECT * FROM habitats',(err,res)=>{
        response.json(res.rows)
    })
})

router.post('/',(request,response,next)=>{
    const {name, climate,temperature} = request.body;
    pool.query(`INSERT INTO habitats(name,climate,temperature) VALUES ('${name}','${climate}','${temperature}')`,(err,res)=>{
        if(err) return next(err)
        response.redirect('/habitats')
    })
})

router.put('/:id',(request,response,next)=>{
    const {id} = request.params;
    const fields = [];
    const keys = ['name','climate','temperature'];

    keys.forEach(key =>{
        if(request.body[key]){
           return fields.push(key)
        }
    })

    fields.forEach((field,idx) =>{
        pool.query(`UPDATE habitats SET ${field}=($1) WHERE id=($2)`,[request.body[field],id],(err,res)=>{
            if(err) return next(err);
            if(idx === fields.length -1) response.redirect('/habitats')
        })
    })
})

router.delete('/:id',(request,response,next)=>{
    const {id} = request.params;
    pool.query(`DELETE FROM habitats WHERE id=${id}`,(err,res)=>{
        if(err) return next(err)
        response.redirect('/habitats')
    })
})

module.exports = router;