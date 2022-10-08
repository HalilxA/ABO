const Discord = require('discord.js')
const mysql = require('mysql');
const db = require('quick.db');

exports.run = async (client, message, args) => {

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '3162',
  database: 'mta'
});
let nArray = [];
let nArray2 = [];
let evler = "Sahip Olduğu Her Hangi Bir Mülk Yok"
let araclar = "Sahip Olduğu Her Hangi Bir Araç Yok"
	const statsEmbed = new Discord.MessageEmbed()
	if(isNaN(args[0])){
		sorgu = connection.query(`SELECT * FROM characters WHERE charactername = '${args[0]}'`)
	}else{
		sorgu = connection.query(`SELECT * FROM characters WHERE maskeno = '${args[0]}'`)
	}

sorgu.on('result',function(row){
	var karakterID = row['id'];
	if(!karakterID) return message.channel.send(":x: **Sanırım Böyle Bir Karakter Yok!**");	
	var isim = row['charactername'];
	var saat = row['hoursplayed'];
	var level = row['level'];
	///
	var para = row['money'];
	var bankapara = row['bankmoney'];
	////
	var sağlık = row['health'];
	var acID = row['account'];
	var sorgu2 = connection.query(`SELECT * FROM accounts WHERE id = '${acID}'`);
	sorgu2.on('result',function(row2){
		var kadı = row2['username'];
		var bakiye = row2['bakiyeMiktari'];
	statsEmbed.setColor("YELLOW")
	statsEmbed.setAuthor(`${isim}, Karakter/Hesap Bilgileri`, message.guild.iconURL({dynamic: true}))
	statsEmbed.addField("Kullanıcı Adı:", "```"+kadı+"```", true)
	statsEmbed.addField("Oynama Saati:", "```"+saat.toLocaleString()+"```", true)
	statsEmbed.addField("Para:", "```"+para.toLocaleString()+"```", true)
	statsEmbed.addField("Banka Parası:", "```"+bankapara.toLocaleString()+"```", true)
	statsEmbed.addField("Bakiye:", "```"+bakiye.toLocaleString()+"```", true)
	statsEmbed.setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL({dynamic: true}));
			var sorgu3 = connection.query('SELECT * FROM `vehicles` WHERE `owner` = '+row['id']);
			sorgu3.on('result',function(row3){
			var id = row3['id']
			nArray.push(id)	
			araclar = nArray.join(", ")	
			
});
			var sorgu4 = connection.query('SELECT * FROM `interiors` WHERE `owner` = '+row['id']);
			sorgu4.on('result',function(row4){
			var intID = row4['id']
			nArray2.push(intID)	
			evler = nArray2.join(", ")				
});
});
setTimeout(function(){
statsEmbed.addField("Sahip Olduğu Araçlar;", "```"+araclar+"```")
statsEmbed.addField("Sahip Olduğu Mülkler;", "```"+evler+"```")
message.channel.send(statsEmbed)	
}, 100)
});
};
  
exports.conf = {
enabled:true,
guildOnly: true,
aliases:['stats'],
permLevel:0
}
  
exports.help = {
name:`stats`,
description:`Karakter Bilgilerini Gösterir`
}