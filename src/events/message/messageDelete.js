const { EmbedBuilder } = require("discord.js");
const { getSettings } = require("@schemas/Guild");
const { EMBED_COLORS } = require("@root/config"); //import colors from config.js

/**
 * @param {import('@src/structures').BotClient} client
 * @param {import('discord.js').Message|import('discord.js').PartialMessage} message
 */
module.exports = async (client, message) => {
  if (message.partial) return;
  if (message.author.bot || !message.guild) return;

  const settings = await getSettings(message.guild);
  if (!settings.automod.anti_ghostping || !settings.modlog_channel) return;
  const { members, roles, everyone } = message.mentions;

  // Check message if it contains mentions
  if (members.size > 0 || roles.size > 0 || everyone) {
    const logChannel = message.guild.channels.cache.get(settings.modlog_channel);
    if (!logChannel) return;

    const mentionedMembers = members.map((member) => member.toString()).join(", ");
    const mentionedRoles = roles.map((role) => role.toString()).join(", ");
    const mentionedEveryone = everyone ? "Yes" : "No";

    const embed = new EmbedBuilder()
      .setAuthor({ name: "ghost ping detected :>" })
      .setColor(EMBED_COLORS.ERROR)
      .setDescription(
        `**Message:**\n${message.content}\n\n` +
          `**Author:** ${message.author.tag} \`${message.author.id}\`\n` +
          `**Channel:** ${message.channel.toString()}`
      )
      .addFields(
        {
          name: "Mentioned Members",
          value: mentionedMembers || "None",
          inline: true,
        },
        {
          name: "Mentioned Roles",
          value: mentionedRoles || "None",
          inline: true,
        },
        {
          name: "Mentioned Everyone",
          value: mentionedEveryone,
          inline: true,
        }
      )
      .setFooter({ text: `Sent at: ${message.createdAt}` });

    logChannel.safeSend({ embeds: [embed] });
  }
};
