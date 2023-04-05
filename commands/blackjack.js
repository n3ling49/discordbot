const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("blackjack")
    .setDescription("play blackjack in its simplest form")
    .addStringOption((option) =>
      option
        .setName("result")
        .setDescription("The predicted result of the coinflip.")
        .setRequired(true)
        .addChoices({ name: "heads", value: "heads" }, { name: "tails", value: "tails" })
    )
    .addIntegerOption((option) =>
      option.setName("amount").setDescription("Amount of tokens you want to bet.").setRequired(true)
    ),
  async execute(interaction) {
    const amount = interaction.options.getInteger("amount");
    const result = interaction.options.getString("result");
    const userId = interaction.user.id;
    const bank = interaction.client.bank;

    if (bank.getTokens(userId) < amount) {
      return await interaction.reply("You are too poor to do that :(");
    }
    if (!(amount > 0)) {
      return await interaction.reply("Wen willst du hier verarschen, lan?");
    }

    const flip = Math.random() < 0.5 ? "heads" : "tails";

    if (flip === result) {
      bank.addTokens(userId, amount);
      return await interaction.reply(`Result: ${flip}! You won ${amount} tokens!`);
    } else {
      bank.removeTokens(userId, amount);
      return await interaction.reply(`Result: ${flip}. You lost ${amount} tokens :()`);
    }
  },
};
