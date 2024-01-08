const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("replies with pong"),
	async execute(intercation) {
		await intercation.reply("pong");
	},
};
