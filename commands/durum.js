const Discord = require("discord.js");
const Gamedig = require("gamedig");
exports.run = (client, message, args) => {

  
  Gamedig.query({
    type: "mtasa",
    host: "217.195.207.167"
  })

    .then(state => {
      const client = new Discord.MessageEmbed()
        .setColor("ffa500")
        .addField('Aktif Oyuncu : ', '' + state.raw.numplayers + '/' + state.maxplayers + '')
	    .addField('Gecikme Süresi (ms): ', '' + state.ping + '')
      	.setTimestamp()
        .setFooter("©dlc.roleplay");
      message.channel.send(client);
    })

.catch(err =>
  
       
      console.log(err)
    );
  
};

exports.conf = {
    aliases: ['durum']
}
exports.help = {
    name: "durum"
}