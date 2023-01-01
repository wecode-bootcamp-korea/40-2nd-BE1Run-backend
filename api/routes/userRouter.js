const express = require('express');
const userController = require('../controllers/userController')

const router = express.Router();

router.post('/kakao/signin', userController.kakaologin)

module.exports = {
    router
}