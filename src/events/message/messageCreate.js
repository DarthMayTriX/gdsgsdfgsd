const {
  EmbedBuilder,
  ButtonBuilder,
  ActionRowBuilder,
  ApplicationCommandOptionType,
  ButtonStyle,
} = require("discord.js");
const { commandHandler, automodHandler, statsHandler } = require("@src/handlers");
const { PREFIX_COMMANDS, SUPPORT_SERVER, DASHBOARD, EMBED_COLORS, Website } = require("@root/config");
const { getSettings } = require("@schemas/Guild");


/**
 * @param {import('@src/structures').BotClient} client
 * @param {import('discord.js').Message} message
 */
module.exports = async (client, message) => {
  if (!message.guild || message.author.bot) return;
  const settings = await getSettings(message.guild);
  const currentHour = new Date().getHours();
  let inspirationalQuotes = [];

  if (currentHour >= 5 && currentHour < 12) {
   // Morning quotes
   inspirationalQuotes = [
     "Believe you can and you're halfway there. -Theodore Roosevelt",
     "The only way to do great work is to love what you do. -Steve Jobs",
     "The journey of a thousand miles begins with one step. -Lao Tzu",
     "Do what you can, with what you have, where you are. -Theodore Roosevelt",
     "The only person you are destined to become is the person you decide to be. -Ralph Waldo Emerson",
     "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. -Christian D. Larson",
     "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
     "The harder the conflict, the greater the triumph. -George Washington",
     "You are never too old to set another goal or to dream a new dream. -C.S. Lewis",
      "The only way to achieve the impossible is to believe it is possible. -Charles Kingsleigh (Alice in Wonderland)"
    ];
  } else if (currentHour >= 12 && currentHour < 17) {
    // Afternoon quotes
    inspirationalQuotes = [
      "You miss 100% of the shots you don't take. -Wayne Gretzky",
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. -Steve Jobs",
      "Don't watch the clock; do what it does. Keep going. -Sam Levenson",
      "The only place where success comes before work is in the dictionary. -Vidal Sassoon",
      "The only limit to our realization of tomorrow will be our doubts of today. -Franklin D. Roosevelt",
      "Strive not to be a success, but rather to be of value. -Albert Einstein",
      "The best way to predict the future is to create it. -Peter Drucker",
      "Success is not final, failure is not fatal: It is the courage to continue that counts. -Winston Churchill",
      "Don't wait. The time will never be just right. -Napoleon Hill",
      "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt"
    ];
  } else {
    // Evening quotes
    inspirationalQuotes = [
      "Your time is limited, don't waste it living someone else's life. -Steve Jobs",
      "The only limit to our realization of tomorrow will be our doubts of today. -Franklin D. Roosevelt",
      "The only way to achieve the impossible is to believe it is possible. -Charles Kingsleigh (Alice in Wonderland)",
      "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
      "The harder the conflict, the greater the triumph. -George Washington",
      "Don't wait. The time will never be just right. -Napoleon Hill",
      "You are never too old to set another goal or to dream a new dream. -C.S. Lewis",
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. -Steve Jobs",
      "The best way to predict the future is to create it. -Peter Drucker",
      "Strive not to be a success, but rather to be of value. -Albert Einstein"
    ];
  }

  const randomQuote = inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)];

  let randomEmoji = '';

  if (currentHour >= 5 && currentHour < 12) {
   // Morning emojis
   const morningEmojis = ['😄', '🌞', '🌻', '🍀', '🌺', '🎈'];
   randomEmoji = morningEmojis[Math.floor(Math.random() * morningEmojis.length)];
  } else if (currentHour >= 12 && currentHour < 17) {
   // Afternoon emojis
   const afternoonEmojis = ['🌟', '🎉', '🌈', '👍', '🎯', '👏'];
   randomEmoji = afternoonEmojis[Math.floor(Math.random() * afternoonEmojis.length)];
  } else {  
   // Evening emojis
   const eveningEmojis = ['🤖', '🚀', '🔥', '💪', '🌠', '📚', '💡', '🏆', '🍃', '🍂'];
   randomEmoji = eveningEmojis[Math.floor(Math.random() * eveningEmojis.length)];
  }
  let greetingMessage = '';

  if (currentHour >= 5 && currentHour < 12) {
    greetingMessage = 'Good morning';
  } else if (currentHour >= 12 && currentHour < 17) {
    greetingMessage = 'Good afternoon';
  } else {
    greetingMessage = 'Good evening';
  }


  let isCommand = false;
  if (PREFIX_COMMANDS.ENABLED) {

    if (message.content.includes(`${client.user.id}`)) {

      const embed = new EmbedBuilder()
        .setTitle(`${randomEmoji} ${greetingMessage}, did you mention me? ${randomEmoji}`)
        .setAuthor({
          iconURL: client.user.displayAvatarURL(),
          name: client.user.username
        })
        .setDescription(`**Hello there** 👋 <@${message.author.id}>,\n\n**My prefix is** \`${settings.prefix}\`\n**having a hard time?**\n**to view my command list, Try:** </help:1133779488510054461> or \`${settings.prefix}help\`\n\n*${randomQuote}*`)
        .setColor(EMBED_COLORS.BOT_EMBED)
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter({ 
          iconURL: message.author.displayAvatarURL(),
          text: `${message.author.username} • ${new Date().toLocaleString()}`
        });



      let components = [];
      components.push(new ButtonBuilder().setLabel("Invite Link").setURL(client.getInvite()).setStyle(ButtonStyle.Link));

      if (SUPPORT_SERVER) {
        components.push(new ButtonBuilder().setLabel("Support Server").setURL(SUPPORT_SERVER).setStyle(ButtonStyle.Link));
      }

      if (Website) {
        components.push(new ButtonBuilder().setLabel("Website").setURL(Website).setStyle(ButtonStyle.Link));
      }

      if (DASHBOARD.enabled) {
        components.push(
          new ButtonBuilder().setLabel("Dashboard Link").setURL(DASHBOARD.baseURL).setStyle(ButtonStyle.Link)
        );
      }

      let buttonsRow = new ActionRowBuilder().addComponents(components);
      message.channel.send({ embeds: [embed], components: [buttonsRow] });
    }

    if (message.content && message.content.startsWith(settings.prefix)) {
      const invoke = message.content.replace(`${settings.prefix}`, "").split(/\s+/)[0];
      const cmd = client.getCommand(invoke);
      if (cmd) {
        isCommand = true;
        commandHandler.handlePrefixCommand(message, cmd, settings);
      }
    }
  }


  if (settings.stats.enabled) await statsHandler.trackMessageStats(message, isCommand, settings);

  if (!isCommand) await automodHandler.performAutomod(message, settings);
};






