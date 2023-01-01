const { dataSource } = require('./dataSource')

const createUser = async (nickname, email, kakaoId) => {
    try {
        const result = await dataSource.query(`
            INSERT INTO users(
                nick_name,
                email,
                kakao_id
            ) VALUES(
                ?,
                ?,
                ?
            )`,
            [nickname, email, kakaoId]
        )
        return result.insertId
    }  catch {
        throw new Error("createUserErr")
    }
}

const getUserBySocialId = async (kakaoId) => {
    
    const result = await dataSource.query(`
        SELECT
            nick_name,
            email,
            kakao_id
        FROM users
        WHERE kakao_id =?`, [kakaoId]
    )
    return result[0]
} 
const getUserExistsBySocialId = async (kakaoId) => {

    const result = await dataSource.query(`
        SELECT EXISTS(SELECT
            kakao_id
        FROM users
        WHERE kakao_id =? ) as userCheck`, [kakaoId]
    )
    return result[0]
}


module.exports = {
    createUser,
    getUserBySocialId,
    getUserExistsBySocialId
}