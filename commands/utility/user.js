const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("user")
		.setDescription("provides information about the user"),
	async execute(interaction) {
		await interaction.reply(
			`Command ran by ${interaction.user.username} who joined on ${interaction.user.joinedAt}`
		);
	},
};
