'use strict'

module.exports = (num) => {
    return (req, res, next) => {
        if (typeof num == 'number') {
           let squaredNum = num * num;
            res.json({Squared_Number: squaredNum})
            // req.square = num*num;
            next()
        }
    else {
        next(`${num} is not a number!`)

    }
}

}


