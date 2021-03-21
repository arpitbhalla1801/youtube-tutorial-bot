const mongo = require('../mongo')
module.exports.run = async(client) => {
    console.log(`${client.user.tag} is now online!`);
    client.user.setActivity("under development", {type:"WATCHING"})
    await mongo()
}