import logger from "./logger.js";

const logRequest = (request, response, next) => {
    logger.info('Method: ', request.method)
    logger.info('Path: ', request.path)
    logger.info('Body: ', request.body)
    logger.info('--------')
    next()
}

const errorHandler = (error, request, response, next) => [
    logger.error(error.message)
]

const unknownEndpoints = (request, response) => {
    response.status(400).send({error: 'Unknown endpoint'})
}

export default {logRequest, unknownEndpoints, errorHandler}