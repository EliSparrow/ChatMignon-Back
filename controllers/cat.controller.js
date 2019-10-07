const Cat = require('../models/cat.model');

/*
    @desc Create a new cat entry in DB
    @methode POST
    @route /cat/
*/
exports.create = async (req,res) => {
    try {
        const { id, imageUrl } = req.body;
        const existingCat = await Cat.findOne({imageUrl: imageUrl});

        let cat = new Cat ({
            id,
            imageUrl
        });

        if(!existingCat) {
            await cat.save();

            res.status(200).json({
                msg: "Cat saved.",
                cat
            });
        } else {
            return res.status(404).json({
                msg: "This cat already exists."
            })
        }

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Erreur serveur');
    }
}

/*
    @desc Get all cats
    @methode Get
    @route /cat/
*/
exports.listCats = async (req,res) => {
    try {
        const cats = await Cat.find()
        
        if(cats.length > 0) res.status(200).json(cats)
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Erreur serveur');
    }
}
