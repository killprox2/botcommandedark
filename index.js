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
      .setTitle("#__**HELP**__#")
      .setColor(0x00AE86)
      .setDescription("Permet de connaitre toutes les commandes")
      .setColor("0xB40404") 
      .addField("**-fm** :arrow_right: *object_souhaite Informations_sur_ce_que_vous_voulez_faire_comme_fm*", "Permet de passer une commande a un forgemage")
      .addField("**-bug** :arrow_right: *decrire_le_bug*", "Permet de rapporter un bug sur le bot")
      .addField("**-idee** :arrow_right: *votre_idee*", "Permet de donner vos idée pour le bot")
      .addField("**-info**", "Permet de connaitre les infos du Discord")
      .addField("**-ping**", "Permet de connaitre sa latence")
      .addField("**-clear**", ":warning:*Commande Admin*:warning: Permet de supprimer le tchat")
      .setImage("https://i.imgur.com/A1wcXrl.png")
      .setFooter("#__**DarkBot**__#")
  message.channel.sendEmbed(embed)
  };
})

client.on('message', message => {
  if (message.content === '-info') {   
    message.delete()
      var embed = new Discord.RichEmbed()
      .addField("Nom du Discord", message.guild.name)
      .addField("Crée le", message.guild.createdAt)
      .addField("Tu as rejoint le", message.member.joinedAt)
      .addField("Utilisateur sur le Discord", message.guild.memberCount)
      .addField("Nom du BOT", client.user.username)
      .setColor('#01FE23')
      .setImage("https://i.imgur.com/A1wcXrl.png")
  message.channel.sendEmbed(embed)
  };return})

  client.on('message', message => {
    if (message.content === '-clear') {   
      if(message.member.hasPermission("MANAGE_MESSAGES")){
        message.channel.fetchMessages()
        .then(function(list){
          message.channel.bulkDelete(list)
        }, function(err){message.channel.send("erreur")})}
    }return
  })

  client.on('message', message => {
    if (message.content === '-ping') {   
      message.delete()
      message.channel.sendMessage(`Temps de latence avec le serveur: **${message.createdTimestamp - Date.now()}** ms`);

    }return
  })

  client.on('message', message => {
    if (message.content.startsWith(prefix + "sondage")) {
      if(message.member.hasPermission("MANAGE_MESSAGES")){
      let age = args[0];
      var embed = new Discord.RichEmbed()
          embed.setDescription("Sondage")
          embed.addField(age, "Répondre avec :white_check_mark: ou :x:")
          embed.setColor("#01A1FE")
          embed.setImage("https://i.imgur.com/A1wcXrl.png")
      message.guild.channels.find("name", "sondage").sendEmbed(embed)
      .then(function (message){
          message.react("✔")
          message.react("✘")
      }).catch(function() {
      });
  }else{
    return message.reply("Tu n'as pas la permission.")
  }}
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
        message.guild.channels.find("name", "bugs").send(hereRole +` Salut **${message.author.username}** rapport un bug le voici: ${reason}.`);
      message.channel.send(`:white_check_mark: **${message.author.username}**, Votre bug a été envoyée.`);

    } return })

    client.on('message', message => {
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      const member = message.mentions.users.first();
    if (command === "idee") {
        
      let idee = args.slice(0).join(" ");
      let hereRole = message.guild.roles.find("name", "Modérateur Discord");
            
      if(!idee) idee = "Aucune idée";
      if(idee)
      message.delete()
      message.guild.channels.find("name", "bugs").send(hereRole +` Salut **${message.author.username}** a une idée la voici: ${idee}.`);
    message.channel.send(`:white_check_mark: **${message.author.username}**, Votre idée a était envoyé.`);

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
                message.channel.send(":white_check_mark: Votre commande a été envoyée, un forgemage va prendre contact avec vous dès qu'il sera disponible")
               
                    message.delete()
                    message.guild.channels.find("name", "liste-commande-fm").send(hereRole + ` Salut le joueur **${message.author.username}** souhaiterait une FM. Prenez contact avec lui dès que vous êtes disponible pour cette commande directement dans le jeu ou en MP Discord ! Voici sa commande: ${object}. Informations supplémentaires sur la FM: J'ai besoin de : ${detail}`);
                     // message.channel.send(hereRole + ` Salut `+ 'le joueur ' + message.member.displayName + ` souhaiterai: ${object}. Information supplémentaire sur le FM: ${detail}`);
                   
            } return }
          )
