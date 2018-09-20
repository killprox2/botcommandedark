const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "-";


client.on('ready', function () {
  console.log("client connecté !")
})

client.login(process.env.TOKEN)
            

  client.on('message', message => {
    if (message.content === '-help2') {   
      message.delete()
        var embed = new Discord.RichEmbed()
        .setTitle("HELP")
        .setDescription("Permet de connaitre toute les commandes")
        .setColor("0xB40404") 
        .addField("-fm oject_souhaitais Information_du_fm", "Permet de passer une commande a un joueur")
        .addField("-bug decrire_le_bug", "Permet de rapporter un bug sur le bot")
    message.channel.sendEmbed(embed)
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
