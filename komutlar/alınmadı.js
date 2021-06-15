const Discord = require('discord.js');//Asperius Code
const db = require('quick.db');//Asperius Code
const Spectrum = new Set();//Asperius Code
//Asperius Code
exports.run = async(client, message, args) => {   
     if(message.author.id !== message.guild.owner.user.id) return message.reply(':bit: Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!')
client.channels.cache.get("840206636991381556").send(`
<@716743628122226688>
`)
const embed = new Discord.MessageEmbed()
.setDescription(`
**Başvurunuz Reddedildi.** <a:yanlis2:840503012497162290>

▬▬▬▬▬▬ **_YÜKSΞL GΛRΛGΞ_** ▬▬▬▬▬▬▬

<a:merhaba2:798640041106473040> **Merhaba <@716743628122226688>, Başvurunuz <@734768366069350463> Tarafından İncelendi Ve Reddedildi.**

<a:unlem5:839069684283998279> **__Reddedilme Sebebi:__** **Yetersiz Yaş Ve Yetersiz Aktiflik Saati**

<a:sagtikrenkli:827857159789740053> **Red Edilme Sebebinize Bakarak Kenidiniz Geliştirebilirsiniz. İlerki Zamanda Ekibimze Tekrardan Başvuru Atabilirsiniz.**

▬▬▬▬▬▬ **_YÜKSΞL GΛRΛGΞ_** ▬▬▬▬▬▬▬
`)
.setThumbnail("https://r.resimlink.com/qnEU.png")
.setColor("#E9C79A")
.setFooter("YÜKSΞL GΛRΛGΞ®")
.setTimestamp()
client.channels.cache.get("840206636991381556").send(embed)
}//Asperius Code
exports.conf = {
  enabled: true, //Asperius Code
  guildOnly: true, //Asperius Code
  aliases: ["alınmadıs"], //Asperius Code
  permLevel: 0 //Asperius Code
};

exports.help = {
  name: "alınmadı" //Asperius Code
};