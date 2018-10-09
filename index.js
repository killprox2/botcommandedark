const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "-";


let os = require('os')

client.on('ready', function () {
  console.log("client connecté !")
})

client.login(process.env.TOKEN)

client.on("guildMemberAdd", member => {
	
	const bvn = member.guild.channels.find(m => m.name === "message-de-bienvenue-i");
	if (!bvn) return;
	const embed = new Discord.RichEmbed()
		.setColor('#009114')
		.setAuthor(member.user.tag, member.user.avatarURL)
		.setTitle("Arrivée d'un nouvel utilisateur")
		.addField("Un nouvel utilisateur vient d'arriver", `Il s'agit de [${member.user.tag}](https://discordapp.com/)`, true)
		.setDescription("J'espère que tu t'y plairas")
		.addField("Ma commande est `-help`", "Si tu souhaites savoir mon fonctionnement")
		.addField(`Nombre de membres après l'arrivée de __${member.user.tag}__`, member.guild.memberCount)
		.setFooter(`ID : ${member.user.id} | DARKBOT`)
		.setTimestamp()
bvn.send({embed})
});

client.on("message", (message) => {
	const args1 = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args1.shift().toLowerCase();
	if (command === 'absent') {

		let split = ';';
		args = args1.join(' ').split(split);
		
		for (var i = 0; i < args.length; i++) args[i] = args[i].trim()
		
	if(!args[0]) return message.channel.send("Je ne peut pas enregistré ton absence : `-absent nbrperso ; pseudodiscord ; temps ; nomperso1 ; nomperso2 ; nomperso3 etc")
		
		var nbrpoll = +args[0]
		
		if (nbrpoll < 1 || nbrpoll > 9) return message.reply('Tu peut mettre seulement entre 1 et 9 choix');
		let Timer = args[1];
		if(!args[1]) return message.reply("Tu doit mettre une date!")
			if(!args[2]) return message.reply("Tu doit mettre un nom de perso!")

				var choix
		
				if(nbrpoll == "1") choix = `perso: ${args[3]}`
				if(nbrpoll == "2") choix = `perso: ${args[3]}\nperso: ${args[4]}`
				if(nbrpoll == "3") choix = `perso: ${args[3]}\nperso: ${args[4]}\nperso: ${args[5]}`
				if(nbrpoll == "4") choix = `perso: ${args[3]}\nperso: ${args[4]}\nperso: ${args[5]}\nperso: ${args[6]}`
				if(nbrpoll == "5") choix = `perso: ${args[3]}\nperso: ${args[4]}\nperso: ${args[5]}\nperso: ${args[6]}\nperso: ${args[7]}`
				if(nbrpoll == "6") choix = `perso: ${args[3]}\nperso: ${args[4]}\nperso: ${args[5]}\nperso: ${args[6]}\nperso: ${args[7]}\nperso: ${args[8]}`
				if(nbrpoll == "7") choix = `perso: ${args[3]}\nperso: ${args[4]}\nperso: ${args[5]}\nperso: ${args[6]}\nperso: ${args[7]}\nperso: ${args[8]}\nperso: ${args[9]}`
				if(nbrpoll == "8") choix = `perso: ${args[3]}\nperso: ${args[4]}\nperso: ${args[5]}\nperso: ${args[6]}\nperso: ${args[7]}\nperso: ${args[8]}\nperso: ${args[9]}\nperso: ${args[10]}`
				if(nbrpoll == "9") choix = `perso: ${args[3]}\nperso: ${args[4]}\nperso: ${args[5]}\nperso: ${args[6]}\nperso: ${args[7]}\nperso: ${args[8]}\nperso: ${args[9]}\nperso: ${args[10]}\nperso: ${args[11]}`
				
					var member = message.guild.members.get(message.author.id)

					const embed = new Discord.RichEmbed()
					.setColor(member.displayHexColor)
					.setTitle('Retour le ' + args[2])
					.setDescription(choix)
					.setFooter("Joueur en question " + message.author.username)
					.setTimestamp()
	
					message.channel.send(embed)
					let role = 'absent';
					let gRole = message.guild.roles.find(`name`, role);
					let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1]);
							(rMember.addRole(gRole.id));
							message.channel.send(`:white_check_mark: Tu est bien noté absent a ton retour n'oublie pas de faire la commande -absentstop`)
							let str = "<@351809725513465867>";
							let id = str.replace(/[<@!>]/g, '');
							client.fetchUser(id)
							.then(user => {user.send(embed);

	})}
	
	return
	})

	client.on("message", (message) => {
		const args1 = message.content.slice(prefix.length).trim().split(/ +/g);
		const command = args1.shift().toLowerCase();
		if (command === 'absentstop') {
			let split = ';';
			args = args1.join(' ').split(split);
			if(!args[0]) return message.channel.send("Je ne peut pas enlever ton absence : `-absentstop tonpseudodiscord")
			let role = 'absent';
			let gRole = message.guild.roles.find(`name`, role);
			let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
			(rMember.removeRole(gRole.id));
			message.channel.send(`:white_check_mark:Tu n'est plus absent`)
			let str = "<@351809725513465867>";
      let id = str.replace(/[<@!>]/g, '');
			client.fetchUser(id)
			.then(user => {user.send(`**${message.author.username}** n'est plus absent`);

		})}return
		})

