const Discord = require("discord.js");
const db = require("wio.db");

module.exports.run = async (client, message, args) => {
  let kanal = await db.fetch(`ruxbasvuruyapılacakkanal_${message.guild.id}`);
  let kanal2 = await db.fetch(`ruxbasvurugidecekkanal_${message.guild.id}`);
  let kanal3 = await db.fetch(`ruxlogkanal_${message.guild.id}`);
  let ruxbasvuruyapılacakkanal = await db.fetch(`ruxbasvuruyapılacakkanal_${message.guild.id}`, kanal.id);
  let ruxbasvurugidecekkanal = await db.fetch(`ruxbasvurugidecekkanal_${message.guild.id}`, kanal2.id);
  let westralogkanal = await db.fetch(`ruxlogkanal_${message.guild.id}`, kanal3.id);
  let ruxbotlistyetkilisi = db.fetch(`ruxbotlistyetkilirol_${message.guild.id}`)
  if(!message.member.roles.cache.has(ruxbotlistyetkilisi)) return message.channel.send(` Bu komutu kullanabilmen için <@&${ruxbotlistyetkilisi}> adlı role sahip olman lazım!`).then(x => x.delete({timeout: 3000}))
  let botisim = args[0]
  let sahip = args[1]
	let log = kanal3 
  if (!botisim) return message.channel.send(` Botun ID'sini yazmalısın.`).then(x => x.delete({timeout: 3000}))
  if (!sahip) return message.channel.send(`Bot sahibinin ID'sini yazmalısın.`).then(x => x.delete({timeout: 3000}))
  message.delete()
  const xirruxana = new Discord.MessageEmbed()
  .setColor(`GREEN`)
  .setFooter(`Xir`)
  .setTimestamp()
  .setDescription(`<@${sahip}> adlı kişinin <@${botisim}> adlı botu onaylandı. Onaylayan yetkili: ${message.author}`)
	client.channels.cache.get(log).send(xirruxana);
	message.channel.send(`Botu onayladınız.`).then(x => x.delete({timeout: 3000}))
};
module.exports.help = {
    name: "botonayla",
    description: "",
    aliases: []
};