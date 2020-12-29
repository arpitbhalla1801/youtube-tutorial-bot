const ownerId = '651331989458124803'
module.exports = {
    name: "restart",
    description: "Restarts the bot!",
    run: async(client, message, args) => {
        if(message.author.id !== ownerId) {
            return message.reply("Only the bot owner may use this command!")
        }
        await message.reply("Successfully reset the bot!")
        process.exit()
    }
}