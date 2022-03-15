const jwt = require('jsonwebtoken')
const Users = require('../model/userModel');

const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization")
        // console.log(token)
        if (!token) return res.status(400).json({ msg: "Invalid Authentication. Token not find" })

        // const xyz = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        //     if (err) return res.status(400).json({ msg: "Invalid Authentication. users not find" })
        //     req.user = user
        //     next()
        // })
        // console.log(xyz)
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await Users.findById(decoded.id);
        console.log(user)
        if (!user) {
            res.status(404).json({
                success: false,
                error: "No user Found with this id",
            });
        }
        req.user = user;
        next()


    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

module.exports = auth