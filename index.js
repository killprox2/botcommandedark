const Discord = require('discord.js');
const client = new Discord.Client()
const prefix = "-";

let os = require('os');

client.on('ready', function () {
  console.log("client connecté !")
})

client.login(process.env.TOKEN)

client.on('message', message => {
  if (message.content === '-abs') {   
    message.delete()
      var embed = new Discord.RichEmbed()
      .setTitle("**~~-+-------------[-~~ __Dark Commands__ ~~-]------------+-~~**")
      .setColor(0x00AE86)
      .setDescription("Permet de connaitre toutes les commandes absences")
      .setColor("0xB40404") 
	  .addField("**-sabs**", "Permet de signalé une absence ex: 10/04 Je part en vacance")
	  .addField("**-vabs**", "Permet d'affiché les absences signalé'")
		.addField("**-gabs** + *id site*", "Permet de gérer les absences (commande admin)")
      .setImage("https://i.imgur.com/A1wcXrl.png")
      .setFooter("#__**DarkBot**__# by darkvince37")
  message.channel.sendEmbed(embed)
  }; return
})
client.on('message', message => {
  if (message.content === '-vabs') {   
    message.delete()
		message.channel.send(`http://www.darkpandore.com/listabsence.php`);
  }; return
})
client.on('message', message => {
	if(message.author.bot || message.channel.type == "dm") return;
							const args = message.content.slice(prefix.length).trim().split(/ +/g);
							const command = args.shift().toLowerCase();
							let object = args[0];
							let perms = message.member.permissions;
							if(!perms.has("KICK_MEMBERS")) {
								var pollEmbed = new Discord.RichEmbed()
								.setDescription('Pas la permission "MANAGE_MESSAGES".')
								.setColor(color)
								message.channel.send(pollEmbed)
							}else if(perms.has("KICK_MEMBERS")) {
											if(command === "gabs"){
													if(!object){
																	var err_code = new Discord.RichEmbed()
																	.setTitle('Error 400 - Bad Request')
																	.setDescription("Tu n\'a pas précisé ton ID site! :warning: -gabs ID")
																	.setColor('#e74c3c')
																	message.channel.send(err_code);											 
															}else{
																message.channel.send(`http://www.darkpandore.com/listabsence.php?id=` + object);
		}
	} return
}
})

const mysql = require("mysql");
var connection;

function handleDisconnect() {
  connection = mysql.createConnection({
		host: "sql3.cluster1.easy-hebergement.net",
		user: "darkpandore3",
		password: process.env.MDP,
		database: "darkpandore3"
	}); // Recreate the connection, since
                                                  // the old one cannot be reused.

  connection.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}

