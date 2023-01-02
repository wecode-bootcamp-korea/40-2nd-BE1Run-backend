const userService = require('../services/userService')
const { catchAsync } = require('../utils/error')

const kakaologin = catchAsync(async (req, res) => {
        const kakaoToken =req.headers.authorization

        if(!kakaoToken){
                return res.status(400).json({ message: "tokenErr"})
        }

        const accessToken =await userService.kakaologin(kakaoToken)
    
        return res.status(200).json({ accessToken: accessToken})
})

module.exports = { kakaologin }