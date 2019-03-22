const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';

const os = require('os');

client.on('ready', () => {
  console.log('client connecté !');
});

client.login(process.env.TOKEN);

client.on('message', (message) => {
  if (message.content === '-abs') {
    message.delete();
    const embed = new Discord.RichEmbed()
      .setTitle('**~~-+-------------[-~~ __Dark Commands__ ~~-]------------+-~~**')
      .setColor(0x00AE86)
      .setDescription('Permet de connaitre toutes les commandes absences')
      .setColor('0xB40404')
	  			.addField('**-sabs**', 'Permet de signaler une absence, par exexemple : 10/04 Je pars en vacances')
      .addField('**-vabs**', "Permet d'afficher les absences signalées'")
      .addField("**-absupp+** + *id de l'absence*", 'Permet de supprimer une absence (commande admin)')
      .setImage('https://i.imgur.com/A1wcXrl.png')
      .setFooter('#__**DarkBot**__# by darkvince37');
    message.channel.sendEmbed(embed);
  }
});
client.on('message', (message) => {
  if (message.content === '-vabs') {
    message.delete();
    message.channel.send('http://www.darkpandore.com/listabsence.php');
  }
});

const mysql = require('mysql');
let connection;

function handleDisconnect() {
  connection = mysql.createConnection({
    host: 'sql3.cluster1.easy-hebergement.net',
    user: 'darkpandore3',
    password: process.env.MDP,
    database: 'darkpandore3',
  }); // Recreate the connection, since
  // the old one cannot be reused.

  connection.connect((err) => { // The server is either down
    if (err) { // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    } // to avoid a hot loop, and to allow our node script to
  }); // process asynchronous requests in the meantime.
  // If you're also serving http, display a 503 error.
  connection.on('error', (err) => {
    console.log('db error', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect(); // lost due to either server restart, or a
    } else { // connnection idle timeout (the wait_timeout
      throw err; // server variable configures this)
    }
  });
}

handleDisconnect();
client.on('message', (message) => {
  if (message.content === '-loto') {
    message.delete();
    const embed = new Discord.RichEmbed()
      .setTitle('**~~-+-------------[-~~ __Dark Loto__ ~~-]------------+-~~**')
      .setColor(0x00AE86)
      .setDescription('Permet de connaitre toutes les commandes du loto')
      .setColor('0xB40404')
      .addField('\n**-iloto**\n', 'Permet de connaitre les inscrits')
      .addField('\n**-rloto**\n', "Permet d'afficher les résultats (commande admin)")
      .addField('\n**-nloto**\n', 'Permet de tirer un numéro random ex: -nloto 12 (commande admin)')
      .addField('\n**-lotoadd**\n', 'Ajouter un membre au loto (commande admin)')
      .addField('\n**-lotosupp**\n', 'Remettre la liste loto a zéro (commande admin)')
      .addField('\n**-lotosuppr**\n', 'Remettre les résultats à zéro (commande admin)')
      .addField('\n**-lotosupp+**\n', 'Supprime un joueur du loto (commande admin)')
      .setImage('https://i.imgur.com/A1wcXrl.png')
      .setFooter('#__**DarkBot**__# by darkvince37');
    message.channel.sendEmbed(embed);
  }
});
client.on('message', (message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === 'nloto') {
    if (!args[0]) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 400 - Bad Request')
        .setDescription('Tu n\'as pas précisé le nombre de joueurs 99 max!')
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else if (!message.member.hasPermission('KICK_MEMBERS')) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 403 - Unauthorized')
        .setDescription('Tu n\'as pas la permission d\'exécuter cette commande !')
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else if (isNaN(args[0])) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 400 - Bad Request')
        .setDescription('L\'argument donné n\'est pas un nombre !')
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else if (parseInt(args[0]) > 99) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 400 - Bad Request')
        .setDescription('Tu ne peux pas mettre plus que 99 max. !')
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else {
				 // rand = randomnum(1, args[0]);
				 const rand = Math.floor((Math.random(1) * args[0]));
      const embed = new Discord.RichEmbed()
        .setTitle('**~~-+-------------[-~~ __Dark Loto__ ~~-]------------+-~~**')
        .setColor(0x00AE86)
        .addField('Le numéro ', rand);
      message.channel.send('Voici la liste des numéros: http://www.darkpandore.com/loto.php');
      message.channel.sendEmbed(embed);
    }
  }
});
client.on('message', (message) => {
  if (message.author.bot || message.channel.type == 'dm') return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const member = message.author.username.id;
  const pseudo = args[0];
  const classe = args[1];
  const lvl = args[2];

  if (command === 'inscription') {
    if (!pseudo) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 400 - Bad Request')
        .setDescription("Tu n\'as pas précisé ton pseudo! :warning: -inscription pseudo + classe + lvl")
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else if (!classe) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 400 - Bad Request')
        .setDescription("Tu n\'as pas précisé ta classe! :warning: -inscription pseudo + classe + lvl")
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else if (!lvl) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 400 - Bad Request')
        .setDescription("Tu n\'as pas précisé ton level ! :warning: -inscription pseudo + classe + lvl")
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else {
      try {
        const code = new Discord.RichEmbed()
          .setTitle('Succès :')
          .setDescription(':white_check_mark: Votre inscription a bien été envoyée')
          .setColor('#8e44ad');
        const sql = `INSERT INTO event (pseudo, classe, lvl) VALUES ('${pseudo}', '${classe}', '${lvl}')`;

        connection.query(sql, (result) => {
          console.log(result);
          console.log(`Number of records inserted: ${result}`);
          message.guild.channels.find('name', '📛inscriptions_events').send(`🆕**${pseudo}** avec son **${classe}** niveau **${lvl}** s'est inscrit à l'event`);
          message.channel.send(code);
        });
        const sql2 = 'SELECT COUNT(pseudo) as total FROM event';

        const query = connection.query(sql2, (err, result) => {
					 console.log(`Total Records:- ${result[0].total}`);
					 message.guild.channels.find('name', '📛inscriptions_events').send(`Il y a maintenant **${result[0].total}** joueurs d'inscrits pour cet event`);
					 message.guild.channels.find('name', '🎉event_en_cours').send(`Il y a maintenant **${result[0].total}** joueurs d'inscrits pour cet event`);
        });


      //  message.guild.channels.find('name', '🎉event_en_cours').send(`Il y a maintenant **${sql2}** d'inscrits pour cet event`);
      } catch (err) {
        console.log(err);
      }
    }
  }
});
client.on('message', (message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const un = args[0];
  const deux = args[1];
  const trois = args[2];
  const quatre = args[3];
  const cinq = args[4];
  if (command === 'rloto') {
    if (!args[0]) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 400 - Bad Request')
        .setDescription('Tu n\'as pas précisé le nom des gagnants ex: -rloto darkvince Hildu Deuss RV Ygg!')
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else if (!message.member.hasPermission('KICK_MEMBERS')) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 403 - Unauthorized')
        .setDescription('Tu n\'a pas la permission d\'executer cette commande !')
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else {
      const code = new Discord.RichEmbed();

      const sql = `INSERT INTO lotor (un, deux, trois, quatre, cinq) VALUES ('${un}', '${deux}', '${trois}', '${quatre}', '${cinq}')`;

      connection.query(sql, (result) => {
        console.log(result);


        const embed = new Discord.RichEmbed()
          .setTitle('**~~-+-------------[-~~ __Dark Loto__ ~~-]------------+-~~**')
          .setColor(0x00AE86)
          .addField('**1.**', un)
          .addField('**2.**', deux)
          .addField('**3.**', trois)
          .addField('**4.**', quatre)
          .addField('**5.**', cinq);
        message.channel.sendEmbed(embed);
      });
    }
  }
});

