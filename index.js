const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "-";
let os = require('os')

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
			.addField("**-bot**", "Permet de connaitre toute les infos du bot")
			.addField("**-ping**", "Permet de connaitre sa latence")
      .addField("**-report**", "Permet de signalé un joueur")
	  .addField("**-clear**", ":warning:*Commande Admin*:warning: Permet de supprimer le tchat")
	  .addField("**-clear+**", ":warning:*Commande Admin*:warning: Permet de supprimer un nombre exacte de message")
      .setImage("https://i.imgur.com/A1wcXrl.png")
      .setFooter("#__**DarkBot**__# by darkvince37")
  message.channel.sendEmbed(embed)
  };
})
client.on("message", (message) => {
if (message.content.startsWith(prefix + 'euromillion')) {
	//var maissuite = ['01', '02', "03", '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'];
	var maissuite = ['01', '02', "03", '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'];
	var maissuiterdm = Math.floor(Math.random()*maissuite.length);
	var maissuite2 = ['01', '02', "03", '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'];
	var maissuiterdm2 = Math.floor(Math.random()*maissuite2.length);
	var maissuite3 = ['01', '02', "03", '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'];
	var maissuiterdm3 = Math.floor(Math.random()*maissuite3.length);
	var maissuite4 =['01', '02', "03", '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'];
	var maissuiterdm4 = Math.floor(Math.random()*maissuite4.length);
	var maissuite5 =['01', '02', "03", '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'];
	var maissuiterdm5 = Math.floor(Math.random()*maissuite5.length);
	var maissuite6 =['01', '02', "03", '04', '05', '06', '07', '08', '09'];
	var maissuiterdm6 = Math.floor(Math.random()*maissuite6.length);
	message.delete()
	message.channel.sendMessage("Voici les numéro de l'euromillion")
	message.channel.sendMessage("Les numéros: **"  + maissuite[maissuiterdm] +"** **" +  maissuite2[maissuiterdm2] + "** **" + maissuite3[maissuiterdm3] +"** **" + maissuite4[maissuiterdm4] + "** **" + maissuite5[maissuiterdm5] + "** n° complémentaire **" + maissuite6[maissuiterdm6] + "**")
}
})

