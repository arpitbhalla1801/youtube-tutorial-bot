const Discord = require('discord.js')
const client = new Discord.Client()

client.on("ready", () => {
    console.log("Ready to go!")
    client.user.setActivity("under development!", { type: "LISTENING"})
})
client.on("message", message => {
    if(message.content === "ping") {
        return message.channel.send("Pong! :ping_pong:")
    }
})

client.login("token")
