/* Identification */
const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const fs = require('fs');
const data = require('quick.db');
const db = require('quick.db');
const express = require('express');
const app = express();
const ayarlar = require("./settings.json");
const ms = require("ms");
const queue = new Map();
let prefix = settings.prefix;

app.get("/", (req, res) => {
  res.send("I Logged!");
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let cmd = require(`./commands/${file}`);
    let cmdFileName = file.split(".")[0];
    client.commands.set(cmd.help.name, cmd);
    if (cmd.help.aliases) {
      cmd.help.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
    };
  });
});

client.on("ready", async () => {
  let sesliKanalID = client.channels.cache.get("933007681403375687");
  if (sesliKanalID)
    sesliKanalID.join()
      .catch(err => console.error("Bot ses kanalına bağlanamadı!"));
});

client.on("ready", () => {
  console.log(`${client.user.tag} şuan aktif.`);
});

client.on("message", async msg => {
	if(msg.author.bot) return;
    if (msg.content.toLowerCase() === 'sa') {
		if(msg.channel.type === "dm") return;
            const embed = new Discord.MessageEmbed() 
      .setColor("RANDOM")
      .setDescription(`**Aleyküm Selam hoşgeldin ${msg.author}**`)
        msg.channel.send(embed)
    }
});

  const Gamedig = require('gamedig');
  client.on("message", async mesaj => {
    const ever = ["937638489783173130"]
    if (ever.some(word => mesaj.content.includes(word))) {
      if(mesaj.author.id == "935518402779447296") return;
	  mesaj.delete({timeout: 7500})
    Gamedig.query({
    type: 'mtasa',
    host: '217.195.207.167',
    }).then((state) => {
        const embed = new Discord.MessageEmbed()
        .setColor("#000000")
        .setTitle("**99 Roleplay Sunucu İstatistikleri**")
        .setThumbnail(mesaj.guild.iconURL({dynamic: true, type: 'png'}))
        .addField('Sunucu IP: ', "```217.195.207.167```")
        .addField('Aktif Oyuncu Sayısı: ', '```' + state.raw.numplayers + '/' + state.maxplayers + '```')
        .addField('Gecikme Süresi (ms): ', '```' + state.ping + '```')
        .setFooter(`${mesaj.author.tag} tarafından istendi.`, mesaj.author.avatarURL({ dynamic: true, format: 'png', size: 1024}))
        mesaj.channel.send(embed).then(s => s.delete({timeout: 7500}))
    });
    }
});

setInterval (function () {
    Gamedig.query({
    type: 'mtasa',
    host: '217.195.207.167',
    }).then((state) => {
		if(state.raw.numplayers == 0){
		client.user.setActivity('IP: 217.195.207.167:22003',{type: "WATCHING"})
		}else{
		client.user.setActivity('Aktif Oyuncu: ' + state.raw.numplayers,{type: "WATCHING"})
		}
    });
}, 3000); 

const mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '99roleplay',
  database: '99roleplay'
});

connection.connect(function (err) {
  if (err) throw err;

  console.log('MySQL bağlantısı başarıyla gerçekleştirildi.');

});


client.login(settings.key);
require('discord-buttons')(client);
