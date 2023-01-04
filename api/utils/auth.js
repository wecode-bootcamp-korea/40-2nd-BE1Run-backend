const jwt = require('jsonwebtoken')
const {getUserBySociaId} = require('../models/userDao')

const loginRequired = async () => {

    const accessToken = req.headers.authorization

    if (!accessToken) {
        const error = new Error ('NEED_ACCESS_TOKEN')
        error.statusCode = 401

        return res.status(error.statusCode).json({ message : error.message })
    }
    
    const decoded = await jwt.verify(accessToken, process.env.JWT_SECRET)

    const user = await getUserBySociaId(decoded.kakao_id)

    if(!user) {
        const error = new Error ('USER_DOES_NOT_EXIST')
        error.statusCode = 401

        return res.status(error.statusCode).json({ message : error.message})
    }

    req.user = user
    next();
}

module.exports = {
    loginRequired
}