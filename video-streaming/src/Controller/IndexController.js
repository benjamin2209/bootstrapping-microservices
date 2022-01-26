import RequestUtil from '../Utils/RequestUtil.js';
import http from 'http'
import Video from "../Model/Video.js";
import RabbitMQ from "../RabbitMQ.js";

export default class IndexController {

    static async index(req, res) {
        return RequestUtil.process(async (req, res) => {
            return res.send('Hello all the world')
        }, req, res)
    }

    static async video(req, res) {
        if (!req.query.id){
            console.error("Id missing.");
            res.sendStatus(500);
        }

        let video = null;

        try{
            video = await Video.findById(req.query.id);
        }catch (e){
            console.error("Database query failed.");
            res.sendStatus(500);
            return;
        }

        if (!video){
            console.error("No video.");
            res.sendStatus(500);
            return;
        }

        const forwardRequest = http.request(
            {
                host: process.env.VIDEO_STORAGE_HOST,
                port: process.env.VIDEO_STORAGE_PORT,
                path: `/video?path=${video.path}`,
                method: 'GET',
                headers: req.headers
            },
            forwardResponse => {
                res.writeHeader(forwardResponse.statusCode,
                    forwardResponse.headers);
                forwardResponse.pipe(res);
            }
        );
        await (new RabbitMQ()).sendViewedMessage(video.path)
        req.pipe(forwardRequest);
    }
}