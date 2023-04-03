const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("balance").setDescription("Shows casino balance"),
  async execute(interaction) {
    await interaction.reply(
      `Your balance is: ${interaction.client.bank.getTokens(interaction.user.id)} tokens.`
    );
  },
};
