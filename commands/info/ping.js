const discord = require('discord.js')

module.exports = {
    name: "ping",
    aliases: ["latency"],
    description: "Returns teh bot's ping!",
    usage: "!ping",
    run: async(client, message) => {
        const embed = new discord.MessageEmbed()
        .setTitle("Bot's ping")
        .setDescription(`Ping - ${client.ws.ping}`)
        message.channel.send(embed)
    }
}