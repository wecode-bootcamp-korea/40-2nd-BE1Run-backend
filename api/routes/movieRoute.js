const express = require('express')
const moviecontroller = require('../controllers/movieController')

const router = express.Router()

router.get('/search', moviecontroller.movieSearch)

module.exports ={
    router
}
