export default class RequestUtil {
    static async process(callback, req, res){
        let status = 200;
        let body = {};

        try {
            body = await callback(req, res)
        }catch (e) {
            status = status !== 200 ? status : 500;
            body = {
                error: e.error || 'Error',
                message: e.message || 'An error occured'
            }
        }

        return res.status(status).json(body);
    }
}