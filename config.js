module.exports = {
  OWNER_IDS: ["1105547585374134357", "1046459795626000404", "1100364123650408518", "1100438476786253925"], // Bot owner ID's
  SUPPORT_SERVER: "https://discord.gg/qXCqj6c5ty", // Your bot support server
  Website: "https://darthbot.org/", // Your bot Website
  PREFIX_COMMANDS: {
    ENABLED: true, // Enable/Disable prefix commands
    DEFAULT_PREFIX: ",", // Default prefix for the bot
  },
  INTERACTIONS: {
    SLASH: true, // Should the interactions be enabled
    CONTEXT: true, // Should contexts be enabled
    GLOBAL: true, // Should the interactions be registered globally
    TEST_GUILD_ID: "1061305609858846740", // Guild ID where the interactions should be registered. [** Test you commands here first **]
  },
  EMBED_COLORS: {
    BOT_EMBED: "#013220",
    TRANSPARENT: "#36393F",
    SUCCESS: "#00A56A",
    ERROR: "#D61A3C",
    WARNING: "#F7E919",
  },
  CACHE_SIZE: {
    GUILDS: 100,
    USERS: 10000,
    MEMBERS: 10000,
  },
  MESSAGES: {
    API_ERROR: "Unexpected Backend Error! Try again later or contact support server",
  },
  bug: "1061309916805079171", // Bug report channel ID
  // PLUGINS
  AUTOMOD: {
    ENABLED: true,
    LOG_EMBED: "#013220",
    DM_EMBED: "#013220",
  },

  DASHBOARD: {
    enabled: true, // enable or disable dashboard
    baseURL: "http://104.243.34.159:3389", // base url 51.79.35.68:8117
    failureURL: "http://104.243.34.159:3389", // failure redirect url
    port: "3389", // port to run the bot on
    style: "dark"
  },

  AICHAT: {
    MODEL: "gpt-3.5-turbo", //Model Of AI to use https://platform.openai.com/docs/models/gpt-3-5
    TOKENS: 300, //The maximum number of tokens to generate in the completion. https://platform.openai.com/docs/api-reference/completions/create
    PRESENCE_PENALTY: 1.5, // Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.
    TEMPERATURE: 0.4, // What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
    IMAGINEMESSAGE: "" // Allows the chatbot to tailor its responses to your intended persona. for example: "imagine you are Rayan Ghostling,you should answer like he would". This feature is optional and can be left blank if not needed.
  },

  ECONOMY: {
    ENABLED: true,
    CURRENCY: "₪",
    DAILY_COINS: 100, // coins to be received by daily command
    MIN_BEG_AMOUNT: 100, // minimum coins to be received when beg command is used
    MAX_BEG_AMOUNT: 2500, // maximum coins to be received when beg command is used
  },

  MUSIC: {
    ENABLED: true,
    IDLE_TIME: 60, // Time in seconds before the bot disconnects from an idle voice channel
    MAX_SEARCH_RESULTS: 5,
    DEFAULT_SOURCE: "YT", // YT = Youtube, YTM = Youtube Music, SC = SoundCloud
    // Add any number of lavalink nodes here
    // Refer to https://github.com/freyacodes/Lavalink to host your own lavalink server
    LAVALINK_NODES: [
{
  host: "localhost",
  port: 2333,
  password: "you2shall2not2pass",
  id: "localnode",
  resuming: { // resumeConfiguration
    key: "bring_me_back",
    timeout: 60000 // after 60 seconds the bot will not resume.
  },
  reconnect: { // reconnectConfiguration
    tries: 10,
    delay: 10000
  },
  retryDelay: 5000,
  secure: false,
},
    ],
  },

  GIVEAWAYS: {
    ENABLED: true,
    REACTION: "🎁",
    START_EMBED: "#FF468A",
    END_EMBED: "#FF468A",
  },

  IMAGE: {
    ENABLED: true,
    BASE_API: "https://strangeapi.fun/api",
  },

  INVITE: {
    ENABLED: true,
  },

  MODERATION: {
    ENABLED: true,
    EMBED_COLORS: {
      TIMEOUT: "#102027",
      UNTIMEOUT: "#4B636E",
      KICK: "#FF7961",
      SOFTBAN: "#AF4448",
      BAN: "#D32F2F",
      UNBAN: "#00C853",
      VMUTE: "#102027",
      VUNMUTE: "#4B636E",
      DEAFEN: "#102027",
      UNDEAFEN: "#4B636E",
      DISCONNECT: "#013220",
      MOVE: "#013220",
    },
  },

  PRESENCE: {
    ENABLED: true, // Whether or not the bot should update its status
    STATUS: "online", // The bot's status [online, idle, dnd, invisible]
    TYPE: "WATCHING", // Status type for the bot [PLAYING | LISTENING | WATCHING | COMPETING]
    MESSAGE: "{servers} servers | /help", // Your bot status message
  },

  STATS: {
    ENABLED: true,
    XP_COOLDOWN: 5, // Cooldown in seconds between messages
    DEFAULT_LVL_UP_MSG: "{member:tag}, You just advanced to **Level {level}**",
  },

  SUGGESTIONS: {
    ENABLED: true, // Should the suggestion system be enabled
    EMOJI: {
      UP_VOTE: "👍",
      DOWN_VOTE: "👎",
    },
    DEFAULT_EMBED: "#013220",
    APPROVED_EMBED: "#43B581",
    DENIED_EMBED: "#F04747",
  },

  TICKET: {
    ENABLED: true,
    CREATE_EMBED: "#013220",
    CLOSE_EMBED: "#013220",
  },
};
