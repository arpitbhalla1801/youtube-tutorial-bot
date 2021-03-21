const { readdirSync } = require('fs')
const ascii = require('ascii-table')

let table = new ascii("Events")
table.setHeading("Event","Load Status")

module.exports = (client) => {
    const events = readdirSync(`./events/`).filter(file => 
        file.endsWith('.js')
    )
    for (let file of events) {
        try {
            let pull = require(`../events/${file}`);
            if (pull.event && typeof pull.event !== "string") {
                table.addRow(file, `❌-> Property event should be a string!`)
                continue;
            }
            pull.event = pull.event || file.replace(".js","");
            client.on(pull.event, pull.run.bind(null, client));
            table.addRow(file,`✔-> Loaded!`);
        } catch (err) {
            console.log("");
            console.log(err);
            table.addRow(file,`❌-> This has an error!`)
        }
    }
    console.log(table.toString());
}