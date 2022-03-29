const activate = require('../services/activate')

module.exports = async (req, res, next) => {
    try {
        const activationLink = req.params.link
        await activate(activationLink)
        return    res.send('<h1 style="color: blue; padding: 35px; ">Your email has been confirmed! Thank you!</h1>')
    } catch (e) {
        next(e)
    }
}
