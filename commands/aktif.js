const Discord = require('discord.js')

exports.run = (client, message, args) => { 
if(message.author.id == "827537928091205673" || message.author.id == "704343321421676575" || message.author.id == "336481058000470016" || message.author.id == "852625220480139287"){
	const aktifEmbed = new Discord.MessageEmbed()
		.setColor("GREEN")
		.setTitle("**Sunucumuz sorunsuz bir şekilde aktif edilmiştir. Aktif olan herkesi sunucumuza bekliyoruz. \nSunucumuzun IP Adresi: '185.132.124.160'**")
		.setImage("https://cdn.discordapp.com/attachments/874868999995916330/947444493618143252/aktif.gif")
		.setTimestamp()
		.setFooter("©dlc.roleplay");
		message.channel.send({content: "||@everyone||", embed: aktifEmbed})
}else return message.reply(`:x: Bunu yapabilmek için yetkin yok!`)
};

exports.conf = {
    aliases: ['aktif']
}
exports.help = {
    name: "aktif"
}