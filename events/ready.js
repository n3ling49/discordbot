const { Events } = require("discord.js");
const config = require("../config.json");

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`);
    const guild = client.guilds.fetch(config.guildId).then((guilds) =>
      guilds.members.fetch().then((members) => {
        console.log(members.keys());
        for (const id of members.keys()) {
          client.bank.addUser(id);
        }
        console.log(client.bank.getBank());
      })
    );
  },
};
