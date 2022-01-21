import RequestUtil from '../Utils/RequestUtil.js';
import fs from 'fs'

export default class IndexController {

    static async index(req, res) {
        return RequestUtil.process(async (req, res) => {
            return res.send('Hello all the world')
        }, req, res)
    }

    static async video(req, res) {
        // C'est load depuis index.js car c'est de la que tout est exec
        const path = 'public/videos/SampleVideo_1280x720_1mb.mp4';
        fs.stat(path, (err, stats) => {
            if (err) {
                console.error(err);
                res.sendStatus(500);
                return;
            }
            res.writeHead(200, {
                "Content-Length": stats.size,
                "Content-Type": "video/mp4",
            });
            fs.createReadStream(path).pipe(res);
        });
    }
}