client.on('message', (message) => {
  if (message.author.bot || message.channel.type == 'dm') return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const un = args[0];
  if (command === 'absupp+') {
    if (!un) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 400 - Bad Request')
        .setDescription("Tu n\'as pas précisé l'id de l'absence! :warning: -absupp+ id")
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else if (!message.member.hasPermission('KICK_MEMBERS')) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 403 - Unauthorized')
        .setDescription('Tu n\'as pas la permission d\'exécuter cette commande !')
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else {
      const code = new Discord.RichEmbed();

      const sql = `DELETE FROM absence WHERE id =${un}`;

      connection.query(sql, (result) => {
        message.channel.send(`L'absence ${un} a été supprimée`);
        console.log(result);
      });
    }
  }
});
client.on('message', (message) => {
  if (message.author.bot || message.channel.type == 'dm') return;
  if (message.content === '-lotosupp') {
    if (!message.member.hasPermission('KICK_MEMBERS')) {
      const err_code = new Discord.RichEmbed()
        .setTitle('Error 403 - Unauthorized')
        .setDescription('Tu n\'as pas la permission d\'exécuter cette commande !')
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else {
      const sql = 'DELETE FROM loto';
      connection.query(sql, (result) => {
        message.channel.send('Le loto a été remis à zéro');
        console.log(result);
      });
    }
  }
});


client.on('message', (message) => {
  if (message.author.bot || message.channel.type == 'dm') return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const un = args[0];
  if (command === 'lotosupp+') {
    if (!un) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 400 - Bad Request')
        .setDescription("Tu n\'as pas précisé le numéro! :warning: -lotosupp+ numéro")
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else if (!message.member.hasPermission('KICK_MEMBERS')) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 403 - Unauthorized')
        .setDescription('Tu n\'as pas la permission d\'exécuter cette commande !')
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else {
      const code = new Discord.RichEmbed();

      const sql = `DELETE FROM loto WHERE numero =${un}`;

      connection.query(sql, (result) => {
        message.channel.send(`Le numéro ${un} a été supprimé`);
        console.log(result);
      });
    }
  }
});

client.on('message', (message) => {
  if (message.author.bot || message.channel.type == 'dm') return;
  if (message.content === '-lotosuppr') {
    if (!message.member.hasPermission('KICK_MEMBERS')) {
      const err_code = new Discord.RichEmbed()
        .setTitle('Error 403 - Unauthorized')
        .setDescription('Tu n\'as pas la permission d\'exécuter cette commande !')
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else {
      const sql2 = 'DELETE FROM lotor';
      connection.query(sql2, (result) => {
        message.channel.send('Les résultats du loto a été remis à zéro');
        console.log(result);
      });
    }
  }
});
client.on('message', (message) => {
  if (message.author.bot || message.channel.type == 'dm') return;
  if (message.content === '-iremove') {
    if (!message.member.hasPermission('KICK_MEMBERS')) {
      const err_code = new Discord.RichEmbed()
        .setTitle('Error 403 - Unauthorized')
        .setDescription('Tu n\'as pas la permission d\'exécuter cette commande !')
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else {
      const sql2 = 'DELETE FROM event';
      connection.query(sql2, (result) => {
        message.channel.send("L'event a été remis à zéro");
        console.log(result);
      });
    }
  }
});

client.on('message', (message) => {
  if (message.author.bot || message.channel.type == 'dm') return;

  if (message.content === '-lotolist') {
    message.channel.send('http://www.darkpandore.com/loto.php');
  }
});


client.on('message', (message) => {
  if (message.content.startsWith(`${prefix}iloto`)) {
    message.delete();
    message.channel.send('http://www.darkpandore.com/loto.php');
  }
});

client.on('message', (message) => {
  if (message.author.bot || message.channel.type == 'dm') return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const object = args[0];
  const detail = args.slice(1).join(' ');
  if (command === 'lotoadd') {
    if (!object) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 400 - Bad Request')
        .setDescription('Voici un exemple -lotoadd 1 darkvince_')
        .setColor('#e74c3c');
      message.channel.send(err_code);
    }	else if (!message.member.hasPermission('KICK_MEMBERS')) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 403 - Unauthorized')
        .setDescription('Tu n\'as pas la permission d\'exécuter cette commande !')
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else if (!detail) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 400 - Bad Request')
        .setDescription("Tu n\'as pas précisé les informations :warning: -lotoadd numéro pseudo")
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else {
      const code = new Discord.RichEmbed()
        .setTitle('Succès :')
        .setDescription(':white_check_mark: Le joueur a été ajouté')

        .setColor('#8e44ad');

      const sql = `INSERT INTO loto (numero, pseudo, date) VALUES ('${object}', '${detail}', NOW())`;

      connection.query(sql, (result) => {
        console.log(result);
        console.log(`Number of records inserted: ${result}`);
        message.channel.send(code);
      });
    }
  }
});

client.on('message', (message) => {
  if (message.author.bot || message.channel.type == 'dm') return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const object = args[0];
  const detail = args.slice(1).join(' ');
  if (command === 'sabs') {
    if (!object) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 400 - Bad Request')
        .setDescription('Voici un exemple -sabs 10/04 je pars en vacances')
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else if (!message.member.hasPermission('KICK_MEMBERS')) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 403 - Unauthorized')
        .setDescription('Tu n\'as pas la permission d\'exécuter cette commande !')
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else if (!detail) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 400 - Bad Request')
        .setDescription("Tu n\'as pas précisé les informations :warning: -absent 10/04 + Informations")
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else {
      const code = new Discord.RichEmbed()
        .setTitle('Succès :')
        .setDescription(':white_check_mark: Votre Absence a été envoyée')

        .setColor('#8e44ad');

      const sql = `INSERT INTO absence (pseudo, temps, mule, detail, platform, date) VALUES ('${message.author.username}', 'Aucune information' , '${object}', '${detail}', 'DISCORD', NOW())`;
      connection.query(sql, (result) => {
        console.log(result);
        message.channel.send(code);
        message.channel.send(`Voici un résumé de votre absence: ${message.author.username} est absent jusqu'au ${object} raison ${detail} `);
        message.guild.channels.find('name', 'test_admin').send(` Salut le joueur @${message.author.username} est absent jusqu'au **${object}** . Informations supplémentaires : **${detail}**`);
      });
    }
  }
});


client.on('message', (message) => {
  const args1 = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args1.shift().toLowerCase();
  if (command === 'sondage+') {
    const split = ';';

    args = args1.join(' ').split(split);

    for (let i = 0; i < args.length; i++) args[i] = args[i].trim();

    if (!args[0]) return message.channel.send('Je ne peux pas créer de sondage vide! syntaxe : `-sondage+ nbrchoix ; question ; choix1 ; choix2 ..... choixX` (9 choix max)');
    const nbrpoll = +args[0];

		 if (!isNumeric(nbrpoll)) {
      return message.reply(`Desolé mais tu ne peux pas mettre${nbrpoll} choix! C'est pas un chiffre quoi`);
    }

		 if (nbrpoll < 2 || nbrpoll > 9) return message.reply('Tu peux mettre seulement entre 2 et 9 choix');

    if (!args[1]) return message.reply('Tu dois mettre une question!');
    if (!args[2]) return message.reply('Tu dois mettre des choix!');
    if (!args[3]) return message.reply('Tu dois mettre 2 choix minimum!');


    let choix;

    if (nbrpoll == '2') choix = `:one: ${args[2]}\n:two: ${args[3]}`;
    if (nbrpoll == '3') choix = `:one: ${args[2]}\n:two: ${args[3]}\n:three: ${args[4]}`;
    if (nbrpoll == '4') choix = `:one: ${args[2]}\n:two: ${args[3]}\n:three: ${args[4]}\n:four: ${args[5]}`;
    if (nbrpoll == '5') choix = `:one: ${args[2]}\n:two: ${args[3]}\n:three: ${args[4]}\n:four: ${args[5]}\n:five: ${args[6]}`;
    if (nbrpoll == '6') choix = `:one: ${args[2]}\n:two: ${args[3]}\n:three: ${args[4]}\n:four: ${args[5]}\n:five: ${args[6]}\n:six: ${args[7]}`;
    if (nbrpoll == '7') choix = `:one: ${args[2]}\n:two: ${args[3]}\n:three: ${args[4]}\n:four: ${args[5]}\n:five: ${args[6]}\n:six: ${args[7]}\n:seven: ${args[8]}`;
    if (nbrpoll == '8') choix = `:one: ${args[2]}\n:two: ${args[3]}\n:three: ${args[4]}\n:four: ${args[5]}\n:five: ${args[6]}\n:six: ${args[7]}\n:seven: ${args[8]}\n:eight: ${args[9]}`;
    if (nbrpoll == '9') choix = `:one: ${args[2]}\n:two: ${args[3]}\n:three: ${args[4]}\n:four: ${args[5]}\n:five: ${args[6]}\n:six: ${args[7]}\n:seven: ${args[8]}\n:eight: ${args[9]}\n:nine: ${args[10]}`;

    const member = message.guild.members.get(message.author.id);

    const embed = new Discord.RichEmbed()
      .setColor(member.displayHexColor)
      .setTitle(args[1])
      .setDescription(choix)
      .setFooter(`Sondage de ${message.author.tag}`)
      .setTimestamp();

    message.channel.send(embed).then((message) => {
      message.react('\u0031\u20E3');
      message.react('\u0032\u20E3');
      if (nbrpoll >= '3') message.react('\u0033\u20E3');
      if (nbrpoll >= '4') message.react('\u0034\u20E3');
      if (nbrpoll >= '5') message.react('\u0035\u20E3');
      if (nbrpoll >= '6') message.react('\u0036\u20E3');
      if (nbrpoll >= '7') message.react('\u0037\u20E3');
      if (nbrpoll >= '8') message.react('\u0038\u20E3');
      if (nbrpoll >= '9') message.react('\u0039\u20E3');
    });
    function isNumeric(val) {
      return Number(parseFloat(val)) === val;
    }
  }
});


client.on('message', (message) => {
  if (message.content === `${prefix}ntf_on`) {
    var role = message.guild.roles.find('name', 'Notification');
    message.member.addRole(role);
    const embedon = new Discord.RichEmbed()
      .setDescription('Notification')
      .addField('Succès ! Vous avez bien activé vos notifications.', 'Vous pouvez à tout instant désactiver les notifications avec la commande -ntf_off )')
      .setColor('0xD7DF01');
    message.channel.sendEmbed(embedon);
    if (!role) return message.reply('Une erreur est survenue ! Rôle non trouvé. Réessayer plus tard.');
  }
  if (message.content === `${prefix}ntf_off`) {
    const roledel = message.guild.roles.find('name', 'Notification');
    message.member.removeRole(roledel);
    const embedoff = new Discord.RichEmbed()
      .setDescription('Notification')
      .addField('Succès ! Vous avez bien désactivé vos notifications.', 'Vous pouvez à tout instant réactiver les notifications avec la commande -ntf_on')
      .setColor('0xD7DF01');
    message.channel.sendEmbed(embedoff);
    if (role) return message.reply('Une erreur est survenue ! Réessayer plus tard.');
  }
});

client.on('message', (message) => {
  if (message.content === '-help') {
    message.delete();
    const embed = new Discord.RichEmbed()
      .setTitle('**~~-+-------------[-~~ __Dark Commands__ ~~-]------------+-~~**')
      .setColor(0x00AE86)
      .setDescription('Permet de connaitre toutes les commandes')
      .setColor('0xB40404')
	  .addField('**-fm** *object_souhaite Informations_sur_ce_que_vous_voulez_faire_comme_fm*', 'Permet de passer une commande a un forgemage')
      .addField('**-loto**', 'Permet de connaitre les commandes du loto')
      .addField('**-abs**', 'Permet de signaler une absence qui sera envoyée au Staff. Utilisation de cette commande vous évite un kick pour inactivité')
      .addField('**-id**', 'Permet de connaitre ton ID unique sur Discord')
      .addField('**-sondage+**', 'Permet de créer des sondages ')
      .addField('**-dmall**', 'Permet de MP tous les membres du serveur en un coup (commande admin)')
      .addField('**-info**', 'Permet de connaitre les infos du Discord')
      .addField('**-bot**', 'Permet de connaitre toute les infos du bot')
      .addField('**-ping**', 'Permet de connaitre sa latence')
	  // .addField("**-report**", "Permet de signalé un joueur")
	  .addField('**-bug** *decrire_le_bug*', 'Permet de rapporter un bug sur le bot')
      .addField('**-idee** *votre_idee*', 'Permet de donner vos idées pour le bot')
	 .addField('**-clear**', ':warning:*Commande Admin*:warning: Permet de supprimer le tchat(commande admin)')
	  .addField('**-clear+**', ':warning:*Commande Admin*:warning: Permet de supprimer un nombre exact de messages')
      .setImage('https://i.imgur.com/A1wcXrl.png')
      .setFooter('#__**DarkBot**__# by darkvince37');
    message.channel.sendEmbed(embed);
  }
});
client.on('message', (message) => {
  if (message.content.startsWith(`${prefix}euromillion`)) {
    // var maissuite = ['01', '02', "03", '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90'];
    const maissuite = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'];
    const maissuiterdm = Math.floor(Math.random() * maissuite.length);
    const maissuite2 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'];
    const maissuiterdm2 = Math.floor(Math.random() * maissuite2.length);
    const maissuite3 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'];
    const maissuiterdm3 = Math.floor(Math.random() * maissuite3.length);
    const maissuite4 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'];
    const maissuiterdm4 = Math.floor(Math.random() * maissuite4.length);
    const maissuite5 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50'];
    const maissuiterdm5 = Math.floor(Math.random() * maissuite5.length);
    const maissuite6 = ['01', '02', '03', '04', '05', '06', '07', '08', '09'];
    const maissuiterdm6 = Math.floor(Math.random() * maissuite6.length);
    message.delete();
    message.channel.sendMessage("Voici les numéros de l'euromillion");
    message.channel.sendMessage(`Les numéros: **${maissuite[maissuiterdm]}** **${maissuite2[maissuiterdm2]}** **${maissuite3[maissuiterdm3]}** **${maissuite4[maissuiterdm4]}** **${maissuite5[maissuiterdm5]}** n° complémentaire **${maissuite6[maissuiterdm6]}**`);
  }
});


client.on('message', (message) => {
  if (message.content === '-info') {
    message.delete();
    const embed = new Discord.RichEmbed()
      .addField('Nom du Discord', message.guild.name)
      .addField('Crée le', message.guild.createdAt)
      .addField('Tu as rejoint le', message.member.joinedAt)
      .addField('Utilisateur sur le Discord', message.guild.memberCount)
      .addField('Nom du BOT', client.user.username)
      .setColor('#01FE23')
      .setImage('https://i.imgur.com/A1wcXrl.png');
    message.channel.sendEmbed(embed);
  }
});

client.on('message', (message) => {
  if (message.content === '-bot') {
    message.delete();
    const embed = new Discord.RichEmbed()
      .setTitle('***BOT Stats***')
      .setColor('RANDOM')
      .addField('• Mem Usage', `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
      .addField('• Users', `${client.users.size.toLocaleString()}`, true)
      .addField('• Servers', `${client.guilds.size.toLocaleString()}`, true)
      .addField('• Channels ', `${client.channels.size.toLocaleString()}`, true)
      .addField('• Node', `${process.version}`, true)
      .addField('• CPU', `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
      .addField('• Arch', `\`${os.arch()}\``, true)
      .addField('• Platform', `\`\`${os.platform()}\`\``, true)
      .addField('API Latency', `${Math.round(client.ping)}ms`) //
      .setImage('https://i.imgur.com/A1wcXrl.png');
    message.channel.sendEmbed(embed);
  }
});

client.on('message', (message) => {
  if (message.content === '-clear') {
    if (message.member.hasPermission('MANAGE_MESSAGES')) {
      message.channel.fetchMessages()

        .then((list) => {
          message.channel.bulkDelete(list);
          message.delete(1000);
        }, (err) => { message.channel.send('erreur'); });
    }
  }
});


client.on('message', (message) => {
  if (message.content === '-ping') {
    message.delete();
    // message.channel.sendMessage(`Temps de latence avec le serveur: **${message.createdTimestamp - Date.now()}** ms`);
	  const msgping1 = new Date();

	  const botping = new Date() - message.createdAt;

	  const msgping2 = new Date() - msgping1;

	  const pingembed = new Discord.RichEmbed()
		  .setColor('RANDOM')
		  .addField('API Ping : ', `${Math.floor(client.ping)}ms`)
		  .addField('Bot Ping : ', `${Math.floor(botping)}ms`)
		  .addField('Message Ping : ', `~${Math.round(msgping2)}ms`)
		  .setTimestamp(new Date())
		  .setFooter(`Demandé par ${message.author.tag}`);


	   message.channel.send(pingembed);
  }
});


client.on('message', (message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const member = message.mentions.users.first();

  if (command === 'bug') {
    const reason = args.slice(0).join(' ');
    const hereRole = message.guild.roles.find('name', 'Modérateur Discord');

    message.delete();
    if (!reason) {
      message.channel.send("**Aide pour la commande BUG :** \n\n Pour utiliser la commande BUG, mettez votre bug remarqué. \n\n Ne vous amusez pas à abuser cette commande à tout va, merci :wink: ! \n\n **Exemple :** `-bug Il y a un bug au niveau d'ici` \n");
    } else {
      message.delete();
      message.channel.send(`:white_check_mark: **${message.author.username}**, Votre bug a été envoyé. Merci pour votre report`);
      message.guild.channels.find('name', 'bugs').send(`${hereRole} Salut ${message.author.username} rapporte un bug le voici: ${reason}.`);
    }
  }
});

client.on('message', (message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (command === 'dmall') {
    const member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!message.member.hasPermission('ADMINISTRATOR')) {
      return message.reply({
        embed: {
				  color: 0xC64540,
				  description: 'Pas la permission.',
        },
      });
    }
    const DMALL = args.join(' ').slice(0);
		  if (!DMALL) {
      return message.channel.send({
        embed: {
          color: 0xC64540,
          description: `${message.member} S'il vous plaît entrez un message à dm pour les joueurs du discord.`,
		  },
      });
    }

		  message.guild.members.forEach((player) => {
			  message.guild.member(player).send({
        embed: {
          color: 0x00c1c1,
          title: '**~~-+-------------[-~~ __Dark_BOT__ ~~-]------------+-~~**',
          description: `${DMALL}
				` + ' ***Message de ' + ` **${message.author.username}*** `,


			  },
      });
		  });
		  message.channel.send({
      embed: {
        color: 0xC64540,
        description: ':white_check_mark: Tous les joueurs de ce serveur discord ont reçu votre message.',
      },
    });
	  }
});

client.on('message', (message) => {
  if (message.content.startsWith(`${prefix}id`)) {
    message.channel.send(':white_check_mark: ID envoyé en MP');
    message.author.createDM().then((channel) => {
      channel.send(`:white_check_mark: Voici ton ID: **${message.author.id}**`);
    });
  }
});


client.on('message', (message) => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const member = message.mentions.users.first();
  if (command === 'idee') {
    const idee = args.slice(0).join(' ');
    const hereRole = message.guild.roles.find('name', 'Modérateur Discord');

    message.delete();
    if (!idee) {
      message.channel.send('**Aide pour la commande IDEE :** \n\n Pour utiliser la commande IDEE, mettez votre idée \n\n Ne vous amusez pas à abuser cette commande à tout va, merci :wink: ! \n\n **Exemple :** `-idee Voici mon idée ajoute ça` \n');
    } else {
      message.delete();
      message.guild.channels.find('name', 'bugs').send(`${hereRole} Salut ${member.user.tag} a une idée la voici: ${idee}.`);
      message.channel.send(`:white_check_mark: **${message.author.username}**, Votre idée a était envoyé.`);
    }
  }
});
client.on('message', (message) => {
  if (message.author.bot || message.channel.type == 'dm') return;

  const prefix = '-';
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === 'clear+') {
    if (!args[0]) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 400 - Bad Request')
        .setDescription('Tu n\'as pas précisé le nombre de messages, 99 max! EXEMPLE: -clear+ 99')
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 403 - Unauthorized')
        .setDescription('Tu n\'as pas la permission d\'exécuter cette commande !')
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else if (isNaN(args[0])) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 400 - Bad Request')
        .setDescription('L\'argument donné n\'est pas un nombre !')
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else if (parseInt(args[0]) > 99) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 400 - Bad Request')
        .setDescription('Tu ne peux effacer que 99 messages max. !')
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else {
      message.channel.fetchMessages()
        .then((messages) => {
          try {
            message.channel.bulkDelete(parseInt(args[0]));
            const clear_code = new Discord.RichEmbed()
              .setTitle('Succès :')
              .setDescription(`${args[0]} message(s) ont été supprimé(s) !`)
              .setColor('#8e44ad');
            message.channel.send(clear_code);
          } catch (err) {
            console.log(err);
          }
        });
    }
  }
});

