const { MessageEmbed } = require("discord.js")
module.exports = {
   name: 'roles',
   description: 'Display the roles of a user!',
   run: async(client, message, args) => {
       const user = message.mentions.members.first() || message.guild.members.cache.find(u => u.id === args[0]) || message.member
       if(!user) return message.reply("Please give a valid user!")

       const userRoles = user.roles.cache
       .filter((role) => role.id !== message.guild.id)
       .map((roles) => roles.toString())
       .join(", ")

       let embed = new MessageEmbed()
       .setAuthor(user.user.username, user.user.displayAvatarURL({ dynamic: true}))
       .addField("Roles!", userRoles)
       message.channel.send(embed)
    }
}