client.on("message", (message) => {
	if (message.content.startsWith(prefix + 'loto')) {

		var maissuite = ['01', '02', "03", '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '50'];
		//var maissuite = ['01', '02', "03", '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'];
		var maissuiterdm = Math.floor(Math.random()*maissuite.length);
      var embed = new Discord.RichEmbed()
      .setTitle("#__**LOTO**__#")
      .setColor(0x00AE86)
			.addField("Numéro: ", maissuite[maissuiterdm])
			.addField("Félicitation à toi", "\ud83d\udc4d")
			message.channel.sendEmbed(embed)
			message.delete()
	}
	})

client.on("message", (message) => {
	
	if(message.content.substring(0, 7) == "-report")
	{
		var commande = message.content.split(" ");
		message.delete()
		if(typeof commande[1] === 'undefined')
		{
			if(message.author.bot === false)
			{
				// Nom d'utilisateur pas entré = afficher l'aide
				message.reply("**Aide pour la commande report :** \n\n Pour rapporter un ou plusieurs utilisateurs ayant un comportement inapproprié, mettre le nom ou les noms des utilisateurs après la commande report. \n\n Vous pouvez également rajouter une raison particulière avec l'attribut `!r:\"Votre raison\"`. \n\n Ne vous amusez pas à abuser cette commande à tout va, merci :wink: ! \n\n **Exemple 1 :** `-report @user` \n **Exemple 2 :** `-report @user1 @user2` \n **Exemple 3 :** `-report @user1 !r:\"Une raison\"`");
			}
		}
		else
		{
			// Vérifier les noms + raison de signalement
			var verifNom = true;
			var raisonSignalement = null;
			var inOptionRaison = false;
			
			for(var i = 1; i < commande.length; i++)
			{
				// Les noms des personnes citées commencent par "<", le caractère suivant étant @
				if(commande[i].charAt(1) !== "@")
				{
					// On ne prend pas en compte l'option -r (raison)
					if(commande[i].substring(0, 4) == "-r:\"")
					{
						raisonSignalement = commande[i].substring(3);
						inOptionRaison = true;
					}
					else
					{
						if(inOptionRaison == false)
						{	
							verifNom = false;
						}
						else
						{
							raisonSignalement = raisonSignalement + " " + commande[i];
						}
					}
				}
			}
			
			if(verifNom === true)
			{
				// Vérification des abus
				var aAppele = false;
				for(var i = 0; i < dernierAppel.length; i++)
				{
					if(dernierAppel[i][0] == message.author.id)
					{
						// Un signalement toutes les 3 minutes autorisé
						if((message.createdTimestamp - dernierAppel[i][1]) < 180000)
						{
							aAppele = true;
						}
						else
						{
							aAppele = false;
							dernierAppel.splice(i, 1);
						}
					}
				}
				
				if(aAppele == false)
				{
					dernierAppel.push([message.author.id, message.createdTimestamp]);
					
					var moderateurs = new Array();
					
					var sontAvertis = true;
					
					message.channel.guild.roles.forEach(function(role)
					{
						// Chercher les modérateurs parmi tous les rôles
						
						if (role.hasPermission('BAN_MEMBERS'))
						{
							role.members.forEach(function(member)
							{
								var estDejaPrevenu = false;
								for(var j = 0; j < moderateurs.length; j++)
								{
									if(member == moderateurs[j])
									{
										// Est déjà prévenu
										estDejaPrevenu = true;
									}
								}
									
								if(estDejaPrevenu == false)
								{
									moderateurs.push(member);
								
									// Fonction conversion timestamp -> Date
									function timeConverter(timestamp)
									{
										var a = new Date(timestamp);
										var tabMois = ['Janv.','Févr.','Mars','Avri.','Mai.','Juin','Juil.','Août','Sept.','Octo.','Nove.','Déce.'];
										var annee = a.getFullYear();
										var mois = tabMois[a.getMonth()];
										var date = a.getDate();
										var heure = a.getHours();
										var min = a.getMinutes();
										var sec = a.getSeconds();
										var time = "le " + date + ' ' + mois + ' ' + annee + ' à ' + heure + 'h' + min + ':' + sec ;
										return time;
									}
									
									// Reporter les utilisateurs
									var MP = "Un rapport soumis " + timeConverter(message.createdTimestamp) + " par **" + message.author.username + "** a été effectué à l'encontre de ";
									
									message.mentions.users.forEach(function(user)
									{
										MP = MP + "@" + user.username + " ";
									});
									
									MP =  MP + "sur *" + member.guild.name + "/" + message.channel.name + "*";
									
									// Prise en charge de la raison du signalement
									if(raisonSignalement != null)
									{
										MP = MP + " pour la raison suivante : *" + raisonSignalement + "*";
									}
									
									try
									{
										member.user.sendMessage(MP);
									}
									catch(e)
									{
										sontAvertis = false;
									}
								}
							});
						}
					});
					
					if(sontAvertis == true)
					{
						message.reply("Signalement effectué :wink: !");
					}
				}
			}
		}
	}
});

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
		if (message.content === '-bot') {   
			message.delete()
				var embed = new Discord.RichEmbed()
				.setTitle("***BOT Stats***")
				.setColor("RANDOM")
				.addField("• Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
				.addField("• Users", `${client.users.size.toLocaleString()}`, true)
				.addField("• Servers", `${client.guilds.size.toLocaleString()}`, true)
				.addField("• Channels ", `${client.channels.size.toLocaleString()}`, true)
				.addField("• Node", `${process.version}`, true)
				.addField("• CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
				.addField("• Arch", `\`${os.arch()}\``, true)
				.addField("• Platform", `\`\`${os.platform()}\`\``, true)
				.addField("API Latency", `${Math.round(client.ping)}ms`)  //
				.setImage("https://i.imgur.com/A1wcXrl.png")
		message.channel.sendEmbed(embed)
		};return})
	
  client.on('message', message => {
    if (message.content === '-clear') {   
      if(message.member.hasPermission("MANAGE_MESSAGES")){
				message.channel.fetchMessages()
				
        .then(function(list){
					message.channel.bulkDelete(list)
					message.delete(1000);
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
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const member = message.mentions.users.first();
    
    if (command === "bug") {
        
        let reason = args.slice(0).join(" ");
        let hereRole = message.guild.roles.find("name", "Modérateur Discord");
              
				message.delete()
				if (!reason) {
					message.channel.send("**Aide pour la commande BUG :** \n\n Pour utilisé la commande BUG, mettais votre bug remarqué \n\n Ne vous amusez pas à abuser cette commande à tout va, merci :wink: ! \n\n **Exemple :** `-bug Il y a un bug au niveau d'ici` \n");
				} else {
					message.delete()
					message.channel.send(`:white_check_mark: **${message.author.username}**, Votre bug a été envoyée.`);
          message.guild.channels.find("name", "bugs").send(hereRole +` Salut ${message.author.username} rapport un bug le voici: ${reason}.`);
				}
        

    } return })

    client.on('message', message => {
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const command = args.shift().toLowerCase();
      const member = message.mentions.users.first();
    if (command === "idee") {
        
      let idee = args.slice(0).join(" ");
      let hereRole = message.guild.roles.find("name", "Modérateur Discord");
            
			message.delete()
			if (!idee) {
				message.channel.send("**Aide pour la commande IDEE :** \n\n Pour utilisé la commande IDEE, mettais votre idée \n\n Ne vous amusez pas à abuser cette commande à tout va, merci :wink: ! \n\n **Exemple :** `-idee Voici mon idée ajoute sa` \n");
			} else {
      message.delete()
      message.guild.channels.find("name", "bugs").send(hereRole +` Salut **${message.author.username}** a une idée la voici: ${idee}.`);
			message.channel.send(`:white_check_mark: **${message.author.username}**, Votre idée a était envoyé.`);
			}

  } return })
  client.on('message', (message) => {
    if(message.author.bot || message.channel.type == "dm") return;

        const prefix = "-";
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

    if(command === "clear+"){
                if(!args[0]){
                        var err_code = new Discord.RichEmbed()
                        .setTitle('Error 400 - Bad Request')
                        .setDescription('Tu n\'a pas précisé le nombre de message !')
                        .setColor('#e74c3c')
                        message.channel.send(err_code);
                }else if(!message.member.hasPermission("MANAGE_MESSAGES")){
                        var err_code = new Discord.RichEmbed()
                        .setTitle('Error 403 - Unauthorized')
                        .setDescription('Tu n\'a pas la permission d\'executer cette commande !')
                        .setColor('#e74c3c')
                        message.channel.send(err_code);
                }else if(isNaN(args[0])){
                        var err_code = new Discord.RichEmbed()
                        .setTitle('Error 400 - Bad Request')
                        .setDescription('L\'argument donné n\'est pas un nombre !')
                        .setColor('#e74c3c')
                        message.channel.send(err_code);
                }else if(parseInt(args[0]) > 99){
                        var err_code = new Discord.RichEmbed()
                        .setTitle('Error 400 - Bad Request')
                        .setDescription('Tu ne peux effacer que 99 messages max. !')
                        .setColor('#e74c3c')
                        message.channel.send(err_code);
                }else{
                        message.channel.fetchMessages()
                        .then(messages => {
                                try {
                                        message.channel.bulkDelete(parseInt(args[0]));
																				var clear_code = new Discord.RichEmbed()
                                .setTitle('Succès :')
                                .setDescription(args[0]+' message(s) ont été supprimé !')
                                .setColor('#8e44ad')
                                message.channel.send(clear_code);
                                } catch (err) {
                                console.log(err);
                                }
                        })
                }
        }

})



          client.on('message', message => {
            const args = message.content.slice(prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();
            const member = message.mentions.users.first();
            
            if (command === "fm") {
                
                let object = args[0];
                let detail = args.slice(1).join(" ");
								let hereRole = message.guild.roles.find("name", "Forgemages");
								message.delete()
								if (!detail) {
									
									message.channel.send("**Aide pour la commande FM :** \n\n Pour utilisé la commande FM, mettre l'object souhaité + les informations du FM. \n\n Ne vous amusez pas à abuser cette commande à tout va, merci :wink: ! \n\n **Exemple :** `-fm Arc_Volkorne 2% exo machin terre` \n");
								} else {
									message.channel.send(":white_check_mark: Votre commande a été envoyée, un forgemage va prendre contact avec vous dès qu'il sera disponible")
									message.delete()
									message.guild.channels.find("name", "liste-commande-fm").send(hereRole + ` Salut le joueur **${message.author.username}** souhaiterait une FM. Prenez contact avec lui dès que vous êtes disponible pour cette commande directement dans le jeu ou en MP Discord ! Voici sa commande: ${object}. Informations supplémentaires sur la FM: J'ai besoin de :' ${detail}`);
	
								}
               
                                      // message.channel.send(hereRole + ` Salut `+ 'le joueur ' + message.member.displayName + ` souhaiterai: ${object}. Information supplémentaire sur le FM: ${detail}`);
                   
            } return }
					)
					
					client.on('message', message => {
            const args = message.content.slice(prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();
            const member = message.mentions.users.first();
            
            if (message.content === "fm") {
                
						  	let fmtext = message.content === "-fm";
								message.delete()
								if (!fmtext) {
									
									message.channel.send("**Utilisé la commande FM :** \n\n Pour utilisé la commande FM, mettre l'object souhaité + les informations du FM. \n\n Ne vous amusez pas à abuser cette commande à tout va, merci :wink: ! \n\n **Exemple :** `-fm Arc_Volkorne 2% exo machin terre` \n");
								}
               
                                      // message.channel.send(hereRole + ` Salut `+ 'le joueur ' + message.member.displayName + ` souhaiterai: ${object}. Information supplémentaire sur le FM: ${detail}`);
                   
            } return }
          )
