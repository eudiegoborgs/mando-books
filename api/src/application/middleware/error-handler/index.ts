export default class ErrorHandlerMiddleware {
    static handler(error, req, res, next) {
        if (error.code) {
            res.status(error.code).json({
                ...error,
                status: "error",
            });
            return;
        }
        res.status(500).json({
            error: `${error.name} ${error.message}`,
        });
    }
}
