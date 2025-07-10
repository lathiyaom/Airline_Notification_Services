const express = require('express');

const { ServerConfig } = require('./config');

const apiRoutes = require('./routes');

const { amqplib } = require("amqplib")

async function connectQueue() {
    try {

        const connection = await amqplib.connect("amqp://localhost")

        const channel = await connection.createChannel();

        await channel.assertQueue("noti-queue");

        channel.consume("noti-queue", (data) => {
            console.log(`${Buffer.from(data.content)}`);
            channel.ack(data);
        })

    } catch (error) {

    }

}
const app = express();

app.use(express.json())
app.use({ urlencoded: true })

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
