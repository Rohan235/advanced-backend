const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export { asyncHandler }

//This pattern allows you to write route handlers without explicitly handling asynchronous errors 
// using try/catch blocks in each handler. Instead, you can wrap your asynchronous handlers with asyncHandler
//  to handle errors centrally.