require("dotenv").config();

const { createApp } = require("./app");
const { dataSource } = require("./api/models/dataSource");

const startServer = () => {
    const app = createApp();
    const PORT = process.env.PORT;

    dataSource.initialize()
        .then(() =>{
            console.log("Data source has benn initialized");
        })
        .catch((err) => {
            console.log("Data source has failed to connect local Database", err)
        })

    
    app.get("/ping", (req, res) => {
        return res.status(200).json({ message : "pong"});
    });

    app.listen(PORT, () => {
        console.log(`Listening to request on ${PORT}`)
    });
};
    
startServer();
