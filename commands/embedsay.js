const discord = require('discord.js')

module.exports = {
  name: "embedsay",
  alias: ["embed say", "embsay"],
  description: "to say with embed",
      run: async (client, msg, args) => {
          let embedtext = args.slice(0).join(" ")
          if(!embedtext) return msg.channel.send("Masukan kata-kata terlebih dahulu!")

           let embed = new discord.MessageEmbed()
            embed.setColor("YELLOW")
           .setDescription(embedtext)
           msg.channel.send(embed);
      
       }
}