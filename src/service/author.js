var authorModel = require('../models/author');

module.exports = () =>{
    return {
        Add : async (itens) =>{
            var author = new authorModel();
            author.first_name = itens.first_name;
            author.family_name = itens.family_name;
            author.date_of_birth = itens.date_of_birth;

            return author.save((error,doc)=>{
                if(!error)
                    return error;
                
                return doc;
            });
        },
        findByName : async (name) => {
            var author = new authorModel();
            var result = null;
            await authorModel.findOne({"first_name":name},(err,item)=>{
                result = item;
            })
            return result;
        }
    }
}
