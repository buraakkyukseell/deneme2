const Discord = require('discord.js');//Asperius Code
const db = require('quick.db');//Asperius Code
const Spectrum = new Set();//Asperius Code
//Asperius Code
exports.run = async(client, message, args) => {   
     if(message.author.id !== message.guild.owner.user.id) return message.reply(':bit: Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!')
client.channels.cache.get("817300507067809822")
const embed = new Discord.MessageEmbed()
.setDescription(`
 <a:bildirim:838763840996638770> **YÜKSΞL GΛRΛGΞ ABONE ROL** <a:bildirim:838763840996638770>

 <a:tik5:841463041244921876> *Abone Rolü Nedir ?*
 
 <a:tik5:841463041244921876> **_Abone Rolü Olanlar <#817303021305987072> Odasını Görebilecektir Ve Save Dosyalarına Erişebilecektir._**
 
 <a:tik5:841463041244921876> *Abone Rolü Nasıl Alabilirim ?*
 
 <a:tik5:841463041244921876> **_Aşağıda Vermiş Olduğumuz Gibi Kanala ABone Olup Herhangi Videoya Like Atmanız Gerek._**
 
 <a:tik5:841463041244921876> **_Yetkililerimiz Sizin Attığınız Fotoğrafı Doğruladıktan Sonra Abone Rolü Vericektir Ve Sizde <#817303021305987072> Odasını Görebileceksiniz._**
 
 <a:tik5:841463041244921876> **_SS Attıktan Sonra Yetkililerimiz Müsait Olamayabilirler, Lütfen Sabırla Bekleyiniz._**
 
 **Tekrardan Aramıza Hoşgeldiniz**  <a:kalp:805906630054117436>`)
.setThumbnail("https://r.resimlink.com/lNv4.png")
.setImage("https://r.resimlink.com/1vduagR.png")
.setColor("#E9C79A")
.setFooter("YÜKSΞL GΛRΛGΞ®")
.setTimestamp()
client.channels.cache.get("817300507067809822").send(embed)
}//Asperius Code
exports.conf = {
  enabled: true, //Asperius Code
  guildOnly: true, //Asperius Code
  aliases: ["abone-sss"], //Asperius Code
  permLevel: 0 //Asperius Code
};

exports.help = {
  name: "abone-ss" //Asperius Code
};