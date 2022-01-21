import azure from 'azure-storage'

export default class IndexController {

    static async video(req, res) {
        const videoPath = req.query.path;
        const blobService = azure.createBlobService(process.env.STORAGE_ACCOUNT_NAME,
            process.env.STORAGE_ACCESS_KEY);
        const containerName = "videos";

        blobService.getBlobProperties(containerName,
            videoPath, (err, properties) => {
                if (err) {
                    // ... error handling ...
                    res.sendStatus(500);
                    return;
                }
                res.writeHead(200, {
                    "Content-Length": properties.contentLength,
                    "Content-Type": "video/mp4",
                });
                blobService.getBlobToStream(containerName,
                    videoPath, res, err => {
                        if (err) {
                            // ... error handling ...
                            res.sendStatus(500);
                            return;
                        }
                    });
            });
    }
}