handleDisconnect();
client.on('message', message => {
	if (message.content === '-loto') {   
		message.delete()
		var embed = new Discord.RichEmbed()
		.setTitle("**~~-+-------------[-~~ __Dark Loto__ ~~-]------------+-~~**")
		.setColor(0x00AE86)
		.setDescription("Permet de connaitre toutes les commandes du loto")
		.setColor("0xB40404") 
		.addField("\n**-iloto**\n", "Permet de connaitre les inscrits")
		.addField("\n**-rloto**\n", "Permet de connaitre les résultats")
		.addField("\n**-nloto**\n", "Permet de tirer un numéro random ex: -nloto 12 (commande admin)")
		.addField("\n**-lotoadd**\n", "Ajouté un membre au loto (commande admin)")
		.addField("\n**-lotosupp**\n", "Remettre la liste loto a zéro (commande admin)")
		.addField("\n**-lotosuppr**\n", "Remettre les résultat a zéro (commande admin)")
		.addField("\n**-lotosupp+**\n", "Supprimé un joueur du loto (commande admin)")
		.setImage("https://i.imgur.com/A1wcXrl.png")
		.setFooter("#__**DarkBot**__# by darkvince37")
	message.channel.sendEmbed(embed)
	}return
	})
	
	client.on("message", (message) => {
								const args = message.content.slice(prefix.length).trim().split(/ +/g);
								const command = args.shift().toLowerCase();
								let un = args[0];
								let deux = args[1];
								let trois = args[2];
								let quatre = args[3];
								let cinq = args[4];
			let perms = message.member.permissions;
		if(command === "rloto"){
			if(!args[0]){
				var err_code = new Discord.RichEmbed()
				.setTitle('Error 400 - Bad Request')
				.setDescription('Tu n\'a pas précisé le nombre de joueur 99 max!')
				.setColor('#e74c3c')
				message.channel.send(err_code);
}else if(!perms.has("KICK_MEMBERS")){
				var err_code = new Discord.RichEmbed()
				.setTitle('Error 403 - Unauthorized')
				.setDescription('Tu n\'a pas la permission d\'executer cette commande !')
				.setColor('#e74c3c')
				message.channel.send(err_code);
}else{

var code = new Discord.RichEmbed()
																	
																	var sql = "INSERT INTO lotor (un, deux, trois, quatre, cinq) VALUES ('" + un + "', '" + deux + "', '" + trois + "', '" + quatre + "', '" + cinq + "')";
																	
																		connection.query(sql, function (result) {
																			
																			console.log(result);
																		 
																					
																	var embed = new Discord.RichEmbed()
																	.setTitle("**~~-+-------------[-~~ __Dark Loto__ ~~-]------------+-~~**")
																	.setColor(0x00AE86)
																	.addField("**1.**", un)
																	.addField("**2.**", deux)
																	.addField("**3.**", trois)
																	.addField("**4.**", quatre)
																	.addField("**5.**", cinq)
																message.channel.sendEmbed(embed)
																		

	})	}
		}
		})


		client.on('message', message  => {
			if(message.author.bot || message.channel.type == "dm") return;
			
	
				if (message.content === '-lotosupp') { 
					var sql = "DELETE FROM loto";
					var sql2 = "DELETE FROM lotor";
					connection.query(sql, sql2, function (result) {
					message.channel.send("Le loto a était remis a zéro")
					console.log(result);
					})

				}
									});
									
									client.on('message', message  => {
										if(message.author.bot || message.channel.type == "dm") return;
										if(message.guild.roles.find(role => role.name === "~ le Staff ~")){
											let perms = message.member.permissions;
												
												var sql2 = "DELETE FROM lotor";
												connection.query(sql2, function (result) {
												message.channel.send("Le loto a était remis a zéro")
												console.log(result);
												})
							
											}
							
																});
																client.on('message', message  => {
																	if(message.author.bot || message.channel.type == "dm") return;
																	if(message.guild.roles.find(role => role.name === "~ le Staff ~")){
																							const args = message.content.slice(prefix.length).trim().split(/ +/g);
																							const command = args.shift().toLowerCase();
																							let un = args[0];
																											if(command === "lotosupp+"){
																													if(!un){
																																	var err_code = new Discord.RichEmbed()
																																	.setTitle('Error 400 - Bad Request')
																																	.setDescription("Tu n\'a pas précisé le numéro! :warning: -lotosupp+ numero")
																																	.setColor('#e74c3c')
																																	message.channel.send(err_code);
																													 
																													}else{
																																var code = new Discord.RichEmbed()
																																
																																var sql = "DELETE FROM loto WHERE numero =" + un + "";
																																
																																	connection.query(sql, function (result) {
																																		message.channel.send("Le numéro " + un + " a était supprimé")
																																		console.log(result);

																																			})} 
																	}	}});
															
																client.on('message', message  => {
																	if(message.author.bot || message.channel.type == "dm") return;
																	let perms = message.member.permissions;
																	if(!perms.has("KICK_MEMBERS"){
																		if (message.content === '-lotosupp+') { 
																			var sql2 = "DELETE FROM lotor";
																			connection.query(sql2, function (result) {
																			message.channel.send("Le loto a était remis a zéro")
																			console.log(result);
																			})
														
																		}
														
																							});
																							client.on('message', message  => {
																								if(message.author.bot || message.channel.type == "dm") return;
																							
																									if (message.content === '-lotolist') { 
																										
																									
																										message.channel.send("http://www.darkpandore.com/loto.php")
																									
																					
																									
																					
																														}});
							

/*	client.on("message", (message) => {
	if (message.content.startsWith(prefix + 'tloto')) {
		message.delete()
		if(!message.member.hasPermission("MANAGE_MESSAGES")) {
			var pollEmbed = new Discord.RichEmbed()
			.setDescription('Pas la permission "MANAGE_MESSAGES".')
			.setColor(color)
			message.channel.send(pollEmbed)
		}else if(message.member.hasPermission("MANAGE_MESSAGES")) {
			var maissuite = ['Aprix', 'Eh-merce', "So-paroxisme", 'Stoyw', 'Ishtarnel-Nakir', 'Artik-fx', 'Watoo', 'Maiys', 'Londubat', 'Analaween', 'Tet-soin', 'Downshift', 'In-tuable', 'Wytexx', 'Yam-I', 'Nagatsune', 'Zeilla', 'ZeyZey', 'Stroheim', 'Nagazou', 'Leloverdark', 'Ultrawguri', 'Preskapwal', 'Dak-man', 'Hilduren', 'Natrakh', 'Kroonembourg', 'Reyanni', 'Asianax', 'Nanitendayo', 'Soo-vetage', 'Broog', 'Heaven', 'Tashira', 'Lyween', 'Mecho', 'Prying-heart', 'Hook', 'Pedhal', 'Droma', 'Eh-derien-monchou', 'Ipazzio ', 'Golryhol'];				//var maissuite = ['01', '02', "03", '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'];
		var maissuiterdm = Math.floor(Math.random()*maissuite.length);
		var embed = new Discord.RichEmbed()
		.setTitle("**~~-+-------------[-~~ __Dark Loto__ ~~-]------------+-~~**")
		.setColor(0x00AE86)
			.addField("Félicitation à ", maissuite[maissuiterdm])
			message.channel.sendEmbed(embed)}
	}return
	})*/

	
	client.on("message", (message) => {
		if (message.content.startsWith(prefix + 'iloto')) {
			message.delete()	
			message.channel.send("http://www.darkpandore.com/loto.php")}
		})

client.on('message', message  => {
	if(message.author.bot || message.channel.type == "dm") return;
	let perms = message.member.permissions;
			if(!perms.has("KICK_MEMBERS"){
							const args = message.content.slice(prefix.length).trim().split(/ +/g);
							const command = args.shift().toLowerCase();
							let object = args[0];
							let detail = args.slice(1).join(" ");
											if(command === "lotoadd"){
													if(!object){
																	var err_code = new Discord.RichEmbed()
																	.setTitle('Error 400 - Bad Request')
																	.setDescription("Voici un exemple -lotoadd 1 darkvince_")
																	.setColor('#e74c3c')
																	message.channel.send(err_code);
													 
													}else if(!detail){
																	var err_code = new Discord.RichEmbed()
																	.setTitle('Error 400 - Bad Request')
																	.setDescription("Tu n\'a pas précisé les informations :warning: -lotoadd numéro pseudo")
																	.setColor('#e74c3c')
																	message.channel.send(err_code);
													 
															}else{
																	 
																	 
																				
																					var code = new Discord.RichEmbed()
																					.setTitle('Succès :')
																					.setDescription(":white_check_mark: Le joueur a était ajoutée")
									
																					.setColor('#8e44ad')
																					
																					var sql = "INSERT INTO loto (numero, pseudo, date) VALUES ('" + object + "', '" + detail + "', NOW())";
																					
																						connection.query(sql, function (result) {
																							
																							console.log(result);
																							console.log("Number of records inserted: " + result);
																							message.channel.send(code);
																						
																						})
																					}} 
		});

client.on('message', message  => {
	if(message.author.bot || message.channel.type == "dm") return;
							const args = message.content.slice(prefix.length).trim().split(/ +/g);
							const command = args.shift().toLowerCase();
							let object = args[0];
							let detail = args.slice(1).join(" ");
											if(command === "sabs"){
													if(!object){
																	var err_code = new Discord.RichEmbed()
																	.setTitle('Error 400 - Bad Request')
																	.setDescription("Voici un exemple -sabs 10/04 je part en vacance")
																	.setColor('#e74c3c')
																	message.channel.send(err_code);
													 
													}else if(!detail){
																	var err_code = new Discord.RichEmbed()
																	.setTitle('Error 400 - Bad Request')
																	.setDescription("Tu n\'a pas précisé les informations :warning: -absent 10/04 + Information")
																	.setColor('#e74c3c')
																	message.channel.send(err_code);
													 
															}else{
																	 
																	 
																				
																					var code = new Discord.RichEmbed()
																					.setTitle('Succès :')
																					.setDescription(":white_check_mark: Votre Absence a été envoyée")
									
																					.setColor('#8e44ad')
																					
																						var sql = "INSERT INTO absence (pseudo, temps, mule, detail, platform, date) VALUES ('"+ message.author.username +"', 'Aucune information' , '" + object + "', '" + detail + "', 'DISCORD', NOW())";
																						connection.query(sql, function (result) {
																							
																							console.log(result);
																							message.channel.send(code);
																							message.channel.send("Voici un résumé de votre absence: "+ message.author.username +" est absent jusqu'au " + object + " raison "+ detail +" ")
																					message.guild.channels.find("name", "test_admin").send(" Salut le joueur @"+ message.author.username +" est absent jusqu'au **"+ object +"** . Informations supplémentaires : **" + detail + "**");
																						})
																					}} 
																						});


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
		.addField("**-abs**", "Signalé une absence")
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
  }; return
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
				let pseudo = args[1];
				let detail = args.slice(1).join(" ");
						if(command === "fmyes"){
							if(!object){
									var err_code = new Discord.RichEmbed()
									.setTitle('Error 400 - Bad Request')
									.setDescription("Tu n\'a pas précisé le pseudo! :warning: -fmyes pseudo_du_fm + pseudo_du_joueur")
									.setColor('#e74c3c')
									message.channel.send(err_code);
							}else if(!pseudo){
										var err_code = new Discord.RichEmbed()
										.setTitle('Error 400 - Bad Request')
										.setDescription("Tu n\'a pas précisé le pseudo du joueur refusé! :warning: -fmyes pseudo_du_fm + pseudo_du_joueur")
										.setColor('#e74c3c')
										message.channel.send(err_code);
								
								
							}else{
									
									
											try {
											var code = new Discord.RichEmbed()
											.setTitle('Succès :')
											.setDescription(":white_check_mark: Votre réponse a bien était envoyé")
											.setColor('#8e44ad')
											message.channel.send(code);
											message.guild.channels.find("name", "✅commandes_fm_dj").send(" Salut, **"+pseudo+"** le joueur **@"+ message.author.username +"** est OK pour traiter ta commande de fm, n'hésite pas à le MP en jeu lorsque tu le vois connecté ^^");
											} catch (err) {
											console.log(err);
											}
									
							}
					}return
			
			})

			client.on('message', message => {
				if(message.author.bot || message.channel.type == "dm") return;
							const args = message.content.slice(prefix.length).trim().split(/ +/g);
							const command = args.shift().toLowerCase();
							const member = message.author.username.id;
							let pseudo = args[0];
							let detail = args.slice(1).join(" ");
									if(command === "fmno"){
									if(!pseudo){
											var err_code = new Discord.RichEmbed()
											.setTitle('Error 400 - Bad Request')
											.setDescription("Tu n\'a pas précisé le pseudo du joueur refusé! :warning: -fmno personne_refusé + Information sur le refus")
											.setColor('#e74c3c')
											message.channel.send(err_code);
									
									}else if(!detail){
												var err_code = new Discord.RichEmbed()
												.setTitle('Error 400 - Bad Request')
												.setDescription("Tu n\'a pas précisé les informations :warning: -fmno personne_refusé + Information sur le refus")
												.setColor('#e74c3c')
												message.channel.send(err_code);
										
											}else{
												
												
														try {
														var code = new Discord.RichEmbed()
														.setTitle('Succès :')
														.setDescription(":white_check_mark: Votre réponse a bien était envoyé")
														.setColor('#8e44ad')
														message.channel.send(code);
														message.guild.channels.find("name", "✅commandes_fm_dj").send(" Salut, **"+ pseudo+"** malheureusement les Forgemages pensent que ta commande est trop compliquée à réaliser, voici leurs raisons : **" + detail + " **. le DarkBot te recommande de te tourner soit vers l'HDV, soit d'aller voir dans le Livre des Artisans In-Game si personne ne peut t'aider si tu tiens vraiment à fm l'item toi même. Désolé, et bon jeu !");
														} catch (err) {
														console.log(err);
														}
												
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
													message.guild.channels.find("name", "⛔liste-commande-fm").send(hereRole +" Salut le joueur @"+ message.author.username +" souhaiterait une FM. Prenez contact avec lui dès que vous êtes disponible pour cette commande directement dans le jeu ou en MP Discord ! Voici sa commande: **"+ object +"** . Informations supplémentaires sur la FM: **" + detail + "**");
													} catch (err) {
													console.log(err);
													}
											
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
						let hereRole = message.guild.roles.find("name", "Passeurs DJ");
											if(command === "dj"){
												if(!object){
														var err_code = new Discord.RichEmbed()
														.setTitle('Error 400 - Bad Request')
														.setDescription("Tu n\'a pas précisé le donjon! :warning: -dj Nom_du_donjon + Information")
														.setColor('#e74c3c')
														message.channel.send(err_code);
												
												}else if(!detail){
														var err_code = new Discord.RichEmbed()
														.setTitle('Error 400 - Bad Request')
														.setDescription("Tu n\'a pas précisé les informations :warning: -dj Nom_du_donjon + Information")
														.setColor('#e74c3c')
														message.channel.send(err_code);
												
													}else{
														
														
																try {
																var code = new Discord.RichEmbed()
																.setTitle('Succès :')
																.setDescription(":white_check_mark: Votre commande a été envoyée, un Passeurs DJ va prendre contact avec vous dès qu'il sera disponible")
																.setColor('#8e44ad')
																message.channel.send(code);
																message.guild.channels.find("name", "⛔liste_commandes_dj").send(hereRole +" Salut le joueur @"+ message.author.username +" souhaiterait passer un donjon. Prenez contact avec lui dès que vous êtes disponible pour cette commande directement dans le jeu ou en MP Discord ! Voici le donjon en question: **"+ object +"** . Informations supplémentaires sur le passage du donjon: **" + detail + "**");
																} catch (err) {
																console.log(err);
																}
														
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
						let hereRole = message.guild.roles.find("name", "Passeurs DJ");
											if(command === "dj"){
												if(!object){
														var err_code = new Discord.RichEmbed()
														.setTitle('Error 400 - Bad Request')
														.setDescription("Tu n\'a pas précisé le donjon! :warning: -dj Nom_du_donjon + Information")
														.setColor('#e74c3c')
														message.channel.send(err_code);
												
												}else if(!detail){
														var err_code = new Discord.RichEmbed()
														.setTitle('Error 400 - Bad Request')
														.setDescription("Tu n\'a pas précisé les informations :warning: -dj Nom_du_donjon + Information")
														.setColor('#e74c3c')
														message.channel.send(err_code);
												
													}else{
														
														
																try {
																var code = new Discord.RichEmbed()
																.setTitle('Succès :')
																.setDescription(":white_check_mark: Votre commande a été envoyée, un Passeurs DJ va prendre contact avec vous dès qu'il sera disponible")
																.setColor('#8e44ad')
																message.channel.send(code);
																message.guild.channels.find("name", "⛔liste_commandes_dj").send(hereRole +" Salut le joueur @"+ message.author.username +" souhaiterait passer un donjon. Prenez contact avec lui dès que vous êtes disponible pour cette commande directement dans le jeu ou en MP Discord ! Voici le donjon en question: **"+ object +"** . Informations supplémentaires sur le passage du donjon: **" + detail + "**");
																} catch (err) {
																console.log(err);
																}
														
												}
										}return
								
								})
