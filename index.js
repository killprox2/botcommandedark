const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "-";


client.on('ready', function () {
  console.log("client connecté !")
})

client.login(process.env.TOKEN)
            

  client.on('message', message => {
    if (message.content === '-help') {   
      message.delete()
        var embed = new Discord.RichEmbed()
        .setTitle("HELP")
        .setDescription("Permet de connaitre toutes les commandes")
        .setColor("0xB40404") 
        .addField("**-fm** oject_souhaite Informations_sur_ce_que_vous_voulez_faire_comme_fm", "Permet de passer une commande a un forgemage")
        .addField("**-bug** decrire_le_bug", "Permet de rapporter un bug sur le bot")
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
        message.guild.channels.find("name", "bugs").send(hereRole +` Salut ` + "@"+ message.author.tag +` rapport un bug le voici: ${reason}.`);
      message.channel.send(`:white_check_mark: **${message.author.username}**, Votre bug a été envoyée.`);

    } return })

    client.on('message', message => {
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      const member = message.mentions.users.first();
      
      if (command === "new") {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas les droits pour ajoutés des nouvelles !");
          
          let news = args.slice(0).join(" ");
          
          message.delete()
          message.channel.send("La nouvelle a était envoyé")      
          message.author.send(`${news}.`);
               
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
                message.channel.send("Votre commande a été envoyée, un forgemage va prendre contact avec vous dès qu'il sera disponible")
               
                    message.delete()
                    message.guild.channels.find("name", "liste-commande-fm").send(hereRole + ` Salut `+ 'le joueur ' + message.member.displayName + ` souhaiterait une FM. Prenez contact avec lui dès que vous êtes disponible pour cette commande directement dans le jeu ou en MP Discord ! Voici sa commande: ${object}. Informations supplémentaires sur la FM: J'ai besoin de : ${detail}`);
                     // message.channel.send(hereRole + ` Salut `+ 'le joueur ' + message.member.displayName + ` souhaiterai: ${object}. Information supplémentaire sur le FM: ${detail}`);
                   
            } return }
          )
