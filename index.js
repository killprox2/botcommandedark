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
      .setTitle("**HELP**")
      .setColor(0x00AE86)
      .setDescription("Permet de connaitre toutes les commandes")
      .setColor("0xB40404") 
      .addField("**-fm** :arrow_forward: ***object_souhaite Informations_sur_ce_que_vous_voulez_faire_comme_fm***", "Permet de passer une commande a un forgemage")
      .addField("**-bug** :arrow_forward: ***decrire_le_bug***", "Permet de rapporter un bug sur le bot")
      .addField("**-idee** :arrow_forward: ***votre_idee***", "Permet de donner vos idée pour le bot")
      .setImage("https://i.imgur.com/A1wcXrl.png")
  message.channel.sendEmbed(embed)
  };
})
client.on('message', message => {
  if (message.content === '-report') {   
    message.delete()
    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reports")
    .setColor("#15f153")
    .addField("Joueur report", `${rUser} with ID: ${rUser.id}`)
    .addField("Report par", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Temps", message.createdAt)
    .addField("Raison", rreason)
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


 /* client.on('message', message => {
    if(command == "report"){
      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!rUser) return message.channel.send("Impossible de trouver l'utilisateur.");
      let rreason = args.join(" ").slice(22);

      let reportEmbed = new Discord.RichEmbed()
     .setDescription("Reports")
     .setColor("#15f153")
     .addField("Joueur report", `${rUser} with ID: ${rUser.id}`)
     .addField("Report par", `${message.author} with ID: ${message.author.id}`)
     .addField("Channel", message.channel)
     .addField("Temps", message.createdAt)
     .addField("Raison", rreason)
  
     let reportschannel = message.guild.channels.find(`name`, "bugs");
     if(!reportschannel) return message.channel.send("Impossible de trouver le canal des reports.");

     message.delete();
     reportschannel.send(reportEmbed);
    };return})*/

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
