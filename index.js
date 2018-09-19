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
      message.channel.send({
        embed: {
          title: 'HELP',
          description: `Permet de connaitre toute les commandes`,
          fields: [
            {
              name: '-fm',
              value: 'Permet de passer une commande a un joueur'
            },
            {
              name: '-bug',
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
      
      let bug1 = args.slice(0).join(" ");
      let hereRole = message.guild.roles.find("name", "Modérateur Discord");
      
      message.channel.send('Votre bug a était envoyé')

          message.delete()
          message.guild.channels.find("name", "bugs").send(hereRole +` Salut ` + message.member.displayName + ` rapport un bug le voici: ${bug1}.`);
           // message.channel.send(hereRole + ` Salut `+ 'le joueur ' + message.member.displayName + ` souhaiterai: ${object}. Information supplémentaire sur le FM: ${detail}`);
         
  } return })

  client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const member = message.mentions.users.first();
    
    if (command === "bug1") {
        
        let reason = args.slice(0).join(" ");
        let hereRole = message.guild.roles.find("name", "Modérateur Discord");
        if(!reason) reason = "Aucune reason";
        message.channel.send('Merci de décrire le bug')
  
            message.delete()
            message.guild.channels.find("name", "bugs").send(hereRole +` Salut ` + message.member.displayName + ` rapport un bug le voici: ${reason}.`);
             // message.channel.send(hereRole + ` Salut `+ 'le joueur ' + message.member.displayName + ` souhaiterai: ${object}. Information supplémentaire sur le FM: ${detail}`);
           
    } return })


          client.on('message', message => {
            const args = message.content.slice(prefix.length).trim().split(/ +/g);
            const command = args.shift().toLowerCase();
            const member = message.mentions.users.first();
            
            if (command === "fm") {
                
                let object = args[0];
                let detail = args.slice(1).join(" ");
                let hereRole = message.guild.roles.find("name", "Forgemages");
                message.channel.send('Votre commande a était envoyé')
               
                    message.delete()
                    message.guild.channels.find("name", "liste-commande-fm").send(hereRole + ` Salut `+ 'le joueur ' + message.member.displayName + ` souhaiterai: ${object}. Information supplémentaire sur le FM: ${detail}`);
                     // message.channel.send(hereRole + ` Salut `+ 'le joueur ' + message.member.displayName + ` souhaiterai: ${object}. Information supplémentaire sur le FM: ${detail}`);
                   
            } return }
          )