client.on('message', (message) => {
  if (message.author.bot || message.channel.type == 'dm') return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const member = message.author.username.id;
  const object = args[0];
  const pseudo = args[1];
  const detail = args.slice(1).join(' ');
  if (command === 'fmyes') {
    if (!object) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 400 - Bad Request')
        .setDescription("Tu n\'as pas précisé le pseudo! :warning: -fmyes pseudo_du_fm + pseudo_du_joueur")
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else if (!pseudo) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 400 - Bad Request')
        .setDescription("Tu n\'as pas précisé le pseudo du joueur refusé! :warning: -fmyes pseudo_du_fm + pseudo_du_joueur")
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else {
      try {
        const code = new Discord.RichEmbed()
          .setTitle('Succès :')
          .setDescription(':white_check_mark: Votre réponse a bien été envoyée')
          .setColor('#8e44ad');
        message.channel.send(code);
        message.guild.channels.find('name', '✅commandes_fm_dj').send(` Salut, **${pseudo}** le joueur **@${message.author.username}** est OK pour traiter ta commande de fm, n'hésite pas à le MP en jeu lorsque tu le vois connecté ^^`);
      } catch (err) {
        console.log(err);
      }
    }
  }
});

client.on('message', (message) => {
  if (message.author.bot || message.channel.type == 'dm') return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const member = message.author.username.id;
  const pseudo = args[0];
  const detail = args.slice(1).join(' ');
  if (command === 'fmno') {
    if (!pseudo) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 400 - Bad Request')
        .setDescription("Tu n\'as pas précisé le pseudo du joueur refusé! :warning: -fmno personne_refusé + Informations sur le refus (champ libre)")
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else if (!detail) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 400 - Bad Request')
        .setDescription("Tu n\'as pas précisé les informations :warning: -fmno personne_refusé + Informations sur le refus (champ libre)")
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else {
      try {
        const code = new Discord.RichEmbed()
          .setTitle('Succès :')
          .setDescription(':white_check_mark: Votre réponse a bien été envoyée')
          .setColor('#8e44ad');
        message.channel.send(code);
        message.guild.channels.find('name', '✅commandes_fm_dj').send(` Salut, **${pseudo}** malheureusement les Forgemages pensent que ta commande est trop compliquée à réaliser, voici leurs raisons : **${detail} **. le DarkBot te recommande de te tourner soit vers l'HDV, soit d'aller voir dans le Livre des Artisans In-Game si personne ne peut t'aider si tu tiens vraiment à fm l'item toi même. Désolé, et bon jeu !`);
      } catch (err) {
        console.log(err);
      }
    }
  }
});