client.on('message', message => {
  const args1 = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args1.shift().toLowerCase();
	if (command === 'sondage+') { 

		let split = ';';

		args = args1.join(' ').split(split);
		
		for (var i = 0; i < args.length; i++) args[i] = args[i].trim()
		
	if(!args[0]) return message.channel.send("je ne peut pas creer de sondage vide! syntaxe : `-sondage+ nbrchoix ; question ; choix1 ; choix2 ..... choixX` (9 choix max)")
		
		var nbrpoll = +args[0]
		
		 if (!isNumeric(nbrpoll)) {
			return message.reply(`Desolé mais tu peut pas mettre` + nbrpoll + ` choix! C'est pas un chiffre quoi`);
		}
		
		 if (nbrpoll < 2 || nbrpoll > 9) return message.reply('Tu peut mettre seulement entre 2 et 9 choix');
		
		if(!args[1]) return message.reply("Tu doit mettre une question!")
			if(!args[2]) return message.reply("Tu doit mettre des choix!")
				if(!args[3]) return message.reply("Tu doit mettre 2 choix minimum!")
		
		
		var choix
		
	if(nbrpoll == "2") choix = `:one: ${args[2]}\n:two: ${args[3]}`
	if(nbrpoll == "3") choix = `:one: ${args[2]}\n:two: ${args[3]}\n:three: ${args[4]}`
	if(nbrpoll == "4") choix = `:one: ${args[2]}\n:two: ${args[3]}\n:three: ${args[4]}\n:four: ${args[5]}`
	if(nbrpoll == "5") choix = `:one: ${args[2]}\n:two: ${args[3]}\n:three: ${args[4]}\n:four: ${args[5]}\n:five: ${args[6]}`
	if(nbrpoll == "6") choix = `:one: ${args[2]}\n:two: ${args[3]}\n:three: ${args[4]}\n:four: ${args[5]}\n:five: ${args[6]}\n:six: ${args[7]}`
	if(nbrpoll == "7") choix = `:one: ${args[2]}\n:two: ${args[3]}\n:three: ${args[4]}\n:four: ${args[5]}\n:five: ${args[6]}\n:six: ${args[7]}\n:seven: ${args[8]}`
	if(nbrpoll == "8") choix = `:one: ${args[2]}\n:two: ${args[3]}\n:three: ${args[4]}\n:four: ${args[5]}\n:five: ${args[6]}\n:six: ${args[7]}\n:seven: ${args[8]}\n:eight: ${args[9]}`
	if(nbrpoll == "9") choix = `:one: ${args[2]}\n:two: ${args[3]}\n:three: ${args[4]}\n:four: ${args[5]}\n:five: ${args[6]}\n:six: ${args[7]}\n:seven: ${args[8]}\n:eight: ${args[9]}\n:nine: ${args[10]}`
		
		var member = message.guild.members.get(message.author.id)
	
		const embed = new Discord.RichEmbed()
				.setColor(member.displayHexColor)
				.setTitle(args[1])
				.setDescription(choix)
				.setFooter("Sondage de " + message.author.tag)
				.setTimestamp()
	
				message.channel.send(embed).then(function (message) {
					message.react("\u0031\u20E3");
					message.react("\u0032\u20E3");
		if(nbrpoll >= "3")  message.react("\u0033\u20E3"); 
		if(nbrpoll >= "4")  message.react("\u0034\u20E3");
		if(nbrpoll >= "5")  message.react("\u0035\u20E3");
		if(nbrpoll >= "6")  message.react("\u0036\u20E3");
		if(nbrpoll >= "7")  message.react("\u0037\u20E3");
		if(nbrpoll >= "8")  message.react("\u0038\u20E3");
		if(nbrpoll >= "9")  message.react("\u0039\u20E3");
				})
		function isNumeric(val) {
  return Number(parseFloat(val)) === val;
}
	}})

