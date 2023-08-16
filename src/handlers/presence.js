const { Client, ActivityType } = require("discord.js");

const activities = [
  { type: ActivityType.Watching, message: "{servers} servers" },
  { type: ActivityType.Listening, message: "your Music 💕" },
  { type: ActivityType.Watching, message: "darthmaytrix.com" },
  { type: ActivityType.Watching, message: "my commands | /help" },
  { type: ActivityType.Playing, message: "with GPT-3.5" },
  { type: ActivityType.Competing, message: "a coding competition" },
  { type: ActivityType.Competing, message: "a gaming tournament" },
  { type: ActivityType.Competing, message: "to be the best bot" },
  { type: ActivityType.Listening, message: "Being a helpful bot" },
  { type: ActivityType.Watching, message: "Just chilling and chatting" },
  { type: ActivityType.Competing, message: "Programming new features" },
];

function getRandomActivity(activities) {
  return activities[Math.floor(Math.random() * activities.length)];
}

function formatActivityMessage(activity, guilds) {
  return activity.message.replace("{servers}", guilds);
}

function setCustomPresence(client, activity) {
  client.user.setPresence({
    status: client.config.PRESENCE.STATUS,
    activities: [
      {
        name: activity.message,
        type: activity.type,
      },
    ],
  });
}

function updatePresence(client) {
  const guilds = client.guilds.cache.size;
  const activity = getRandomActivity(activities);
  const message = formatActivityMessage(activity, guilds);
  setCustomPresence(client, { ...activity, message });
}

module.exports = function customPresence(client) {
  setInterval(() => updatePresence(client), 10 * 1000);
};




