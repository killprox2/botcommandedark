client.on('message', message => {            
  if (message.content.startsWith(prefix + 'sondage')){ 
    let args = message.content.split(" ").slice(1);
    let thingToEcho = args.join(" ")
    var embed = new Discord.RichEmbed()
      .setTitle("Sondage")
      .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x: ")
      .setColor("0xB40404")
      .setTimestamp()
  message.channel.sendEmbed(embed)
  .then(function (message){
    message.react("Oui")
    message.react("Non")
   }).catch(function(){

   });
  }else{
    return message.reply("Tu n'as pas la permission")
  }})