client.on('message', message => {

	if (message.content === prefix + "ntf_on") {
					var role = message.guild.roles.find('name', 'Notification');
							message.member.addRole(role)
							var embedon = new Discord.RichEmbed()
									.setDescription("Notification")
									.addField("Succès ! Vous avez bien activé vos notifications.", "Vous pouvez à tout instant désactiver les notifications avec la commande -ntf_off )")
									.setColor("0xD7DF01")
							message.channel.sendEmbed(embedon)
					if (!role) return message.reply("Une erreur est survenue ! Rôle non trouvé. Réssayer plus tard.")
	}
	if (message.content === prefix + "ntf_off") {
			var roledel = message.guild.roles.find('name', 'Notification');
							message.member.removeRole(roledel)
							var embedoff = new Discord.RichEmbed()
									.setDescription("Notification")
									.addField("Succès ! Vous avez bien désactivé vos notifications.", "Vous pouvez à tout instant réactiver les notifications avec la commande -ntf_on")
									.setColor("0xD7DF01")
							message.channel.sendEmbed(embedoff)
							if (role) return message.reply("Une erreur est survenue ! Réssayer plus tard.")
	}})
	
client.on('message', message => {
  if (message.content === '-help') {   
    message.delete()
      var embed = new Discord.RichEmbed()
      .setTitle("**~~-+-------------[-~~ __Dark Commands__ ~~-]------------+-~~**")
      .setColor(0x00AE86)
      .setDescription("Permet de connaitre toutes les commandes")
      .setColor("0xB40404") 
	  .addField("**-fm** *object_souhaite Informations_sur_ce_que_vous_voulez_faire_comme_fm*", "Permet de passer une commande a un forgemage")
	  .addField("**-loto**", "Permet de connaitre les commandes du loto")
		.addField("**-id**", "Permet de connaitre ton ID")
		.addField("**-sondage+**", "Permet de créer des sondages ")
		.addField("**-dmall**", "Permet de DM tous les joueurs")
			.addField("**-info**", "Permet de connaitre les infos du Discord")
			.addField("**-bot**", "Permet de connaitre toute les infos du bot")
			.addField("**-ping**", "Permet de connaitre sa latence")
	  //.addField("**-report**", "Permet de signalé un joueur")
	  .addField("**-bug** *decrire_le_bug*", "Permet de rapporter un bug sur le bot")
      .addField("**-idee** *votre_idee*", "Permet de donner vos idée pour le bot")
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
	client.on('message', message => {
		if (message.content === '-loto') {   
		  message.delete()
			var embed = new Discord.RichEmbed()
			.setTitle("**~~-+-------------[-~~ __Dark Loto__ ~~-]------------+-~~**")
			.setColor(0x00AE86)
			.setDescription("Permet de connaitre toutes les commandes du loto")
			.setColor("0xB40404") 
			.addField("\n**-tloto**\n", "Permet d'effectué le tirage")
			.addField("\n**-nloto**\n", "Permet d'effectué le tirage d'un numéro")
			.addField("\n**-rloto**\n", "Permet de connaitre les résultats")
			.addField("\n**-iloto**\n", "Permet de connaitre les informations")
			.addField("\n**-mloto**\n", "Permet de connaitre la liste des membres inscrits")
			.setImage("https://i.imgur.com/A1wcXrl.png")
			.setFooter("#__**DarkBot**__# by darkvince37")
		message.channel.sendEmbed(embed)
		}return
		})

	
		
	  client.on('message', message => {
		if (message.content === '-iloto') {   
		  message.delete()
			var embed = new Discord.RichEmbed()
			.setTitle("**~~-+-------------[-~~ __Dark Loto__ ~~-]------------+-~~**")
			.setColor(0x00AE86)
			.setColor("0xB40404") 
			.addField("**1.**", "Pour participer MP Scharky in Game")
			.addField("**2.**", "FIN des inscriptions 13/10/18")
			.addField("**3.**", "Il est possible que le même pseudo soit tiré au sort à plusieurs reprises. Le joueur ne peut gagner que le premier lot sur lequel il est tombé ")


			message.channel.sendEmbed(embed)
		}return
	  })
	  client.on('message', message => {
		if (message.content === '-rloto') {   
		  message.delete()
			var embed = new Discord.RichEmbed()
			.setTitle("**~~-+-------------[-~~ __Dark Loto__ ~~-]------------+-~~**")
			.setColor(0x00AE86)
			.addField("**1.**", "undefined")
			.addField("**2.**", "undefined")
			.addField("**3.**", "undefined")
			.addField("**4.**", "undefined")
			.addField("**5.**", "undefined")
		message.channel.sendEmbed(embed)
		}return
		})
	  client.on("message", (message) => {
		if (message.content.startsWith(prefix + 'tloto')) {
			message.delete()
			if(!message.member.hasPermission("MANAGE_MESSAGES")) {
				var pollEmbed = new Discord.RichEmbed()
				.setDescription('Pas la permission "MANAGE_MESSAGES".')
				.setColor(color)
				message.channel.send(pollEmbed)
			}else if(message.member.hasPermission("MANAGE_MESSAGES")) {
			var maissuite = ['Aprix', 'Eh-merce', "So-paroxisme", 'Stoyw', 'Ishtarnel-Nakir', 'Artik-fx', 'Watoo', 'Maiys', 'Londubat', 'Analaween', 'Tet-soin', 'Downshift', 'In-tuable', 'Wytexx', 'Yam-I', 'Nagatsune', 'Zeilla', 'ZeyZey', 'Stroheim', 'Nagazou', 'Watoo', 'Leloverdark'];
			//var maissuite = ['01', '02', "03", '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'];
			var maissuiterdm = Math.floor(Math.random()*maissuite.length);
		  var embed = new Discord.RichEmbed()
		  .setTitle("**~~-+-------------[-~~ __Dark Loto__ ~~-]------------+-~~**")
		  .setColor(0x00AE86)
				.addField("Félicitation à ", maissuite[maissuiterdm])
				message.channel.sendEmbed(embed)}
		}return
		})

		client.on("message", (message) => {
			const args = message.content.slice(prefix.length).trim().split(/ +/g);
			const command = args.shift().toLowerCase();
			if (command ==='nloto') {
				if(!args[0]){
					var err_code = new Discord.RichEmbed()
					.setTitle('Error 400 - Bad Request')
					.setDescription('Tu n\'a pas précisé le nombre de joueur 99 max!')
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
					.setDescription('Tu ne peux pas mettre plus que 99 max. !')
					.setColor('#e74c3c')
					message.channel.send(err_code);
	}else{

					 //rand = randomnum(1, args[0]);
					 let rand = Math.floor((Math.random(1) * args[0]));
					var embed = new Discord.RichEmbed()
				.setTitle("**~~-+-------------[-~~ __Dark Loto__ ~~-]------------+-~~**")
				.setColor(0x00AE86)
				.addField("Le numéro ", rand)
				message.channel.sendEmbed(embed)}

				

			}})
		client.on("message", (message) => {
			if (message.content.startsWith(prefix + 'mloto')) {
				message.delete()	
				var maissuite = ['Aprix', 'Eh-merce', "So-paroxisme", 'Stoyw', 'Ishtarnel-Nakir', 'Artik-fx', 'Watoo', 'Maiys', 'Londubat', 'Analaween', 'Tet-soin', 'Downshift', 'In-tuable', 'Wytexx', 'Yam-I', 'Nagatsune', 'Zeilla', 'ZeyZey', 'Stroheim', 'Nagazou', 'Watoo', 'Leloverdark'];
				//var maissuite = ['01', '02', "03", '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'];
				var maissuiterdm = Math.floor(Math.random()*maissuite.length);
				var embed = new Discord.RichEmbed()
				.setTitle("**~~-+-------------[-~~ __Dark Loto__ ~~-]------------+-~~**")
				.setColor(0x00AE86)
				.addField("Liste joueur inscrit ", maissuite)
					message.channel.sendEmbed(embed)}
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
      //message.channel.sendMessage(`Temps de latence avec le serveur: **${message.createdTimestamp - Date.now()}** ms`);
	  let msgping1 = new Date();

	  let botping = new Date() - message.createdAt;
  
	  let msgping2 = new Date() - msgping1;
  
	  let pingembed = new Discord.RichEmbed()
		  .setColor("RANDOM")
		  .addField('API Ping : ', Math.floor(client.ping) + 'ms')
		  .addField('Bot Ping : ', Math.floor(botping) + 'ms')
		  .addField('Message Ping : ', '~' + Math.round(msgping2) + 'ms')
		  .setTimestamp(new Date())
		  .setFooter(`Demandé par ${message.author.tag}`);
  
		  
	   message.channel.send(pingembed);
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
		if(command === "dmall") {
			let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
			if(!message.member.hasPermission("ADMINISTRATOR"))
				return message.reply({embed: {
				  color: 0xC64540,
				  description: "Pas la permission."
				}});
			let DMALL = args.join(" ").slice(0);
		  if (!DMALL) return message.channel.send({embed: {
			color: 0xC64540,
			description: `${message.member} S'il vous plaît entrez un message à dm pour les joueurs du discord.`
		  }});
	  
		  message.guild.members.forEach((player) => {
			  message.guild.member(player).send({embed: {
				color: 0x00c1c1,
				title: `**~~-+-------------[-~~ __Dark_BOT__ ~~-]------------+-~~**`,
				description: `${DMALL}

				`+ ` ***Message de ` +` **${message.author.username}*** `
				
				
			  }});
		  });
		  message.channel.send({embed: {
			color: 0xC64540,
			description: ":white_check_mark: Tous les joueurs de ce serveur discord ont reçu votre message."
		}});
	  }
})

client.on('message', message => {
	if(message.content.startsWith(prefix + 'id')) {
		message.channel.send(":white_check_mark: ID envoyé en MP")
		message.author.createDM().then(channel => {
			channel.send(`:white_check_mark: Voici ton ID: **${message.author.id}**`);
  });
}
})

	
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
      message.guild.channels.find("name", "bugs").send(hereRole +` Salut ${member.user.tag} a une idée la voici: ${idee}.`);
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
                        .setDescription('Tu n\'a pas précisé le nombre de message 99 max! EXEMPLE: -clear+ 99')
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
        }return

})



          client.on('message', message => {
			if(message.author.bot || message.channel.type == "dm") return;
            const args = message.content.slice(prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();
            const member = message.author.username.id;
            let object = args[0];
            let detail = args.slice(1).join(" ");
			let hereRole = message.guild.roles.find("name", "Forgemages");
								if(command === "fm"){
									if(!object){
											var err_code = new Discord.RichEmbed()
											.setTitle('Error 400 - Bad Request')
											.setDescription("Tu n\'a pas précisé l'object! :warning: -fm Object + Information")
											.setColor('#e74c3c')
											message.channel.send(err_code);
									
									}else if(!detail){
											var err_code = new Discord.RichEmbed()
											.setTitle('Error 400 - Bad Request')
											.setDescription("Tu n\'a pas précisé les informations :warning: -fm Object + Information")
											.setColor('#e74c3c')
											message.channel.send(err_code);
									
										}else{
											
											
													try {
													var code = new Discord.RichEmbed()
													.setTitle('Succès :')
													.setDescription(":white_check_mark: Votre commande a été envoyée, un forgemage va prendre contact avec vous dès qu'il sera disponible")
													.setColor('#8e44ad')
													message.channel.send(code);
													message.guild.channels.find("name", "liste-commande-fm").send(hereRole +" Salut le joueur @"+ message.author.username +" souhaiterait une FM. Prenez contact avec lui dès que vous êtes disponible pour cette commande directement dans le jeu ou en MP Discord ! Voici sa commande: **"+ object +"** . Informations supplémentaires sur la FM: **" + detail + "**");
													} catch (err) {
													console.log(err);
													}
											
									}
							}return
					
					})
					
            
