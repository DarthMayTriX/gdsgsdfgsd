const config = require("@root/config");

module.exports = {
  ADMIN: {
    name: "Admin",
    image: "https://icons.iconarchive.com/icons/double-j-design/apple-festival/256/app-settings-icon.png",
    emoji: "⚙️",
  },
  AUTOMOD: {
    name: "Automod",
    enabled: config.AUTOMOD.ENABLED,
    image: "https://icons.iconarchive.com/icons/acidrums4/betelgeuse/128/Apps-preferences-desktop-theme-icon.png",
    emoji: "🤖",
  },
  ANIME: {
    name: "Anime",
    image: "https://i.imgur.com/DAidIyG.jpg",
    emoji: "🤓",
  },
  ECONOMY: {
    name: "Economy",
    enabled: config.ECONOMY.ENABLED,
    image: "https://icons.iconarchive.com/icons/icons-land/multiple-smiley/256/Emoticon-Money-icon.png",
    emoji: "🪙",
  },
  FUN: {
    name: "Fun",
    image: "https://icons.iconarchive.com/icons/fasticon/cat/256/Cat-Black-White-icon.png",
    emoji: "😎",
  },
  GIVEAWAY: {
    name: "Giveaway",
    enabled: config.GIVEAWAYS.ENABLED,
    image: "https://icons.iconarchive.com/icons/microsoft/fluentui-emoji-3d/256/Party-Popper-3d-icon.png",
    emoji: "🎉",
  },

  INVITE: {
    name: "Invite",
    enabled: config.INVITE.ENABLED,
    image: "https://icons.iconarchive.com/icons/ampeross/qetto-2/256/add-contact-icon.png",
    emoji: "➕",
  },
  INFORMATION: {
    name: "Information",
    image: "https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-9/256/file-info-icon.png",
    emoji: "📃",
  },
  MODERATION: {
    name: "Moderation",
    enabled: config.MODERATION.ENABLED,
    image: "https://icons.iconarchive.com/icons/iconleak/atrous/256/hammer-icon.png",
    emoji: "🔨",
  },
  MUSIC: {
    name: "Music",
    enabled: config.MUSIC.ENABLED,
    image: "https://icons.iconarchive.com/icons/treetog/i/256/Audio-File-icon.png",
    emoji: "🎶",
  },
  OWNER: {
    name: "Owner",
    image: "https://icons.iconarchive.com/icons/iconshock/real-vista-development/256/admin-privilege-icon.png",
    emoji: "👑",
  },
  SOCIAL: {
    name: "Social",
    image: "https://icons.iconarchive.com/icons/designbolts/seo/256/Social-Media-Marketing-icon.png",
    emoji: "👨‍👩‍👧‍👦",
  },
  STATS: {
    name: "Statistics",
    enabled: config.STATS.ENABLED,
    image: "https://icons.iconarchive.com/icons/kyo-tux/phuzion/256/Misc-Stats-icon.png",
    emoji: "💹",
  },
  SUGGESTION: {
    name: "Suggestion/bugs",
    enabled: config.SUGGESTIONS.ENABLED,
    image: "https://icons.iconarchive.com/icons/tatice/cristal-intense/256/Notepad-Bloc-notes-icon.png",
    emoji: "📝",
  },
  TICKET: {
    name: "Ticket",
    enabled: config.TICKET.ENABLED,
    image: "https://icons.iconarchive.com/icons/custom-icon-design/flatastic-8/256/Ticket-icon.png",
    emoji: "🎫",
  },
  UTILITY: {
    name: "Utility",
    image: "https://icons.iconarchive.com/icons/ccard3dev/dynamic-yosemite/256/Utilities-Disk-Utility-icon.png",
    emoji: "🛠",
  },
};
