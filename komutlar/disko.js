
const Discord = require("discord.js");
const db = require("megadb");
let server = new db.crearDB('server');

exports.run = async (client, msg, args) => {
  
  let discoR = await server.get(`discorol_${msg.guild.id}`);
  setInterval(() => {
    msg.guild.roles.cache.find(x => x.name === discoR).setColor("RANDOM");
  }, 2000);
  msg.channel.send(
    `**<a:atom:836139234167488533> Disko Baþladý :zap:**`
  );
};

exports.config = {
    name: "disko",
    aliases: []
};