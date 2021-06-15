const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.member.roles.cache.has("817357051306311691"))// Abone Sorumlusu id
    return message.channel.send(      
      `Bu komutu kullanabilmek için \`Abone Yetkilisi\` rolüne sahip olmasınız.`
    );
  let kayıtsayı = db.fetch(`kayıtsayı_${message.author.id}`) || '0'

  let merziki = message.mentions.users.first();
  if (!merziki)
    return message.channel.send("Bir Kişiyi Etiketlemen Gerekiyor!");
  let rol = message.mentions.roles.first();
  let member = message.guild.member(merziki);
  member.roles.add("844666936897437728"); //abone rolü idsi
  let aboneembed = new Discord.MessageEmbed()
        .setColor('RED')
        .setDescription(`<a:siyahtik:813358466026307624> **Başarılı!**`)
        .addField("<a:loading:813338262345089025> ・ Yetkili:", `${message.author}`, true)
        .addField("<a:sekilli:839060289034518559> ・ Abone:", `${merziki}`, true)
        .addField("<a:diamond:839069298852364328> ・ Mesaj Linki:", `[Tıkla](https://discord.com/channels/801039674272514048/801902489486098452/${message.id})`, true)
        .setThumbnail("https://media.giphy.com/media/XHTd7ZM2ryjCJgSbbL/giphy.gif")
        .setImage('https://media.giphy.com/media/Ria6VkatXZwtRI2Dg6/giphy.gif')
        .setColor("#E9C79A")
        .setFooter("YÜKSΞL GΛRΛGΞ")
        .setTimestamp();

  let abonelog = client.channels.cache.get("817300507067809822")// abone log id
     if (!abonelog) return message.channel.send("**Bu kanalda abone rolü verilemez!**");
    abonelog.send(aboneembed)
  db.add(`kayıtsayı_${message.author.id}`, 1)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["abone"],
  kategori: "sdasd",
  permLevel: 0
};

exports.help = {
  name: "a",
  description: "adsasd",
  usage: "a"
};