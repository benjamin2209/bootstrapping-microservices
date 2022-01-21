import Server from "./src/Server.js";

let app = Server.config();

(async () => {
    app.listen(Server.APP_PORT, () => {
        console.log(`Le serveur tourne sur le port ${Server.APP_PORT}`);
    })
})()

export default app;