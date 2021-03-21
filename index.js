const { Client, Collection } = require("discord.js");
const { token } = require("./token.json")

const client = new Client({
    disableEveryone: true
})

// Collections
client.commands = new Collection();
client.aliases = new Collection();


["command","event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});


client.login(token);