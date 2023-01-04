const express = require('express')
const router = express.Router();

const userRouter = require('./userRouter');
const movieRouter = require('./movieRoute')

router.use('/auth', userRouter.router)
router.use('/movies', movieRouter.router)



module.exports = router;