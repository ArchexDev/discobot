const Discord = require("discord.js");
const db = require("megadb");
let server = new db.crearDB('server');


exports.run = async (client, message, args) => {

  let discorol = message.mentions.roles.first();

  if (!discorol) {
    return message.channel.send(
      ` ** :x: Disco Rol Olarak Ayarlamak Ýçin Ýstediðiniz Rolü Etiketlemelisin.**`
    );
  }

  server.set(`discorol_${message.guild.id}`, discorol.name);

  message.channel.send(`** :zap: Disco Rol \`${discorol.name}\` Olarak Ayarlandý.**`);
};

exports.config = {
    name: "disco-rol-ayarla",
    aliases: ["disco-rol","discordrol"]
};