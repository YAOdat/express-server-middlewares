'use strict'

module.exports = () => {
    return (req, res, next) => {
        let num = req.query.num;
         num = JSON.parse(num)
        if (typeof num === 'number') {
           let squaredNum = num * num;
            res.json({Squared_Number: squaredNum})
            next()
        }
    else {
        next(`${num} is not a number!`)

    }
}

}

