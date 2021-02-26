const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "roles",
    description: "Displays someone's roles!",
    run: async(client, message, args) => {
        const user = message.mentions.members.first() || message.member || message.guild.members.cache.find(u => u.id === args[0])
        if(!user) return message.reply("Please give a valid user!")
        
        const userRoles = user.roles.cache
        .filter((role) => role.id !== message.guild.id)
        .map((roles) => roles.toString())
        .join(", ")

        let embed = new MessageEmbed()
        .addField("Roles", userRoles)
        .setFooter(user.user.tag, user.user.displayAvatarURL({ dynamic: true}))
        message.channel.send(embed)
    }
}