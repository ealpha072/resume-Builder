import logger from "./logger.js";

const logRequest = (request, response, next) => {
    logger.info('Method: ', request.method)
    logger.info('Path: ', request.path)
    logger.info('Body: ', request.body)
    logger.info('--------')
    next()
}

const errorHandler = (error, request, response, next) => {
    logger.error(error.message)
    if (error.name === 'MongoServerError' && error.code === 11000){
        return response.status(400).json({error: 'Email already exists'})
    }
    next(error)
}

const faviconIgnore = (request, response, next) => {
    if(request.originalUrl.includes('/favicon.ico')){
        return response.status(204).end()
    }
    next()
}

const unknownEndpoints = (request, response) => {
    response.status(400).send({error: 'Unknown endpoint'})
}

export default {logRequest, unknownEndpoints, errorHandler, faviconIgnore}