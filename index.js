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
          title: '-bug "Indiqué le bug"',
          description: `Rapporter tous beug au modo sur le bot`,
          title: '-fm "Object a FM" + "Information"',
          description: `Permet de passer une commande a un joueur`,
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
    
    if (command === "fm") {
        
        let object = args[0];
        let detail = args.slice(1).join(" ");
        let hereRole = message.guild.roles.find("name", "Forgemages");
        message.channel.send('Votre commande a était envoyé')
       
            message.delete()
            message.guild.channels.find("name", "liste-commande-fm").send(hereRole + ` Salut `+ 'le joueur ' + message.member.displayName + ` souhaiterai: ${object}. Information supplémentaire sur le FM: ${detail}`);
             // message.channel.send(hereRole + ` Salut `+ 'le joueur ' + message.member.displayName + ` souhaiterai: ${object}. Information supplémentaire sur le FM: ${detail}`);
           
    } return 

})
