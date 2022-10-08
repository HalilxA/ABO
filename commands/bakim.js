const Discord = require('discord.js')

exports.run = (client, message, args) => { 
if(message.author.id == "827537928091205673" || message.author.id == "704343321421676575" || message.author.id == "336481058000470016"){
	const aktifEmbed = new Discord.MessageEmbed()
		.setColor("ff0000")
		.setTitle("**Sunucumuz Kısa Süreliğine Bakım Moduna Alınmıştır. Sizlere daha iyi bir hizmet verebilmek için çalışıyoruz...**")
		.setImage("https://media.discordapp.net/attachments/874868999995916330/939220853315485706/99roleplay5png.png")
		.setTimestamp()
		.setFooter("©dlc.roleplay");
		message.channel.send({content: "||@everyone||", embed: aktifEmbed})
}else return message.reply(`:x: Bunu yapabilmek için yetkin yok!`)
};

exports.conf = {
    aliases: ['bakim']
}
exports.help = {
    name: "bakım"
}