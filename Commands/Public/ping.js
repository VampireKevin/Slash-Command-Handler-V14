const { SlashCommandBuilder, ChatInputCommandInteraction } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!")
	.setDMPermission(false),

  /**
   * @param { ChatInputCommandInteraction } interaction
   */

  async execute(interaction) {
    const { client } = interaction;
    await interaction.reply(`Pong! (${client.ws.ping} ms)`);
  },
};
