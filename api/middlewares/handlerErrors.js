const handlerError = function (err, req, res, next) {
    console.log(err);
    return {
        status: err.status || 500,
        message: err.message || 'Internal Server Error',
        error: err.error || err.message || 'Internal Server Error',
    };   
}

module.exports = handlerError;
