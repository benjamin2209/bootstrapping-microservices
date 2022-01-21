import RequestUtil from '../Utils/RequestUtil.js';
import http from 'http'

export default class IndexController {

    static async index(req, res) {
        return RequestUtil.process(async (req, res) => {
            return res.send('Hello all the world')
        }, req, res)
    }

    static async video(req, res) {
        const forwardRequest = http.request(
            {
                host: process.env.VIDEO_STORAGE_HOST,
                port: process.env.VIDEO_STORAGE_PORT,
                path: '/video?path=SampleVideo_1280x720_1mb.mp4',
                method: 'GET',
                headers: req.headers
            },
            forwardResponse => {
                res.writeHeader(forwardResponse.statusCode,
                    forwardResponse.headers);
                forwardResponse.pipe(res);
            }
        );

        req.pipe(forwardRequest);
    }
}