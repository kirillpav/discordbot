const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("sever")
		.setDescription("replies with server information"),
	async execute(interaction) {
		await interaction.reply(
			`Server is ${interaction.guild.name} and has ${interaction.guild.memberCount} people`
		);
	},
};
