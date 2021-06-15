const Discord = require('discord.js');//Asperius Code
const db = require('quick.db');//Asperius Code
const Spectrum = new Set();//Asperius Code
//Asperius Code
exports.run = async(client, message, args) => {   
     if(message.author.id !== message.guild.owner.user.id) return message.reply(':bit: Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!')
client.channels.cache.get("840206636991381556").send(`
<@813405101598834699>
`)
const embed = new Discord.MessageEmbed()
.setDescription(`
**Başvurunuz Onaylandı!** <a:dogru2:825315793067704361>

▬▬▬▬▬▬ **_YÜKSΞL GΛRΛGΞ_** ▬▬▬▬▬▬▬

<a:merhaba2:798640041106473040> **Merhaba <@813405101598834699>, Başvurunuz <@734768366069350463> Tarafından İncelendi Ve Onaylandı.**

<a:sagtikrenkli:827857159789740053> **・3 Gün İçinde <@734768366069350463> Kullanıcısı İle Ses Odasına Girmeniz Gerekiyor**

<a:loading:813338262345089025> <#840946533184569344> <a:loading:813338262345089025>

<a:isik:811167306083598336> **・Eğer 3 Gün İçerisinde Alım Odasına Girmezseniz Başvurunuz İptal Edilecektir.**

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
  aliases: ["alındıs"], //Asperius Code
  permLevel: 0 //Asperius Code
};

exports.help = {
  name: "alındı" //Asperius Code
};