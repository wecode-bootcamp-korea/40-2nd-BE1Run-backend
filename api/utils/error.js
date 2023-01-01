const errMessage = require('./errMessages') 

const catchAsync = func => {
    return (req, res, next) =>{
        func(req, res, next).catch((error) => next({
            statusCode : errMessage[error.message]?.statusCode,
            message : errMessage[error.message]?.message
        }))
    }
}

const globalErrorHandler = (err, req, res, next) =>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "UNDEFINED_ERROR";
    res.status(err.statusCode).json({ message: err.message })
}

module.exports = {
    catchAsync,
    globalErrorHandler
}