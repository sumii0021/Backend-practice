const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
    }
}


export {asyncHandler}


// const asyncHandler = () => {}
// const asynchandler = (func) => () => {}
// const asynchandler = (func) => async () => {};

// const asyncHandler = (fn) => (req,res ,next)
//  => {
//     try{
//    await fn(req, res, next)
//     } catch (error){
//         res.status(err.code || 500).json({
//             succes:false,
//             message:err.message
//         })
//     }
// }