client.on('message', (message) => {
  if (message.author.bot || message.channel.type == 'dm') return;
  if (command === 'fm') {
    const code = new Discord.RichEmbed()
      .setTitle('Instruction passage commande FM :')
      .setDescription(':white_check_mark: Merci de précisé les informations nécessaires:')
      .setField('Le jet voulu / Les marges possible, si tu veux du perf perf ou si tu accepte -5 vita ou -2 stats par exemple / Le prix / La date de livraison')
      .setFiel('Pour passé la commande fait -fmgo les informations')
      .setColor('#8e44ad');
    message.channel.send(code);
  }
});

client.on('message', (message) => {
  if (message.author.bot || message.channel.type == 'dm') return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const member = message.author.username.id;
  const detail = args.slice(0).join(' ');
  const hereRole = message.guild.roles.find('name', 'Forgemages');
  if (command === 'fmgo') {
    if (!detail) {
      const err_code = new Discord.RichEmbed()
        .setTitle('Error 400 - Bad Request')
        .setDescription("Tu n\'as pas précisé! :warning: Merci d'indiqué ces informations, Le type de fm, Le jet désiré, le Budget, Item à craft Oui/Non")
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else {
      try {
        const code = new Discord.RichEmbed()
          .setTitle('Succès :')
          .setDescription(":white_check_mark: Votre commande a été envoyée, un forgemage va prendre contact avec vous dès qu'il sera disponible")
          .setColor('#8e44ad');
        message.channel.send(code);
        message.guild.channels.find('name', 'test').send(`${hereRole} Salut le joueur souhaiterait une FM. Prenez contact avec lui dès que vous êtes disponible pour cette commande directement dans le jeu ou en MP Discord ! Voici sa commande: **${detail}** .`);
        message.guild.channels.find('name', 'test').send('Tu peut accepté ou non de faire le FM avec la commande Fmyes ou Fmno');
      } catch (err) {
        console.log(err);
      }
    }
  }
});


client.on('message', (message) => {
  if (message.author.bot || message.channel.type == 'dm') return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const member = message.author.username.id;
  const object = args[0];
  const detail = args.slice(1).join(' ');
  const hereRole = message.guild.roles.find('name', 'Passeurs DJ');
  if (command === 'dj') {
    if (!object) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 400 - Bad Request')
        .setDescription("Tu n\'as pas précisé le donjon! :warning: -dj Nom_du_donjon + Informations (champ libre : besoin de succès ? précisez le ici)")
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else if (!detail) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 400 - Bad Request')
        .setDescription("Tu n\'as pas précisé les informations :warning: -dj Nom_du_donjon + Informations")
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else {
      try {
        const code = new Discord.RichEmbed()
          .setTitle('Succès :')
          .setDescription(":white_check_mark: Votre commande a été envoyée, un Passeur DJ va prendre contact avec vous dès qu'il sera disponible")
          .setColor('#8e44ad');
        message.channel.send(code);
        message.guild.channels.find('name', '⛔liste_commandes_dj').send(`${hereRole} Salut le joueur @${message.author.username} souhaiterait passer un donjon. Prenez contact avec lui dès que vous êtes disponible pour cette commande directement dans le jeu ou en MP Discord ! Voici le donjon en question: **${object}** . Informations supplémentaires sur le passage du donjon: **${detail}**`);
      } catch (err) {
        console.log(err);
      }
    }
  }
});
client.on('message', (message) => {
  if (message.author.bot || message.channel.type == 'dm') return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const member = message.author.username.id;
  const object = args[0];
  const detail = args.slice(1).join(' ');
  const hereRole = message.guild.roles.find('name', 'Passeurs DJ');
  if (command === 'dj') {
    if (!object) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 400 - Bad Request')
        .setDescription("Tu n\'as pas précisé le donjon! :warning: -dj Nom_du_donjon + Informations")
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else if (!detail) {
      var err_code = new Discord.RichEmbed()
        .setTitle('Error 400 - Bad Request')
        .setDescription("Tu n\'as pas précisé les informations :warning: -dj Nom_du_donjon + Informations")
        .setColor('#e74c3c');
      message.channel.send(err_code);
    } else {
      try {
        const code = new Discord.RichEmbed()
          .setTitle('Succès :')
          .setDescription(":white_check_mark: Votre commande a été envoyée, un Passeurs DJ va prendre contact avec vous dès qu'il sera disponible")
          .setColor('#8e44ad');
        message.channel.send(code);
        message.guild.channels.find('name', 'test').send(`${hereRole} Salut le joueur @${message.author.username} souhaiterait passer un donjon. Prenez contact avec lui dès que vous êtes disponible pour cette commande directement dans le jeu ou en MP Discord ! Voici le donjon en question: **${object}** . Informations supplémentaires sur le passage du donjon: **${detail}**`);
      } catch (err) {
        console.log(err);
      }
    }
  }
});
