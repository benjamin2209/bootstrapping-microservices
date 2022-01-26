import amqp from 'amqplib'

export default class RabbitMQ {
    RABBIT = process.env.RABBIT;
    channel;


    constructor() {
        console.log(`Connecting to RabbitMQ server at ${this.RABBIT}.`);
    }

    async connect(){
        await amqp.connect(this.RABBIT) // Connect to the RabbitMQ server.
            .then(async connection => {
                console.log("Connected to RabbitMQ.");
                this.channel = await connection.createChannel();
            });
    }

    async sendViewedMessage(videoPath) {
        if (!this.channel) await this.connect()

        console.log(`Publishing message on "viewed" queue.`);

        const msg = {videoPath: videoPath};
        const jsonMsg = JSON.stringify(msg);
        this.channel.publish("", "viewed", Buffer.from(jsonMsg)); // Publish message to the "viewed" queue.
    }
}