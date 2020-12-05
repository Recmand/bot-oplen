module.exports = {
  name: "say",
  alias: ["say", "sy"],
  description: "to say message",
run: async(client, message, args) => {
  let say = args.join(' ')
  message.channel.send(say)
}
}
