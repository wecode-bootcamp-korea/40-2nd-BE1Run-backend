require('dotenv').config();

const { createApp } = require("./app");
const dataSource = require("./api/models/dataSource");

const startServer = async () => {
    const app = createApp();
    const PORT = process.env.PORT;

        await dataSource.initialize()

        app.listen(PORT, () => {
            console.log('Listening to request om PORT')
        });

        app.get("/ping", (req, res) => {
            res.status(200).json({ message : "pong"});
        });
    };
    
startServer();