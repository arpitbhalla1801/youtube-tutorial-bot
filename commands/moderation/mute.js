const discord = require('discord.js')
module.exports = {
    name: "mute",
    description: "Mutes someone",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You do not have enough perms to use this cmd!");

        const target = message.mentions.members.first()
        if(!target) return message.reply("Please mention someon to mute!");

        if(target.id === message.author.id) {
            return message.reply("You cannot mute yourself!")
        }

        let reason = args.slice(1).join(" ");
        if(!reason) return message.reply("Please give a reason to mute someone!")

        const memberrole = message.guild.roles.cache.find(r => r.name === "Member")
        const mutedrole = message.guild.roles.cache.find(r => r.name === "Muted");
        if(!memberrole) return message.reply("Couldnt find the `Member` role!")
        if(!mutedrole) return message.reply("Couldnt find the `Muted` role!")

        if(target.roles.cache.some(r => r.name === "Muted")) {
            return message.reply("The user is already muted!");
        }

        let embed = new discord.MessageEmbed()
        .setTitle("Member Muted!")
        .addField("target", target.user.tag)
        .addField("moderator", message.author.tag)
        .addField("reason", reason)
        await message.channel.send(embed)
        target.roles.add(mutedrole)
        target.roles.remove(memberrole)
    }
}
