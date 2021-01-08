module.exports = {
  name: "serverlist",
  alias: ["list server", "sl"],
  description: "total server",
run: async (client, 'server', (message) => {
           client.guilds.cache.forEach((guilds) => { 
             message.channel.send(
             `${guild.name} ha