const Crypto = require('../model/crypto')

exports.saveToDb = (req,res,next) => {
    const name = req.body.crypto.name
    const price = req.body.crypto.price
    const percent_change_7d = req.body.crypto.percent_change_7d
    const percent_change_30d = req.body.crypto.percent_change_30d

    const crypto = new Crypto({
        name: name,
        price: price,
        percent_change_7d: percent_change_7d,
        percent_change_30d: percent_change_30d
    })

    crypto.save().then(result => {
        res.json({
            message: 'Saved to database',
            crypto: crypto
        })
    })
    .catch(err => console.log(err))
}

exports.getFromDb = (req,res,next) => {
    Crypto.find().then(result => {
        res.json({
            message: 'retrieved from database', 
            crypto: result
        })
    })
}