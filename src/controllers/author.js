var Service = require('../service/author')();

var Author = (app)=>{

    app.get('/author/:name',async (req,res,next)=>{
        var name = req.params['name'];
        console.log(name);
        return await Service.findByName(name).then((result)=>{
            return res.status(200).send({ status: "ok", "result": result}); 
        }).catch((error)=>{
            return res.status(401).send({auth:false});
        });
    });

    app.post('/author',async (req,res,next)=>{
        var itens = req.body;
        if(!itens){ 
            return res.status(401).send({auth:false});
        } else {
            return await Service.Add(itens).then((result)=>{
                return res.status(200).send({ status: "ok", "result": result}); 
            }).catch((error)=>{
                return res.status(401).send({auth:false});
            });
        }
    });
}

module.exports = Author;