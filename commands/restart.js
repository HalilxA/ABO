const Discord = require('discord.js')

exports.run = (client, message, args) => { 
if(message.author.id == "827537928091205673" || message.author.id == "704343321421676575" || message.author.id == "336481058000470016"){
	const aktifEmbed = new Discord.MessageEmbed()
		.setColor("ffa500")
		.setTitle("**Sunucumuza restart atılıyor en kısa zamanda tekrardan aktif olacaktır.**")
		.setImage("https://media.discordapp.net/attachments/874868999995916330/939220853315485706/99roleplay5png.png")
		.setTimestamp()
		.setFooter("©dlc.roleplay");
		message.channel.send({content: "||@everyone||", embed: aktifEmbed})
}else return message.reply(`:x: Bunu yapabilmek için yetkin yok!`)
};

exports.conf = {
    aliases: ['restart']
}
exports.help = {
    name: "restart"
}