module.exports = {
  name: "move",
  alias:["move","mv"],
  description: "move some user",
  run: async(client, message) => {ctx, member : discord.Member, channel : discord.VoiceChannel):
await member.move_to(channel)
print("Ready")