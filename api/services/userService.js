const jwt = require("jsonwebtoken")
const axios = require("axios")

const userDao = require('../models/userDao');

const kakaologin = async (kakaoToken) =>{
    const result = await axios.get("https://kapi.kakao.com/v2/user/me", {
        headers: {
            authorization : `Bearer ${kakaoToken}`,
            'Content-type' : 'application/x-www-form-urlencoded;charset=utf-8'
        }
    });

    const {data} = result
    const nickname = data.properties.nickname
    const email = data.kakao_account.email
    const kakaoId= data.id

    const {userCheck} = await userDao.getUserExistsBySocialId(kakaoId)
    if ( userCheck === '0' ){
        await userDao.createUser(nickname, email, kakaoId); 

        const jsonwebtoken = await jwt.sign({ kakaoId : kakaoId }, process.env.JWT_SECRET,
            {
                algorithm: process.env.ALGORITHM,
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        )
        return jsonwebtoken
    }
    
    const user = await userDao.getUserBySocialId(kakaoId)
    
    const jsonwebtoken = await jwt.sign({ kakaoId : user.kakao_id}, process.env.JWT_SECRET,
        {
            algorithm: process.env.ALGORITHM,
            expiresIn: process.env.JWT_EXPIRES_IN
        }
    )
    return jsonwebtoken
    }

   

module.exports = {
    kakaologin
}


