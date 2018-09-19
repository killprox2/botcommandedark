const Discord = require('discord.js')
const bot = new Discord.Client()
const prefix = "-";


bot.on('ready', function () {
  console.log("Bot connecté !")
})

bot.login(process.env.TOKEN)


bot.on('message', message => {
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
bot.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const member = message.mentions.users.first();
    
    if (command === "fm") {
        
        let object = args[0];
        let detail = args.slice(1).join(" ");
        let hereRole = message.guild.roles.find("name", "Forgemages");
        message.channel.send('Votre commande a était envoyé')
       
            message.delete()
           // message.guild.channels.find("name", "liste-commande-fm").send(hereRole + 'Salut le joueur ' + message.member.displayName + ' souhaiterai ' ${object}' .Information supplémentaire ' ${detail});
            message.guild.channels.find("name", "liste-commande-fm").send('Salut le joueur ' + message.member.displayName + ' souhaiterai ' ${object}' .Information supplémentaire ' ${detail});
           
             // message.channel.send(hereRole + ` Salut `+ 'le joueur ' + message.member.displayName + ` souhaiterai: ${object}. Information supplémentaire sur le FM: ${detail}`);
        }
    } return 

})
