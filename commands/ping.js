module.exports = {
  name: "ping",
  alias: ["pg",],
  description: "to chek ping",
run: async(client, message, args) => {
 message.reply(`Ping ${client.ws.ping}ms`)
}}
