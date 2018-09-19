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
          title: '-fm "Object a FM" + "Information"',
          description: `Permet de passer une commande a un joueur`,
          exemple: `-fm `,
        }

      });
    };
})
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
