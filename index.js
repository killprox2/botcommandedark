const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "-";


client.on('ready', function () {
  console.log("client connecté !")
})

client.login(process.env.TOKEN)

/*client.on('message', message => {
if (message.content === '-sondage'){
  if(message.guild.id == "Modérateur Discord"){
    let args = message.content.split(" ").slice(1);
    let thingToEcho = args.join("")
    var embed = new Discord.RichEmbed()
      .setDescription("Sondage")
      .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x: ")
      .setColor("0xB40404")
      .setTimestamp()
  message.guild.channels.find("name", "sondage").sendEmbed(embed)
  .then(function (message){
    message.react("Oui")
    message.react("Non")
  }).catch(function(){

    });
  }else{
    return message.reply("Tu n'as pas la permission.")
}}})*/
client.on('message', message => {
            
  if (message.content === '-sondage'){
      
    let args = message.content.split(" ").slice(1);
    let thingToEcho = args.join("")
    var embed = new Discord.RichEmbed()
      .setTitle("Sondage")
      .addField(thingToEcho, "Répondre avec :white_check_mark: ou :x: ")
      .setColor("0xB40404")
      .setTimestamp()
      message.channel.sendEmbed(embed)
  .then(function (message){
    message.react("Oui")
    message.react("Non")
   })
  }})
  
  client.on('message', message => {
    if (message.content === '-help2') {   
        var embed = new Discord.RichEmbed()
        .setTitle("HELP")
        .setDescription("Permet de connaitre toute les commandes")
        .setColor("0xB40404") 
    message.channel.sendEmbed(embed)
    };
})

client.on('message', message => {
    if (message.content === '-help') {   
        message.delete()
      message.channel.send({
        embed: {
          title: 'HELP',
          description: `Permet de connaitre toute les commandes`,
          fields: [
            {
              name: '-fm object_souhaitais Information_du_fm',
              value: 'Permet de passer une commande a un joueur'
            },
            {
              name: '-bug decrire_le_bug',
              value: `Permet de rapporter un bug sur le bot`
            }
          ],
      }
      });
    };
})

  client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const member = message.mentions.users.first();
    
    if (command === "bug") {
        
        let reason = args.slice(0).join(" ");
        let hereRole = message.guild.roles.find("name", "Modérateur Discord");
              
        if(!reason) reason = "Aucune raison";
        if(reason)
        message.delete()
        message.guild.channels.find("name", "bugs").send(hereRole +` Salut ` + message.member.displayName + ` rapport un bug le voici: ${reason}.`);
             
    } return })


          client.on('message', message => {
            const args = message.content.slice(prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();
            const member = message.mentions.users.first();
            
            if (command === "fm") {
                
                let object = args[0];
                let detail = args.slice(1).join(" ");
                let hereRole = message.guild.roles.find("name", "Forgemages");
                if(!object) object = "Aucun object indiqué";
                if(!detail) detail = "Aucune information indiqué";
                message.channel.send('Votre commande a était envoyé')
               
                    message.delete()
                    message.guild.channels.find("name", "liste-commande-fm").send(hereRole + ` Salut `+ 'le joueur ' + message.member.displayName + ` souhaiterai: ${object}. Information supplémentaire sur le FM: ${detail}`);
                     // message.channel.send(hereRole + ` Salut `+ 'le joueur ' + message.member.displayName + ` souhaiterai: ${object}. Information supplémentaire sur le FM: ${detail}`);
                   
            } return }
          )
