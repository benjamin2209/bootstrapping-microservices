import Server from "./src/Server.js";
import Database from "./src/Database.js";

let app = Server.config();

(async () => {
    Database.init(Server.DB_URL, {
        dbName: Server.DB_NAME
    }).then(() => {

        console.log("La base de donnée est connectée");

        app.listen(Server.APP_PORT, () => {
            console.log(`Le serveur tourne sur le port ${Server.APP_PORT}`);
        })

    })
})()

export default app;